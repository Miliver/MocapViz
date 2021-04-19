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

const bonesPointCloud = [];

const modelVicon = {bonesModel: bonesVicon, fps: 120, headJointIndex: 16, leftArmIndex: 17, thoraxIndex: 13, 
    defaultScale: 8, unitSize: 6.207, boneRadius: 2, jointRadius: 0, headRadius: 10};
const modelKinect = {bonesModel: bonesKinect, fps: 30, headJointIndex: 3, leftArmIndex: 4, thoraxIndex: 20, 
    defaultScale: 180, unitSize: 139.6575, boneRadius: 2, jointRadius: 0, headRadius: 10};
const modelKinect2d = {bonesModel: bonesKinect2d, fps: 30, headJointIndex: 9, leftArmIndex: 12, thoraxIndex: 7, 
    defaultScale: 0.6, unitSize: 0.4655, boneRadius: 2, jointRadius: 0, headRadius: 10};
const modelPointCloud = {bonesModel: bonesPointCloud, fps: 30, headJointIndex: 0, leftArmIndex: 0, thoraxIndex: 0, 
    defaultScale: 1, unitSize: 1, boneRadius: 0, jointRadius: 3, headRadius: 3};

const KeyframeSelectionAlgorithmEnum = {Equidistant: 1, Euclidean: 2, Temporal: 3, Lowe: 4, Decimation: 5};

const jointStyleDefault = {r:0, g:0, b:0, a:1};
const boneStyleDefault = {r:0, g:0, b:0, a:1};
const leftBoneStyleDefault = {r:144, g:0, b:0, a:1};
const rightBoneStyleDefault = {r:0, g:0, b:144, a:1};
const blurStyleDefault = {r:0, g:0, b:0, a:0.1};

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

