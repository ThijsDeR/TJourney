export default class Drawable {
    position;
    rotation;
    scale;

    constructor(position, rotation, scale) {
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
    }

    getElement() {
        return null;
    }
}