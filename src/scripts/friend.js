import Drawable from "./drawable.js";
import Position from "./position.js";
import Shark from "../assets/Shark/Shark.js";
import Text from "./text.js";
import Rotation from "./rotation.js";


export default class Friend extends Drawable {
    placeOnTheBoard;
    userName
    text;

    constructor(position, rotation, scale, placeOnTheBoard, userName) {
        super(position, rotation, scale)
        this.placeOnTheBoard = placeOnTheBoard
        this.userName = userName
        this.text = new Text(new Position(0, 2, 0), new Rotation(0, 0, 0), 0.2, this.userName)
    }

    getElement(key) {
        return (
            <mesh key={key} position={[this.position.x, this.position.y + 0.5, this.position.z]} rotation={this.rotation.getRotationArray()} scale={this.scale}>
                <Shark />
                {this.text.getElement()}
            </mesh>
        )
    }

    setPosition(steps, circles) {
        this.placeOnTheBoard = steps;
        const currentPosition = circles[this.placeOnTheBoard % circles.length].position
        this.position = new Position(...currentPosition.getPositionArray());
    }
}