const motionCategoriesHuman = {
    "1":"Cartwheel",
    "2":"Grab Dep Right",
    "3":"Kick",
    "4":"Move",
    "5":"Punch",
    "6":"Rotate Arms",
    "7":"Sit Lie Down",
    "8":"Stand Up",
    "9":"Throw Right",
    "10":"Jump",
    "11":"Hop One Leg",
    "12":"Neutral",
    "13":"T-Pose",
    "14":"Others",
    "15":"Exercise",
    "16":"Turn",
    "17":"fi_left_step",
    "18":"fi_right_step",
    "19":"fi_left_walk_cycle",
    "20":"fi_right_walk_cycle",
    "21":"fi_jump",
    "22":"Turn Right",
    "23":"Turn Left",
    "24":"Walk Backwards 2 Steps Right Start",
    "25":"Walk Backwards 4 Steps Right Start",
    "26":"Walk Left 2 Steps",
    "27":"Walk Left 3 Steps",
    "28":"Walk Right Cross Front 3 Steps",
    "29":"Walk Right Cross Front 2 Steps",
    "30":"Walk 4 Steps Right Start",
    "31":"Walk 2 Steps Right Start",
    "32":"Sneak 2 Steps  Right Start",
    "33":"Sneak 4 Steps  Right Start",
    "34":"Sneak 2 Steps Left Start",
    "35":"Sneak 4 Steps Left Start",
    "36":"Walk 4 Steps Left Start",
    "37":"Walk 2 Steps Left Start",
    "38":"Shuffle 2 Steps Right Start",
    "39":"Shuffle 4 Steps Right Start",
    "40":"Shuffle 2 Steps Left Start",
    "41":"Shuffle 4 Steps Left Start",
    "42":"Jog On Place Start Floor 2 Steps Right Start",
    "43":"Jog On Place Start Floor 4 Steps Right Start",
    "44":"Jog On Place Start Air 2 Steps Left Start",
    "45":"Jog On Place Start Air 4 Steps Left Start",
    "46":"Jog On Place Start Air 2 Steps Right Start",
    "47":"Run On Place Start Floor 2 Steps Right Start",
    "48":"Run On Place Start Floor 4 Steps Right Start",
    "49":"Run On Place Start Air 2 Steps Left Start",
    "50":"Run On Place Start Air 4 Steps Left Start",
    "51":"Run On Place Start Air 2 Steps Right Start",
    "52":"Walk On Place 2 Steps Right Start",
    "53":"Walk On Place 4 Steps Right Start",
    "54":"Walk On Place 2 Steps Left Start",
    "55":"Walk On Place 4 Steps Left Start",
    "56":"Walk Left Circle 4 Steps Left Start",
    "57":"Walk Left Circle 6 Steps Left Start",
    "58":"Jog Right Circle 4 Steps Left Start",
    "59":"Jog Right Circle 6 Steps Left Start",
    "60":"Walk Right Circle 4 Steps Left Start",
    "61":"Walk Right Circle 6 Steps Left Start",
    "62":"Jog Left Circle 4 Steps Right Start",
    "63":"Jog Left Circle 6 Steps Right Start",
    "64":"Walk Left Circle 4 Steps Right Start",
    "65":"Walk Left Circle 6 Steps Right Start",
    "66":"Walk Right Circle 4 Steps Right Start",
    "67":"Jog Right Circle 4 Steps Right Start",
    "68":"Jog Right Circle 6 Steps Right Start",
    "69":"Deposit Floor Right",
    "70":"Grab Floor Right",
    "71":"Deposit High Right",
    "72":"Grab High Right",
    "73":"Deposit Low Right",
    "74":"Grab Low Right",
    "75":"Deposit Middle Right",
    "76":"Grab Middle Right",
    "77":"Kick Left Front 1 Reps",
    "78":"Kick Left Front 2 Reps",
    "79":"Kick Left Side 1 Reps",
    "80":"Kick Left Side 2 Reps",
    "81":"Punch Right Front 2 Reps",
    "82":"Punch Right Front 1 Reps",
    "83":"Kick Right Front 1 Reps",
    "84":"Kick Right Front 2 Reps",
    "85":"Punch Right Side 1 Reps",
    "86":"Punch Right Side 2 Reps",
    "87":"Punch Left Front 2 Reps",
    "88":"Punch Left Front 1 Reps",
    "89":"Punch Left Side 2 Reps",
    "90":"Punch Left Side 1 Reps",
    "91":"Kick Right Side 1 Reps",
    "92":"Kick Right Side 2 Reps",
    "93":"Throw Standing High Right",
    "94":"Throw Standing Low Right",
    "95":"Throw Basketball",
    "96":"Throw Far Right",
    "97":"Throw Sitting High Right",
    "98":"Throw Sitting Low Right",
    "99":"Rotate Arm Left Forward 1 Reps",
    "100":"Rotate Arm Left Forward 3 Reps",
    "101":"Rotate Arm Left Backward 1 Reps",
    "102":"Rotate Arm Left Backward 3 Reps",
    "103":"Rotate Arm Right Forward 1 Reps",
    "104":"Rotate Arm Right Forward 3 Reps",
    "105":"Rotate Arms Both Forward 1 Reps",
    "106":"Rotate Arms Both Forward 3 Reps",
    "107":"Rotate Arms Both Backward 1 Reps",
    "108":"Rotate Arms Both Backward 3 Reps",
    "109":"Rotate Arm Right Backward 1 Reps",
    "110":"Rotate Arm Right Backward 3 Reps",
    "111":"Skier 3 Reps Left Start",
    "112":"Skier 1 Reps Left Start",
    "113":"Elbow To Knee 3 Reps Right Elbow Start",
    "114":"Elbow To Knee 1 Reps Right Elbow Start",
    "115":"Elbow To Knee 1 Reps Left Elbow Start",
    "116":"Elbow To Knee 3 Reps Left Elbow Start",
    "117":"Squat 1 Reps",
    "118":"Squat 3 Reps",
    "119":"Jumping Jack 1 Reps",
    "120":"Jumping Jack 3 Reps",
    "121":"Lie Down Floor",
    "122":"Stand Up Lie Floor",
    "123":"Stand Up Sit Chair",
    "124":"Sit Down Chair",
    "125":"Sit Down Table",
    "126":"Stand Up Sit Table",
    "127":"Sit Down Floor",
    "128":"Stand Up Sit Floor",
    "129":"Clap 1 Reps",
    "130":"Clap 5 Reps",
    "131":"Clap Above Head 1 Reps",
    "132":"Clap Above Head 5 Reps",
    "133":"Stand Up Kneel To Stand",
    "134":"Hit Right Hand Head",
    "135":"Sit Down Kneel Tie Shoes",
    "136":"Cartwheel Left Hand Start 1 Reps",
    "137":"Walk Right Circle 6 Steps Right Start",
    "138":"Cartwheel Right Hand Start 1 Reps",
    "139":"Cartwheel Left Hand Start 2 Reps",
    "140":"NQC Walk Cycle Normalization Span",
    "141":"Hop Both Legs 1 Hops",
    "142":"Hop Both Legs 2 Hops",
    "143":"Hop Both Legs 3 Hops",
    "144":"Hop Left Leg 1 Hops",
    "145":"Hop Left Leg 2 Hops",
    "146":"Hop Left Leg 3 Hops",
    "147":"Hop Right Leg 1 Hops",
    "148":"Hop Right Leg 2 Hops",
    "149":"Hop Right Leg 3 Hops",
    "150":"Jump Down",
    "151":"Staircase Down 3 Right Start",
    "152":"Staircase Up 3 Right Start",
    "null":"-"
}

const motionSuperCategories = {
    "turn":["22", "23"],
    "walk":["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41"],
    "onPlace":["42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55"],
    "walkCircle":["56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68"],
    "grab":["69", "70", "71", "72", "73", "74", "75", "76"],
    "kick":["77", "78", "79", "80", "83", "84", "91", "92"],
    "punch":["81", "82", "85", "86", "87", "88", "89", "90"],
    "throw":["93", "94", "95", "96", "97", "98"],
    "rotateArm":["99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110"],
    "skier":["111", "112"],
    "elbowToKnee":["113", "114", "115", "116"],
    "squat":["117", "118"],
    "jumpingJack":["119", "120"],
    "sitStand":["121", "122", "123", "124", "125", "126", "127", "128", "133", "135"],
    "clap":["129", "130", "131", "132", "134"],
    "cartwheel":["136", "138", "139"],
    "hop":["141", "142", "143", "144", "145", "146", "147", "148", "149"],
    "staircase":["150", "151", "152"],
    "allCategories":[...Array(153).keys()].map((x) => x+"").slice(22),
}
