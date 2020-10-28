let bonesVicon = [
    {a: 0, b: 1, type: BoneType.leftLeg}, {a: 1, b: 2, type: BoneType.leftLeg}, {a: 2, b: 3, type: BoneType.leftLeg}, 
    {a: 3, b: 4, type: BoneType.leftLeg}, {a: 4, b: 5, type: BoneType.leftLeg}, // leg
    {a: 0, b: 6, type: BoneType.rightLeg}, {a: 6, b: 7, type: BoneType.rightLeg}, {a: 7, b: 8, type: BoneType.rightLeg}, 
    {a: 8, b: 9, type: BoneType.rightLeg}, {a: 9, b: 10, type: BoneType.rightLeg}, // leg
    {a: 0, b: 11, type: BoneType.torso}, {a: 11, b: 12, type: BoneType.torso}, {a: 12, b: 13, type: BoneType.torso}, 
    {a: 13, b: 14, type: BoneType.torso}, {a: 14, b: 15, type: BoneType.torso}, {a: 15, b: 16, type: BoneType.torso}, // torso + head
    {a: 13, b: 17, type: BoneType.leftHand}, {a: 17, b: 18, type: BoneType.leftHand}, {a: 18, b: 19, type: BoneType.leftHand}, 
    {a: 19, b: 20, type: BoneType.leftHand}, {a: 20, b: 21, type: BoneType.leftHand}, {a: 21, b: 22, type: BoneType.leftHand}, 
    {a: 20, b: 23, type: BoneType.leftHand}, // hand
    {a: 13, b: 24, type: BoneType.rightHand}, {a: 24, b: 25, type: BoneType.rightHand}, {a: 25, b: 26, type: BoneType.rightHand}, 
    {a: 26, b: 27, type: BoneType.rightHand}, {a: 27, b: 28, type: BoneType.rightHand}, {a: 28, b: 29, type: BoneType.rightHand}, 
    {a: 27, b: 30, type: BoneType.rightHand} // hand
]; //head = 16, origin = 0
let bonesKinect = [
    {a: 0, b: 1, type: BoneType.torso}, {a: 1, b: 20, type: BoneType.torso}, {a: 20, b: 2, type: BoneType.torso}, {a: 2, b: 3, type: BoneType.torso},
    {a: 20, b: 4, type: BoneType.leftHand}, {a: 4, b: 5, type: BoneType.leftHand}, {a: 5, b: 6, type: BoneType.leftHand}, {a: 6, b: 7, type: BoneType.leftHand},
    {a: 20, b: 8, type: BoneType.rightHand}, {a: 8, b: 9, type: BoneType.rightHand}, {a: 9, b: 10, type: BoneType.rightHand}, {a: 10, b: 11, type: BoneType.rightHand},
    {a: 0, b: 12, type: BoneType.leftLeg}, {a: 12, b: 13, type: BoneType.leftLeg}, {a: 13, b: 14, type: BoneType.leftLeg}, {a: 14, b: 15, type: BoneType.leftLeg},
    {a: 0, b: 16, type: BoneType.rightLeg}, {a: 16, b: 17, type: BoneType.rightLeg}, {a: 17, b: 18, type: BoneType.rightLeg}, {a: 18, b: 19, type: BoneType.rightLeg},
    {a: 7, b: 21, type: BoneType.leftHand}, {a: 7, b: 22, type: BoneType.leftHand}, 
    {a: 11, b: 23, type: BoneType.rightHand}, {a: 11, b: 24, type: BoneType.rightHand},
]; //head = 3, origin = 0
let bonesKinect2d = [
    {a: 0, b: 1, type: BoneType.leftLeg}, {a: 1, b: 2, type: BoneType.leftLeg}, {a: 2, b: 6, type: BoneType.leftLeg},  // leg
    {a: 3, b: 4, type: BoneType.rightLeg}, {a: 4, b: 5, type: BoneType.rightLeg}, {a: 3, b: 6, type: BoneType.rightLeg}, // leg
    {a: 6, b: 7, type: BoneType.torso}, {a: 7, b: 8, type: BoneType.torso}, {a: 8, b: 9, type: BoneType.torso}, // torso + head
    {a: 7, b: 12, type: BoneType.leftHand}, {a: 12, b: 11, type: BoneType.leftHand}, {a: 11, b: 10, type: BoneType.leftHand}, // hand
    {a: 7, b: 13, type: BoneType.rightHand}, {a: 13, b: 14, type: BoneType.rightHand}, {a: 14, b: 15, type: BoneType.rightHand} // hand
]; //head = 9, origin = 6


