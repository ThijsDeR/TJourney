import Position from "./position.js";
import Shark from "../assets/Shark/Shark.js";
import Text from "./text.js";
import Rotation from "./rotation.js";
import Walkable from "./walkable.js";


export default class Friend extends Walkable {
    userName;
    text;

    constructor(position, rotation, scale, placeOnTheBoard, userName) {
        super(position, rotation, scale, placeOnTheBoard)
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

    update = (timeElapsed, circles) => {
        if (this.placeOnTheBoard === this.currentPlaceOnTheBoard) return
        
        this.walkTimer(timeElapsed, circles)
    }
}