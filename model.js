const bonesVicon = [
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

const bonesKinect = [
    {a: 0, b: 1, type: BoneType.torso}, {a: 1, b: 20, type: BoneType.torso}, {a: 20, b: 2, type: BoneType.torso}, {a: 2, b: 3, type: BoneType.torso},
    {a: 20, b: 4, type: BoneType.leftHand}, {a: 4, b: 5, type: BoneType.leftHand}, {a: 5, b: 6, type: BoneType.leftHand}, {a: 6, b: 7, type: BoneType.leftHand},
    {a: 20, b: 8, type: BoneType.rightHand}, {a: 8, b: 9, type: BoneType.rightHand}, {a: 9, b: 10, type: BoneType.rightHand}, {a: 10, b: 11, type: BoneType.rightHand},
    {a: 0, b: 12, type: BoneType.leftLeg}, {a: 12, b: 13, type: BoneType.leftLeg}, {a: 13, b: 14, type: BoneType.leftLeg}, {a: 14, b: 15, type: BoneType.leftLeg},
    {a: 0, b: 16, type: BoneType.rightLeg}, {a: 16, b: 17, type: BoneType.rightLeg}, {a: 17, b: 18, type: BoneType.rightLeg}, {a: 18, b: 19, type: BoneType.rightLeg},
    {a: 7, b: 21, type: BoneType.leftHand}, {a: 7, b: 22, type: BoneType.leftHand}, 
    {a: 11, b: 23, type: BoneType.rightHand}, {a: 11, b: 24, type: BoneType.rightHand},
]; //head = 3, origin = 0

const bonesKinect2d = [
    {a: 0, b: 1, type: BoneType.leftLeg}, {a: 1, b: 2, type: BoneType.leftLeg}, {a: 2, b: 6, type: BoneType.leftLeg},  // leg
    {a: 3, b: 4, type: BoneType.rightLeg}, {a: 4, b: 5, type: BoneType.rightLeg}, {a: 3, b: 6, type: BoneType.rightLeg}, // leg
    {a: 6, b: 7, type: BoneType.torso}, {a: 7, b: 8, type: BoneType.torso}, {a: 8, b: 9, type: BoneType.torso}, // torso + head
    {a: 7, b: 12, type: BoneType.leftHand}, {a: 12, b: 11, type: BoneType.leftHand}, {a: 11, b: 10, type: BoneType.leftHand}, // hand
    {a: 7, b: 13, type: BoneType.rightHand}, {a: 13, b: 14, type: BoneType.rightHand}, {a: 14, b: 15, type: BoneType.rightHand} // hand
]; //head = 9, origin = 6

const modelVicon = {bonesModel: bonesVicon, fps: 120, headJointIndex: 16, defaultScale: 8};
const modelKinect = {bonesModel: bonesKinect, fps: 30, headJointIndex: 3, defaultScale: 180};
const modelKinect2d = {bonesModel: bonesKinect2d, fps: 30, headJointIndex: 9, defaultScale: 0.6};

const motionCategories = {
    "1":"cartwheel",
    "2":"grabDepR",
    "3":"kick",
    "4":"move",
    "5":"punch",
    "6":"rotateArms",
    "7":"sitLieDown",
    "8":"standUp",
    "9":"throwR",
    "10":"jump",
    "11":"hopOneLeg",
    "12":"neutral",
    "13":"tpose",
    "14":"others",
    "15":"exercise",
    "16":"turn",
    "17":"fi_left_step",
    "18":"fi_right_step",
    "19":"fi_left_walk_cycle",
    "20":"fi_right_walk_cycle",
    "21":"fi_jump",
    "22":"turnRight",
    "23":"turnLeft",
    "24":"walkBackwards2StepsRstart",
    "25":"walkBackwards4StepsRstart",
    "26":"walkLeft2Steps",
    "27":"walkLeft3Steps",
    "28":"walkRightCrossFront3Steps",
    "29":"walkRightCrossFront2Steps",
    "30":"walk4StepsRstart",
    "31":"walk2StepsRstart",
    "32":"sneak2StepsRStart",
    "33":"sneak4StepsRStart",
    "34":"sneak2StepsLStart",
    "35":"sneak4StepsLStart",
    "36":"walk4StepsLstart",
    "37":"walk2StepsLstart",
    "38":"shuffle2StepsRStart",
    "39":"shuffle4StepsRStart",
    "40":"shuffle2StepsLStart",
    "41":"shuffle4StepsLStart",
    "42":"jogOnPlaceStartFloor2StepsRStart",
    "43":"jogOnPlaceStartFloor4StepsRStart",
    "44":"jogOnPlaceStartAir2StepsLStart",
    "45":"jogOnPlaceStartAir4StepsLStart",
    "46":"jogOnPlaceStartAir2StepsRStart",
    "47":"runOnPlaceStartFloor2StepsRStart",
    "48":"runOnPlaceStartFloor4StepsRStart",
    "49":"runOnPlaceStartAir2StepsLStart",
    "50":"runOnPlaceStartAir4StepsLStart",
    "51":"runOnPlaceStartAir2StepsRStart",
    "52":"walkOnPlace2StepsRStart",
    "53":"walkOnPlace4StepsRStart",
    "54":"walkOnPlace2StepsLStart",
    "55":"walkOnPlace4StepsLStart",
    "56":"walkLeftCircle4StepsLstart",
    "57":"walkLeftCircle6StepsLstart",
    "58":"jogRightCircle4StepsLstart",
    "59":"jogRightCircle6StepsLstart",
    "60":"walkRightCircle4StepsLstart",
    "61":"walkRightCircle6StepsLstart",
    "62":"jogLeftCircle4StepsRstart",
    "63":"jogLeftCircle6StepsRstart",
    "64":"walkLeftCircle4StepsRstart",
    "65":"walkLeftCircle6StepsRstart",
    "66":"walkRightCircle4StepsRstart",
    "67":"jogRightCircle4StepsRstart",
    "68":"jogRightCircle6StepsRstart",
    "69":"depositFloorR",
    "70":"grabFloorR",
    "71":"depositHighR",
    "72":"grabHighR",
    "73":"depositLowR",
    "74":"grabLowR",
    "75":"depositMiddleR",
    "76":"grabMiddleR",
    "77":"kickLFront1Reps",
    "78":"kickLFront2Reps",
    "79":"kickLSide1Reps",
    "80":"kickLSide2Reps",
    "81":"punchRFront2Reps",
    "82":"punchRFront1Reps",
    "83":"kickRFront1Reps",
    "84":"kickRFront2Reps",
    "85":"punchRSide1Reps",
    "86":"punchRSide2Reps",
    "87":"punchLFront2Reps",
    "88":"punchLFront1Reps",
    "89":"punchLSide2Reps",
    "90":"punchLSide1Reps",
    "91":"kickRSide1Reps",
    "92":"kickRSide2Reps",
    "93":"throwStandingHighR",
    "94":"throwStandingLowR",
    "95":"throwBasketball",
    "96":"throwFarR",
    "97":"throwSittingHighR",
    "98":"throwSittingLowR",
    "99":"rotateArmsLForward1Reps",
    "100":"rotateArmsLForward3Reps",
    "101":"rotateArmsLBackward1Reps",
    "102":"rotateArmsLBackward3Reps",
    "103":"rotateArmsRForward1Reps",
    "104":"rotateArmsRForward3Reps",
    "105":"rotateArmsBothForward1Reps",
    "106":"rotateArmsBothForward3Reps",
    "107":"rotateArmsBothBackward1Reps",
    "108":"rotateArmsBothBackward3Reps",
    "109":"rotateArmsRBackward1Reps",
    "110":"rotateArmsRBackward3Reps",
    "111":"skier3RepsLstart",
    "112":"skier1RepsLstart",
    "113":"elbowToKnee3RepsRelbowStart",
    "114":"elbowToKnee1RepsRelbowStart",
    "115":"elbowToKnee1RepsLelbowStart",
    "116":"elbowToKnee3RepsLelbowStart",
    "117":"squat1Reps",
    "118":"squat3Reps",
    "119":"jumpingJack1Reps",
    "120":"jumpingJack3Reps",
    "121":"lieDownFloor",
    "122":"standUpLieFloor",
    "123":"standUpSitChair",
    "124":"sitDownChair",
    "125":"sitDownTable",
    "126":"standUpSitTable",
    "127":"sitDownFloor",
    "128":"standUpSitFloor",
    "129":"clap1Reps",
    "130":"clap5Reps",
    "131":"clapAboveHead1Reps",
    "132":"clapAboveHead5Reps",
    "133":"standUpKneelToStand",
    "134":"hitRHandHead",
    "135":"sitDownKneelTieShoes",
    "136":"cartwheelLHandStart1Reps",
    "137":"walkRightCircle6StepsRstart",
    "138":"cartwheelRHandStart1Reps",
    "139":"cartwheelLHandStart2Reps",
    "140":"NQCWalkCycleNormalizationSpan",
    "141":"hopBothLegs1hops",
    "142":"hopBothLegs2hops",
    "143":"hopBothLegs3hops",
    "144":"hopLLeg1hops",
    "145":"hopLLeg2hops",
    "146":"hopLLeg3hops",
    "147":"hopRLeg1hops",
    "148":"hopRLeg2hops",
    "149":"hopRLeg3hops",
    "150":"jumpDown",
    "151":"staircaseDown3Rstart",
    "152":"staircaseUp3Rstart",
    "null":"-"
}