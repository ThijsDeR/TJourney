export default class Rotation {
    x;
    y;
    z;

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getRotationArray() {
        return [this.x, this.y, this.z];
    }
}