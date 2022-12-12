export default class Position {
    x;
    y;
    z;

    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getDistance(position) {
        return {
            x: position.x - this.x,
            y: position.y - this.y,
            z: position.z - this.z,
        }
    }

    getPositionArray() {
        return [this.x, this.y, this.z];
    }
}