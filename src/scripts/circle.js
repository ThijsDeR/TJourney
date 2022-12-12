import Drawable from "./drawable.js";

export default class Circle extends Drawable {
    offset;

    constructor(position, rotation, scale) {
        super(position, rotation, scale);
        this.offset = 1
    }
    getElement() {
        return (
            <mesh position={[this.position.x, this.position.y - this.offset, this.position.z]} rotation={this.rotation.getRotationArray()}>
                <cylinderBufferGeometry attach="geometry" args={[1, 0.5, 2, 32]} />
            </mesh>
        )
    }

    playerPassed() {

    }

    playerLandedOn() {
        
    }
}