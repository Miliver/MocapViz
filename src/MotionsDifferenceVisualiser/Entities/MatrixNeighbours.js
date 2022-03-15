class MatrixNeighbours {
    leftUpper;
    leftBottom;
    rightBottom;

    constructor(v1, v2, v3) {
        this.leftUpper = v1;
        this.leftBottom = v2;
        this.rightBottom = v3;
    }
}

export {MatrixNeighbours};