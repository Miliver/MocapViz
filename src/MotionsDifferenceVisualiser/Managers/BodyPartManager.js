import * as Model from "../../model.js";
import {DtwManager} from "./DtwManager.js";

class BodyPartManager {
    static getIndexesPerBodyPart(bodyPart, model) {
        if (model === Model.modelVicon) {
            return BodyPartManager.#getIndexesPerBodyPartModel(bodyPart, Model.bonesVicon);
        } else if (model === Model.modelKinect) {
            return BodyPartManager.#getIndexesPerBodyPartModel(bodyPart, Model.bonesKinect);
        }

        return null;
    }

    static getBodyPartsPerModel(longerSeq, shorterSeq, dtw, model) {
        let dtwBodyParts = [];
        dtwBodyParts.push([DtwManager.calculateDtwPerBodyPart(longerSeq, shorterSeq, dtw, Model.BoneType.torso, model,
            dtw.context), "Torso"]);
        dtwBodyParts.push([DtwManager.calculateDtwPerBodyPart(longerSeq, shorterSeq, dtw, Model.BoneType.leftHand, model,
            dtw.context), "Left hand"]);
        dtwBodyParts.push([DtwManager.calculateDtwPerBodyPart(longerSeq, shorterSeq, dtw, Model.BoneType.rightHand, model,
            dtw.context), "Right hand"]);
        dtwBodyParts.push([DtwManager.calculateDtwPerBodyPart(longerSeq, shorterSeq, dtw, Model.BoneType.leftLeg, model,
            dtw.context), "Left leg"]);
        dtwBodyParts.push([DtwManager.calculateDtwPerBodyPart(longerSeq, shorterSeq, dtw, Model.BoneType.rightLeg, model,
            dtw.context), "Right leg"]);

        return dtwBodyParts;
    }

    static #getIndexesPerBodyPartModel(bodyPart, model) {
        let filteredBones = model.filter(function(b) {
            return b.type === bodyPart
        });

        let set1 = new Set(filteredBones.map(fb => fb.a));
        let set2 = new Set(filteredBones.map(fb => fb.b));

        set2.forEach(set1.add, set1);
        return set2;
    }
}

export {BodyPartManager};