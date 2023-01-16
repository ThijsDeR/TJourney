import Dice from "./dice.js";
import Position from "./position.js";
import Rotation from "./rotation.js";
import Walkable from "./walkable.js";
import { randomCount } from "../services/math-service.js";
import { getAllCharacters } from "../services/playerCharacter-service.js";


export default class Player extends Walkable {
    dice;
    character;

    constructor(position, rotation, scale, placeOnTheBoard) {
        super(position, rotation, scale, placeOnTheBoard)
        this.dice = new Dice(new Position(0, 2, 0), new Rotation(0, 0, 0), 1)
        this.character = 0
    }

    getElement() {
        return (
            <mesh position={this.position.getPositionArray()} rotation={[this.rotation.x, this.rotation.y, this.rotation.z]} scale={this.scale}>
                {this.placeOnTheBoard === this.currentPlaceOnTheBoard || this.dice.isThrowing() ? getAllCharacters()[this.character].idle : getAllCharacters()[this.character].walking}

                {this.dice.getElement()}
            </mesh>
        )
    }

    setCharacter(character) {
        this.character = character;
    }

    update = (timeElapsed, circles) => {
        this.dice.update(timeElapsed, this)

        if (this.placeOnTheBoard === this.currentPlaceOnTheBoard) return

        if (this.dice.isThrowing()) return

        this.walkTimer(timeElapsed, circles)
    }

    spawnDiceAnimation(count) {
        this.dice.visible = true
        this.placeOnTheBoard += randomCount(count)
    }
}