let figureScale = 8;
let height = 600;
let width = 1000;
let currentFrame = 0;
let headRadius = 18;
let jointRadius = 0;
let boneRadius = 2;
let numPositions = 8;
let numBlurPositions = 10;
let jointStyle = {r:0, g:0, b:0, a:1};
let boneStyle = {r:0, g:0, b:0, a:1};
let leftBoneStyle = {r:128, g:0, b:0, a:1};
let rightBoneStyle = {r:0, g:0, b:128, a:1};
let blurStyle = {r:0, g:0, b:0, a:0.1};
let sequences = [];
let currentPlayingFrames = [];
let playingSequence = false;
let headJointIndex = 16;
let drawStyle = new MocapDrawStyle(bonesVicon, headJointIndex, boneRadius, jointRadius, headRadius, boneStyle, leftBoneStyle, rightBoneStyle, jointStyle);
let drawStyleBlur = new MocapDrawStyle(bonesVicon, headJointIndex, boneRadius, jointRadius, headRadius, blurStyle, blurStyle, blurStyle, blurStyle);

const availableSequencesText = document.getElementById("availableSequencesText");
const sequenceNumberInput = document.getElementById("sequenceNumberInput");
const sequenceInputLoadButton = document.getElementById("sequenceInputLoadButton");
const sequenceInputPlayButton = document.getElementById("sequenceInputPlayButton");
const dataFileInput = document.getElementById("dataFileInput");
const dataTextInput = document.getElementById("dataTextInput");
const numFramesInput = document.getElementById("numFramesInput");
const yRotationInput = document.getElementById("yRotationInput");
const loadButton = document.getElementById("dataInputLoadButton");
const loadTextButton = document.getElementById("dataTextLoadButton");
const bonesModelInput = document.getElementById("bonesModelInput");
const scaleInput = document.getElementById("scaleInput");
const autorotateInput = document.getElementById("autorotateInput");
const autoscaleInput = document.getElementById("autoscaleInput");
const mapPerKeyframeInput = document.getElementById("mapsPerKeyframeInput");
loadButton.onclick = loadDataFile;
loadTextButton.onclick = loadDataText;
sequenceInputLoadButton.onclick = drawSequenceMain;
sequenceInputPlayButton.onclick = playSequence;
const canvas = document.getElementById("drawBox");
canvas.width = width;
canvas.height = height;
let ctx = canvas.getContext("2d");

//const queryString = window.location.search;
//console.log(queryString);
//const urlParams = new URLSearchParams(queryString);

loadDataFile();
setInterval(update, 10);

function loadDataFile() {
    if (dataFileInput.files.length == 0) {
        return;
    } 
    let reader = new FileReader();
    reader.onload = function (textResult) {
        let text = textResult.target.result;
        sequences = text.split("#objectKey").filter((s) => {return s != "";});
        availableSequencesText.innerText = sequences.length;
    }
    reader.readAsText(dataFileInput.files[0], "UTF-8");
}

function loadDataText() {
    if (dataTextInput.value.length == 0) {
        return;
    } 
    sequences = dataTextInput.value.split("#objectKey").filter((s) => {return s != "";});
    availableSequencesText.innerText = sequences.length;
}

