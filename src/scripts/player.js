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
// export default class Player extends Drawable {
//     dice;
//     placeOnTheBoard;
//     walkDelay;
//     walkDuration;

//     constructor(position, rotation, scale, placeOnTheBoard) {
//         super(position, rotation, scale)
//         this.dice = new Dice(new Position(0, 2, 0), new Rotation(0, 0, 0), 1)
//         this.placeOnTheBoard = placeOnTheBoard;
//         this.walkDelay = 0;
//         this.walkDuration = 1000;
//     }

//     getElement() {
//         return (
//             <mesh position={this.position.getPositionArray()} rotation={[this.rotation.x, this.rotation.y, this.rotation.z]} scale={this.scale}>
//                 {this.dice.count === 0 || this.dice.isThrowing() ? <MichelleIdle /> : <MichelleWalking />}

//                 {this.dice.getElement()}
//             </mesh>
//         )
//     }

//     update = (timeElapsed, circles) => {
//         this.dice.update(timeElapsed)

//         if (this.dice.count === 0) return

//         if (this.dice.isThrowing()) return

//         this.walkTimer(timeElapsed, circles)
//     }

//     setPositon(steps, circles) {
//         this.placeOnTheBoard = steps;
//         const currentPosition = circles[this.placeOnTheBoard % circles.length].position
//         this.position = new Position(...currentPosition.getPositionArray());
//     }

//     /**
//      * Ups the position by 1
//      */
//     positionUp(circles) {
//         this.placeOnTheBoard++;
//         const currentPosition = circles[this.placeOnTheBoard % circles.length].position
//         this.position = new Position(...currentPosition.getPositionArray());
//     }

//     /**
//      * delays the action of the movement of the player ,so that the player character will move 1 position every 300 counts.
//      */
//     walkTimer(timeElapsed, circles) {
//         this.walkDelay += timeElapsed * 500;
//         if (this.walkDelay <= this.walkDuration) {
//             this.walkAnimation(circles, this.walkDelay, this.walkDuration, timeElapsed);
//         } else {
//             this.positionUp(circles)
//             this.walkDelay = 0;

//             this.dice.count--;
//         }
//     }

//     /**
//      * positioning of walking gets changed
//      */
//     walkAnimation(circles, delay, duration, timeElapsed) {
//         const currentPosition = circles[this.placeOnTheBoard % circles.length].position;
//         const nextPositon = circles[(this.placeOnTheBoard + 1) % circles.length].position;

//         const distance = currentPosition.getDistance(nextPositon)

//         this.position.x = currentPosition.x + (distance.x * (delay / duration));
//         this.position.y = currentPosition.y + (distance.y * (delay / duration));
//         this.position.z = currentPosition.z + (distance.z * (delay / duration));
//         this.playerRotation(distance, timeElapsed)
//     }

//     /**
//      * rotate the player in the direction he is walking
//      * @param {*} cx x coordinate the player is heading
//      * @param {*} cz z coordinate the player is heading
//      */
//     playerRotation(distance, timeElapsed) {
//         const toDegrees = this.calculateDirection(distance.x, distance.z)
//         let currentDegrees = this.rotation.y * (180 / Math.PI)


//         if (toDegrees !== currentDegrees) {
//             if (this.distanceClockWise(currentDegrees, toDegrees) < this.distanceCounterClockWise(currentDegrees, toDegrees)) {
//                 if (toDegrees < currentDegrees && toDegrees > currentDegrees - timeElapsed) currentDegrees = toDegrees
//                 else currentDegrees -= timeElapsed * 50
//                 if (currentDegrees < 0) currentDegrees = 359
//             } else {
//                 if (toDegrees > currentDegrees && toDegrees < currentDegrees + timeElapsed) currentDegrees = toDegrees
//                 else currentDegrees += timeElapsed * 50
//                 if (currentDegrees >= 360) currentDegrees = 0
//             }
//         }
//         this.rotation.y = currentDegrees * (Math.PI / 180)
//     }

//     distanceClockWise(fromNumber, toNumber) {
//         if (fromNumber - toNumber < 0) return fromNumber + (359 - toNumber)
//         return fromNumber - toNumber
//     }

//     distanceCounterClockWise(fromNumber, toNumber) {
//         if (fromNumber - toNumber > 0) return (359 - fromNumber) + toNumber
//         return toNumber - fromNumber
//     }

//     calculateDirection(x, z) {
//         const atan2 = Math.atan2(x, z)
//         if (x === 0 && z === 0) return 0;
//         else {
//             const degrees = (atan2 * (180 / Math.PI))


//             if (degrees < 0) {
//                 return (360 - Math.abs(degrees))
//             }
//             return degrees
//         }
//     }
// }