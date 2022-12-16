import Drawable from "./drawable.js";
import Position from "./position.js";


export default class Walkable extends Drawable {
    currentPlaceOnTheBoard;
    placeOnTheBoard;
    walkDelay;
    walkDuration;

    constructor(position, rotation, scale, placeOnTheBoard) {
        super(position, rotation, scale)
        this.placeOnTheBoard = placeOnTheBoard;
        this.currentPlaceOnTheBoard = placeOnTheBoard
        this.walkDelay = 0;
        this.walkDuration = 1000;
    }

    getElement() {

    }

    update = (timeElapsed, circles) => {
        // this.walkTimer(timeElapsed, circles)
    }

    setPosition(steps, circles) {
        this.placeOnTheBoard = steps;
        this.currentPlaceOnTheBoard = steps;
        const currentPosition = circles[this.currentPlaceOnTheBoard % circles.length].position
        this.position = new Position(...currentPosition.getPositionArray());
    }

    /**
     * Ups the position by 1
     */
    positionUp(circles) {
        this.currentPlaceOnTheBoard++;
        const currentPosition = circles[this.currentPlaceOnTheBoard % circles.length].position
        this.position = new Position(...currentPosition.getPositionArray());
    }

    /**
     * delays the action of the movement of the player ,so that the player character will move 1 position every 300 counts.
     */
    walkTimer(timeElapsed, circles) {
        this.walkDelay += timeElapsed * 500;
        if (this.walkDelay <= this.walkDuration) {
            this.walkAnimation(circles, this.walkDelay, this.walkDuration, timeElapsed);
        } else {
            this.positionUp(circles)
            this.walkDelay = 0;
        }
    }

    /**
     * positioning of walking gets changed
     */
    walkAnimation(circles, delay, duration, timeElapsed) {
        const currentPosition = circles[this.currentPlaceOnTheBoard % circles.length].position;
        const nextPositon = circles[(this.currentPlaceOnTheBoard + 1) % circles.length].position;

        const distance = currentPosition.getDistance(nextPositon)

        this.position.x = currentPosition.x + (distance.x * (delay / duration));
        this.position.y = currentPosition.y + (distance.y * (delay / duration));
        this.position.z = currentPosition.z + (distance.z * (delay / duration));
        this.playerRotation(distance, timeElapsed)
    }

    /**
     * rotate the player in the direction he is walking
     * @param {*} cx x coordinate the player is heading
     * @param {*} cz z coordinate the player is heading
     */
    playerRotation(distance, timeElapsed) {
        const toDegrees = this.calculateDirection(distance.x, distance.z)
        let currentDegrees = this.rotation.y * (180 / Math.PI)


        if (toDegrees !== currentDegrees) {
            if (this.distanceClockWise(currentDegrees, toDegrees) < this.distanceCounterClockWise(currentDegrees, toDegrees)) {
                if (toDegrees < currentDegrees && toDegrees > currentDegrees - timeElapsed) currentDegrees = toDegrees
                else currentDegrees -= timeElapsed * 50
                if (currentDegrees < 0) currentDegrees = 359
            } else {
                if (toDegrees > currentDegrees && toDegrees < currentDegrees + timeElapsed) currentDegrees = toDegrees
                else currentDegrees += timeElapsed * 50
                if (currentDegrees >= 360) currentDegrees = 0
            }
        }
        this.rotation.y = currentDegrees * (Math.PI / 180)
    }

    distanceClockWise(fromNumber, toNumber) {
        if (fromNumber - toNumber < 0) return fromNumber + (359 - toNumber)
        return fromNumber - toNumber
    }

    distanceCounterClockWise(fromNumber, toNumber) {
        if (fromNumber - toNumber > 0) return (359 - fromNumber) + toNumber
        return toNumber - fromNumber
    }

    calculateDirection(x, z) {
        const atan2 = Math.atan2(x, z)
        if (x === 0 && z === 0) return 0;
        else {
            const degrees = (atan2 * (180 / Math.PI))


            if (degrees < 0) {
                return (360 - Math.abs(degrees))
            }
            return degrees
        }
    }
}