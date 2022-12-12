import Drawable from "./drawable.js";

export default class Circle extends Drawable {
    offset;

    constructor(position, rotation, scale) {
        super(position, rotation, scale);
        this.offset = 1
    }
    getElement(key) {
        return (
            <mesh key={key} position={[this.position.x, this.position.y - this.offset, this.position.z]} rotation={this.rotation.getRotationArray()}>
                <cylinderGeometry attach="geometry" args={[1, 0.5, 2, 32]} />
            </mesh>
        )
    }

    playerPassed() {

    }

    playerLandedOn() {
        
    }
}