function processSelectedSequence() {
    figureScale = parseFloat(scaleInput.value);
    numPositions = parseInt(numFramesInput.value);
    if (bonesModelInput.value == "Vicon") {
        drawStyle.bonesModel = bonesVicon;
        drawStyle.headJointIndex = 16;
        drawStyleBlur.bonesModel = bonesVicon;
        drawStyleBlur.headJointIndex = 16;
    } else if (bonesModelInput.value == "Kinect") {
        drawStyle.bonesModel = bonesKinect;
        drawStyle.headJointIndex = 3;
        drawStyleBlur.bonesModel = bonesKinect;
        drawStyleBlur.headJointIndex = 3;
    } else if (bonesModelInput.value == "Kinect2d") {
        drawStyle.bonesModel = bonesKinect2d;
        drawStyle.headJointIndex = 9;
        drawStyleBlur.bonesModel = bonesKinect2d;
        drawStyleBlur.headJointIndex = 9;
    }
    console.log(bonesModelInput.value);
    playingSequence = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let selectedSequence = parseInt(sequenceNumberInput.value);
    let frames = processSequenceToFrames(sequences[selectedSequence], canvas.height, figureScale);
    if (autoscaleInput.checked) {
        if (frames.length == 0) {
            frames = processSequenceToFrames2d(sequences[selectedSequence], canvas.height, figureScale);
            figureScale = figureScale*findOptimalScale(frames, canvas, numPositions);
            frames = processSequenceToFrames2d(sequences[selectedSequence], canvas.height, figureScale);
        } else {
            figureScale = figureScale*findOptimalScale(frames, canvas, numPositions);
            frames = processSequenceToFrames(sequences[selectedSequence], canvas.height, figureScale);
        }
        scaleInput.value = figureScale;
    } else {
        if (frames.length == 0) {
            frames = processSequenceToFrames2d(sequences[selectedSequence], canvas.height, figureScale);
        }
    }
    if (autorotateInput.checked) {
        let bestRotation = findBestRotation(frames, numPositions);
        yRotationInput.value = bestRotation*57.29578778556937;
        console.log(bestRotation);
    }
    return frames;
}

function drawSequenceMain() {
    if (mapPerKeyframeInput.checked) {
        loadSequenceMaps();
    } else {
        loadSequence();
    }
}

function loadSequence() {
    let frames = processSelectedSequence();
    let yRotation = parseFloat(yRotationInput.value)*0.01745329;
    for (let i = 0; i < frames.length; i++) {
        frames[i] = frameRotateY(frames[i], yRotation);
    }
    let keyframes = findKeyframes(frames, numPositions);
    console.log(keyframes);
    let notKeyframes = [];
    for (let i = 0; i < keyframes.length; i++) {
        notKeyframes.push(Math.floor((i/keyframes.length)*frames.length));
    }
    console.log(frames);
    drawSequenceKeyframesBlur(canvas, frames, keyframes, numBlurPositions, drawStyle, drawStyleBlur, 0, true);
    drawMapScale(canvas);
    //drawTopDownMap(canvas, frames, keyframes, {x:width/2-5*height/24, y:1*height/24, z:0}, {x:width/2+5*height/24, y:11*height/24, z:0}, false);
    drawTopDownMapParallelogram(canvas, frames, keyframes, 
        {x:width/2-4*height/24, y:3*height/24, z:0}, {x:width/2-6*height/24, y:9*height/24, z:0}, {x:width/2+4*height/24, y:9*height/24, z:0}, frames.length, false);
    //drawSequenceKeyframesBlur(canvas, frames, notKeyframes, numBlurPositions, drawStyle, drawStyleBlur, -height/2, false);
    //drawSequenceBlur(canvas, frames, numPositions, numBlurPositions, drawStyle, drawStyleBlur);
}

//todo: make this optional
function loadSequenceMaps() {
    let frames = processSelectedSequence();
    let yRotation = parseFloat(yRotationInput.value)*0.01745329;
    for (let i = 0; i < frames.length; i++) {
        frames[i] = frameRotateY(frames[i], yRotation);
    }
    let keyframes = findKeyframes(frames, numPositions);
    console.log(keyframes);
    let notKeyframes = [];
    for (let i = 0; i < keyframes.length; i++) {
        notKeyframes.push(Math.floor((i/keyframes.length)*frames.length));
    }
    console.log(frames);
    drawSequenceKeyframesBlurWithMaps(canvas, frames, keyframes, numBlurPositions, drawStyle, drawStyleBlur, 0, true);
}

function playSequence() {
    currentFrame = 0;
    clearCanvas(canvas);
    currentPlayingFrames = processSelectedSequence();
    if (currentPlayingFrames.length == 0) {
        return;
    }
    playingSequence = true;
    console.debug(currentPlayingFrames);
    jointStyle = 'rgba(0,0,0,0.75)';
    boneStyle = 'rgba(0,0,0,0.75)';
}

function update() {
    if (!playingSequence) {
        return;
    }
    clearCanvas(canvas);
    let yRotation = parseFloat(yRotationInput.value)*0.01745329;
    drawFrame(canvas, frameRotateY(currentPlayingFrames[currentFrame], yRotation), width/2, 0, drawStyle);
    currentFrame++;
    if (currentFrame >= currentPlayingFrames.length) {
        currentFrame = currentFrame%currentPlayingFrames.length;
    }
}
