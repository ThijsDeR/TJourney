import Drawable from "./drawable.js";
import Position from "./position.js";
import Shark from "../assets/Shark/Shark.js";


export default class Friend extends Drawable {
    placeOnTheBoard;

    constructor(position, rotation, scale, placeOnTheBoard) {
        super(position, rotation, scale)
        this.placeOnTheBoard = placeOnTheBoard
    }

    getElement(key) {
        return (
            <mesh key={key} position={[this.position.x, this.position.y + 0.5, this.position.z]} rotation={this.rotation.getRotationArray()} scale={this.scale}>
                <Shark />
            </mesh>
        )
    }

    setPosition(steps, circles) {
        this.placeOnTheBoard = steps;
        const currentPosition = circles[this.placeOnTheBoard % circles.length].position
        this.position = new Position(...currentPosition.getPositionArray());
    }
}