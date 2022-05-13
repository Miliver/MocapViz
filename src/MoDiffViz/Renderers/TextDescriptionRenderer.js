import {SequenceDescriptionManager} from "../Managers/SequenceDescriptionManager.js";

class TextDescriptionRenderer {
    static render(textElement, longerSequence, shorterSequence, dtw, switchedSequences) {
        let longerSequenceCategory = SequenceDescriptionManager.getSequenceCategory(longerSequence);
        let shorterSequenceCategory = SequenceDescriptionManager.getSequenceCategory(shorterSequence);
        let longerSequenceId = SequenceDescriptionManager.getSequenceId(longerSequence);
        let shorterSequenceId = SequenceDescriptionManager.getSequenceId(shorterSequence);

        if (switchedSequences) {
            TextDescriptionRenderer.#addText(textElement, "The order of sequences was switched so that the longer one is on top");
        }

        TextDescriptionRenderer.#addText(textElement, "Top (longer) sequence: ID " + longerSequenceId
            + ", category: " + longerSequenceCategory);

        TextDescriptionRenderer.#addText(textElement, "Bottom (shorter) sequence: ID " + shorterSequenceId
            + ", category: " + shorterSequenceCategory);

        TextDescriptionRenderer.#addText(textElement, "DTW distance: " + dtw.distance.toFixed(2));
        TextDescriptionRenderer.#addText(textElement, "DTW distance normalized by warping path length: " + (dtw.distance / dtw.warpingPath.length).toFixed(2));

        if (dtw.context.dtwDistanceAverage !== 0) {
            textElement.appendChild(document.createTextNode("Average of DTW distance: " + dtw.context.dtwDistanceAverage));
        }
    }

    static #addText(textElement, text) {
        textElement.appendChild(document.createTextNode(text));
        textElement.appendChild(document.createElement("br"));
    }
}

export {TextDescriptionRenderer};