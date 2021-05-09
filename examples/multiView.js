import * as Mocap from '../src/mocap.js';
import * as Mocap2d from '../src/mocapCanvas2d.js';
import * as Model from "../src/model.js";

let sequences = [];
let maxSequencesLoad = 600;
let loaded = true;


const availableSequencesText = document.getElementById("availableSequencesText");
const sequenceNumberInput = document.getElementById("sequenceNumberInput");
const sequenceInputLoadButton = document.getElementById("sequenceInputLoadButton");
const dataFileInput = document.getElementById("dataFileInput");
const dataTextInput = document.getElementById("dataTextInput");
const numSequencesInput = document.getElementById("numSequencesInput");
const numSequencesPageInput = document.getElementById("numSequencesPageInput");
const numFramesInput = document.getElementById("numFramesInput");
const numBlurFramesInput = document.getElementById("numBlurFramesInput");
const loadButton = document.getElementById("dataInputLoadButton");
const loadTextButton = document.getElementById("dataTextLoadButton");
const bonesModelInput = document.getElementById("bonesModelInput");
const scaleInput = document.getElementById("scaleInput");
const autorotateInput = document.getElementById("autorotateInput");
const autoscaleInput = document.getElementById("autoscaleInput");
const mapPerSequenceInput = document.getElementById("mapsPerSequenceInput");
const mapsParallelogramInput = document.getElementById("mapsParallelogramInput");
const timeScaleInput = document.getElementById("timeScaleInput");
const timeImageScaleInput = document.getElementById("timeImageScaleInput");
const mapScalingEnabledInput = document.getElementById("mapScaleInput");
const mapUnitGridInput = document.getElementById("mapUnitGridInput");
const addFillKeyframesInput = document.getElementById("addFillKeyframesInput");
const xAxisTimeInput = document.getElementById("xAxisTimeInput");
const keyframeSelectionInput = document.getElementById("keyframeSelectionInput");
const actorHeightInput = document.getElementById("actorHeightInput");
const calculateConversionButton = document.getElementById("calculateConversionButton");
const contentDiv = document.getElementById("content");
const zoomableVisualizationsInput = document.getElementById("zoomableVisualizationsInput");
const labelFramesInput = document.getElementById("labelFramesInput");
const oldRenderingInput = document.getElementById("oldRenderingInput");
const categorySelection = document.getElementById("categorySelection");
loadButton.onclick = loadDataFile;
sequenceInputLoadButton.onclick = createVisualizations;
//calculateConversionButton.onclick = calculateConversion;
const drawContainer = document.getElementById("drawContainer");


function loadDataFile() {
    if (dataFileInput.files.length == 0 || !loaded) {
        return;
    }
    loaded = false;
    let predicate = null;
    let category = categorySelection.value;
    if (category != "allCategories") {
        predicate = (s) => {return category == Mocap.getSequenceCategory(s);};
    }
    let time = performance.now();
    Mocap.loadDataFromFile(dataFileInput.files[0], (fileSequences) => {
        sequences = fileSequences;
        loaded = true;
        console.log("Loaded " + sequences.length + " sequences in " + (performance.now()-time) + "ms.");
        createVisualizations();
        availableSequencesText.innerText = sequences.length;
    }, predicate, 20, maxSequencesLoad);
}

function createVisualizations() {
    let time = performance.now();
    let targetElement = document.getElementById("drawContainer");
    let keyframesNum = parseInt(numFramesInput.value);
    let numBlurFrames = parseInt(numBlurFramesInput.value);
    let addFilling = addFillKeyframesInput.checked;
    let width = targetElement.clientWidth*0.95;
    let height = window.innerHeight*0.98*(1/parseInt(numSequencesPageInput.value));
    let useTrueTime = xAxisTimeInput.checked;
    let labelFrames = labelFramesInput.checked;
    let timeScale = timeScaleInput.checked;
    let mapWidth = mapPerSequenceInput.checked ? 150 : 0;
    let keyframeAlgorithm = Mocap.KeyframeSelectionAlgorithmEnum[keyframeSelectionInput.value];
    targetElement.innerHTML = "";
    let toDrawSequences = [];
    for (let i = parseInt(sequenceNumberInput.value); i < parseInt(sequenceNumberInput.value)+parseInt(numSequencesInput.value); i++) {
        if (i < 0 || i >= sequences.length) {
            continue;
        }
        toDrawSequences.push(i);
    }
    let longestSequenceLength = 0;
    for (let i = 0; i < toDrawSequences.length; i++) {
        const sequence = sequences[toDrawSequences[i]];
        longestSequenceLength = Math.max(Mocap.getSequenceLength(sequence), longestSequenceLength);
    }
    let factory = new Mocap.VisualizationFactory();
    factory.addFillingKeyframes = addFilling;
    factory.useTrueTime = useTrueTime;
    factory.labelFrames = labelFrames;
    factory.addTimeScale = timeScale;
    factory.createZoomable = zoomableVisualizationsInput.checked;
    factory.keyframeSelectionAlgorithm = keyframeAlgorithm;
    factory.numBlurFrames = numBlurFrames;
    if (bonesModelInput.value == "Kinect") {
        factory.model = Model.modelKinect;
    } else if (bonesModelInput.value == "Kinect2d") {
        factory.model = Model.modelKinect2d;
    }
    function* elementGen() {
        for (let i = 0; i < toDrawSequences.length; i++) {
            const sequence = sequences[toDrawSequences[i]];
            let numKeyframes = Math.max(2, Math.round(keyframesNum*(sequence.length/longestSequenceLength)));
            console.log("i:"+i);
            let visWidth = (width-170)*(sequence.length/longestSequenceLength);
            if (!timeImageScaleInput.checked) {
                visWidth=width-170;
                numKeyframes=keyframesNum;
            }
            let visualization;
            if (!oldRenderingInput.checked) {
                factory.numKeyframes = numKeyframes;
                factory.numZoomedKeyframes = keyframesNum+2;
                visualization = factory.createVisualization(sequence, visWidth, height, mapWidth, height);
            } else {
                visualization = Mocap2d.createZoomableVisualizationElement(sequence, Mocap.modelVicon, numKeyframes, keyframesNum+2, numBlurFrames, 
                    mapWidth, height, visWidth, height, timeScale, addFilling, keyframeAlgorithm, labelFrames, useTrueTime);
            }
            visualization.children[0].classList.add("drawBox");
            if (mapPerSequenceInput.checked) {
                visualization.children[1].classList.add("drawBox");
            }
            targetElement.appendChild(visualization);
            yield i;
        }
        return -1;
    }
    let gen = elementGen();
    function rAFLoop(calculate){
        return new Promise(resolve => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                calculate();
                resolve();
            })
          })
        })
    }
    async function loop(){
        let done = false;
        while (!done) {
            await rAFLoop(() => {
                if (gen.next().done) {
                    done = true;
                }
            });
        }
        console.log("Visualization done in " + (performance.now()-time) + "ms.");
    }
    loop();
} 


addCategorySelectionOptions();

function addCategorySelectionOptions() {
    let allCategories = Mocap.motionSuperCategories.allCategories;
    allCategories.splice(allCategories.indexOf("140"), 1);
    for (let i = 0; i < allCategories.length; i++) {
        const category = allCategories[i];
        let option = document.createElement("option");
        option.value = category;
        option.innerHTML = category+": "+Mocap.motionCategoriesHuman[category];
        categorySelection.appendChild(option);
    }
}