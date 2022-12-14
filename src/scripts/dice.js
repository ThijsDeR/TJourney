import Drawable from "./drawable.js";
import Text from "./text.js";
import React from 'react'
import { useGLTF } from '@react-three/drei'
import DiceComponent from "../assets/Dice/Dice.js";
import { randomCount } from "../services/math-service.js";
import Position from "./position.js";
import Rotation from "./rotation.js";


export default class Dice extends Drawable {
    visible;
    text;
    textVisible;
    count;
    animationTime;
    maxThrowingTime;
    animationAngle;
    animationDD;
    animationRadius;
    originalPosition;
    spinEndingPosition;

    constructor(position, rotation, scale) {
        super(position, rotation, scale)
        this.text = new Text(new Position(0, 2, 0), new Rotation(0, 0, 0), 0.1, "0");
        this.textVisible = false;
        this.visible = false;
        this.count = 0;
        this.animationTime = 0;
        this.maxThrowingTime = 500;
        this.animationAngle = 0
        this.animationDD = 1
        this.animationRadius = 40;
        this.spinEndingPosition = null;
    }

    getElement() {
        return this.visible ? (
            <group >
                <mesh position={this.position.getPositionArray()} rotation={this.rotation.getRotationArray()} scale={this.scale}>
                    {DiceComponent()}
                </mesh>
                <mesh position={this.position.getPositionArray()}>
                    {this.textVisible ? this.text.getElement() : null}
                </mesh>
            </group>
        ) : null

    }

    update(timeElapsed, player) {
        this.diceRotation(timeElapsed)
        this.diceAnimation(timeElapsed, player)
    }

    /**
     * spawn the dice animation
     * 
     * @param {*} steps 
     * @param {boolean} luckyVisible buttonpressedon or not
     * @param {PositionPlayerClass} positionPlayerClass 
     * @returns the steps of the dice
     */
    spawnDiceAnimation(count) {
        this.visible = true
        this.count = randomCount(count)
    }

    diceAnimation(timeElapsed, player) {
        if (!this.visible) return;

        this.text.text = `${player.placeOnTheBoard - player.currentPlaceOnTheBoard}`
        this.animationTime += timeElapsed * 50

        if (this.animationTime >= this.maxThrowingTime) {
            this.moveLuckyblockToCenter(this.animationTime - this.maxThrowingTime, (this.maxThrowingTime * 1.2) - this.maxThrowingTime)

            this.textVisible = this.animationTime >= this.maxThrowingTime * 1.2

            if (player.placeOnTheBoard === player.currentPlaceOnTheBoard) this.reset();
        } else this.throwDiceAnimation()

    }

    isThrowing() {
        return this.visible && this.animationTime <= this.maxThrowingTime
    }

    /**
     * function which is called to move the dice or to stop it
     */
    throwDiceAnimation() {
        // if (this.luckyMove === true) {
        this.moveLuckyblock();
        // } 
        // else {
        //     this.moveLuckyblockToCenter(speed, player)
        //     setTimeout(() => {
        //         this.textAnimation(0);
        //         if (this.levitate <= this.cz + 10) {
        //             this.levitate = this.levitate + 0.1;
        //         }
        //     }, 500)
        // }
    }

    /**
     * Function to move the luckyblock above the player
     * @param {*} speed speed the lucky block goes to the middle
     * @param {*} player position of the player
     */
    moveLuckyblockToCenter(delay, duration) {
        if (!this.spinEndingPosition) this.spinEndingPosition = new Position(...this.position.getPositionArray())
        const abovePlayerPosition = new Position(0, 2, 0)
        const distance = this.spinEndingPosition.getDistance(abovePlayerPosition)
        
        if (this.position.x !== abovePlayerPosition.x || this.position.y !== abovePlayerPosition.y || this.position.z !== abovePlayerPosition.z) {
            this.position.x = this.spinEndingPosition.x + (distance.x * (Math.min(delay / duration, 1)))
            this.position.y = this.spinEndingPosition.y + (distance.y * (Math.min(delay / duration, 1)))
            this.position.z = this.spinEndingPosition.z + (distance.z * (Math.min(delay / duration, 1)))
        }

    }

    /**
     * Levitate the amount of steps from inside the dice
     */
    // textAnimation(optionalLevitation) {
    //     if (optionalLevitation === 0) {
    //         this.textPosition = [this.cx - 0.3, this.levitate + 0.6, this.cy - 0.8];
    //     } else {
    //         this.textPosition = [this.cx, optionalLevitation, this.cy];
    //     }
    // }

    /**
     * Move the Dice in a circle motion
     * @returns the new position of the dice
     */
    moveLuckyblock() {
        // increase the angle of rotation
        this.animationAngle += Math.acos(1 - Math.pow(this.animationDD / this.animationRadius, 2) / 2);
        this.position.x = this.animationRadius * Math.cos(this.animationAngle) / 32
        this.position.y = 2
        this.position.z = this.animationRadius * Math.sin(this.animationAngle) / 32
    }

    /**
     * makes the dice rotate 
     * 
     * @returns the dicerotation
     */
    diceRotation(timeElapsed) {
        this.rotation.y +=  0.1 * timeElapsed * 100
    }

    reset() {
        this.visible = false;
        this.textVisible = false;
        this.count = 0;
        this.animationTime = 0;

    }

    isLuckyBlockVisible() {
        return this.luckyBlockVisible
    }
}

useGLTF.preload('/dice.gltf')
