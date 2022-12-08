import React, { useState } from 'react';
import { calculatePlayerDirection } from '../services/math-service';

export class PositionPlayerClass {
  placeOnTheBoard = 0;
  placeCharacter = [-18, 0, -15.9];
  timerCount = 0;
  diceNumber = 6;
  count = 0;
  ListofPositionPlaces = [[-18, -0.1, -15.9], [-9, -0.1, -15.9], [-3.2, -0.1, -15.9], [3, -0.1, -15.9], [8, 0.2, -14.9], [9.8, 0.1, -10.9], [10, 0, -5.5], [10.5, 0, 0], [10.75, 0, 5], [10.75, 0, 10], [10.75, -0.3, 15], [10.75, 0, 20], [10.75, 0, 25], [7, 0.2, 28],
  [1, -0.8, 27.5], [-8, -1.1, 27.5], [-10.5, -0.5, 24], [-10.5, -0.5, 19], [-10.5, -0.5, 14], [-10.5, -0.5, 9], [-10.5, -0.5, 4], [-13, -0.2, 0],
  [-19, -0.5, -0.5], [-25, -1.4, -0.4], [-30, -2.4, -0.8], [-35, -3.4, -4], [-35.5, -3.6, -9.4], [-35.5, -3.6, -14.4], [-35.5, -3.6, -19.4],
  [-35.5, -3.6, -24.4], [-35.5, -3.6, -29.4], [-32, -2.8, -31.4], [-27, -1.7, -31.6], [-22, -0.9, -31.6], [-17, -0.3, -31.6]];
  rotation = 1.6;

  /**
   * Set the position of the character
   * 
   * @returns the future place of the character
   */
  SetPosition() {
    this.resetThePosition()
    this.placeCharacter = this.ListofPositionPlaces[this.placeOnTheBoard];
    let [cx, cy, cz] = this.placeCharacter;
    return (
      [cx, cy, cz]
    );
  }

  /**
   * Ups the position by 1
   */
  positionUp() {
    this.placeOnTheBoard = this.placeOnTheBoard + 1;
    this.SetPosition()
  }

  /**
   * reset the position to the beginning of the board
   */
  resetThePosition() {
    if (this.ListofPositionPlaces.length - 1 < this.placeOnTheBoard) {
      this.placeOnTheBoard = this.placeOnTheBoard % this.ListofPositionPlaces.length;
    }
  }

  /**
   * delays the action of the movement of the player ,so that the player character will move 1 position every 300 counts.
   */
  walkTimer(isWalking) {
    if (isWalking && this.diceNumber > 0) {
      if (this.count <= 100) {
        this.walkAnimation();
        this.count++;
      } else {
        this.positionUp()
        this.count = 0;

        this.diceNumber--;
      }
      this.timerCount += 1;
    }
  }

  /**
   * positioning of walking gets changed
   */
  walkAnimation() {
    const currentPos = this.placeOnTheBoard % this.ListofPositionPlaces.length;
    const nextPos = (this.placeOnTheBoard + 1) % this.ListofPositionPlaces.length;
    console.log(currentPos, nextPos);

    let cx = calculatePlayerDirection(this.ListofPositionPlaces[currentPos][0], this.ListofPositionPlaces[nextPos][0])
    let cy = calculatePlayerDirection(this.ListofPositionPlaces[currentPos][1], this.ListofPositionPlaces[nextPos][1])
    let cz = calculatePlayerDirection(this.ListofPositionPlaces[currentPos][2], this.ListofPositionPlaces[nextPos][2])
    this.playerRotation(cx, cz);
    this.placeCharacter = [this.placeCharacter[0] + (cx / 100), this.placeCharacter[1] + (cy / 100), this.placeCharacter[2] + (cz / 100)]
  }

  /**
   * rotate the player in the direction he is walking
   * @param {*} cx x coordinate the player is heading
   * @param {*} cz z coordinate the player is heading
   */
  playerRotation(cx, cz) {
    if (cx > 2) {
      console.log('playerRotation: 1')
      if (this.rotation > 2) {
        this.rotation -= 0.1;
      } else if (this.rotation < 1) {
        this.rotation += 0.1;
      }
    }
    if (cx < -2) {
      console.log('playerRotation: 2')
      if (this.rotation > 5.5) {
        this.rotation -= 0.1;
      } else if (this.rotation < 4.5) {
        this.rotation += 0.1;
      }
    }
    if (cz > 2) {
      console.log('playerRotation: 3')
      if (this.rotation > -0) {
        this.rotation -= 0.1;
      } else if (this.rotation < -1) {
        this.rotation += 0.1;
      }
    }
    if (cz < -2) {
      console.log('playerRotation: 4')
      if (this.rotation > -3.2) {
        this.rotation -= 0.1;
      } else if (this.rotation < -2.2) {
        this.rotation += 0.1;
      }
    }
  }

  /**
 * Set the Dice number ,so the player can walk
 * 
 * @param {number} diceInputNumber 
 */
  setDiceNumber(diceInputNumber) {
    this.diceNumber = diceInputNumber;
  }
}
