import { RandomCount } from '../../services/math-service'

export class DiceClass {

    dicePosition;
    textPosition;
    diceRotationX = 0;
    angle = 0;
    dd = 1;
    radius = 40;
    cx;           // X position of the dice
    cy;           // Y position of the dice
    cz = 2;     // Z position of the dice
    levitate = this.cz + 0.5;
    luckyMove = true;
    delay = 0;
    countAsked = false;


    spawnDiceAnimation(steps, luckyVisible) {
        if (luckyVisible === true) {
            this.delay++;
            if (this.luckyMove === true) {
                this.throwDiceAnimation();
            }
            if (this.delay >= 500) {
                this.luckyMove = false;
                this.moveLuckyblockToCenter(1, 0)
                if (this.countAsked === false && this.delay >= 600) {
                    steps = RandomCount(30);
                    this.textAnimation(0);
                    this.countAsked = true;
                }
            } else if (this.delay > 20000) {
              luckyVisible = false;
              this.luckyMove = true;
              this.delay = 0;
            }
        }
        return steps;
    }

    /**
     * function which is called to move the dice or to stop it
     */
    throwDiceAnimation() {
        let speed = 0.01;
        let player = 0
        if (this.luckyMove === true) {
            [this.cx, this.cy] = this.moveLuckyblock();
            this.textPosition = this.dicePosition + 1;
        } else {
            this.moveLuckyblockToCenter(speed, player)
            
            setTimeout(() => {
                this.textAnimation(0);
                if (this.levitate <= this.cz + 10) {
                    this.levitate = this.levitate + 0.1;
                }
            }, 500)
        }
    }

    /**
     * Function to move the luckyblock above the player
     * @param {*} speed speed the lucky block goes to the middle
     * @param {*} player position of the player
     */
    moveLuckyblockToCenter(speed, player) {
        if (this.cx > player || this.cy > player) {
            if (this.cx > player) {
                this.cx -= speed;
            }
            if (this.cy > player) {
                this.cy -= speed;
            }
            this.dicePosition = [this.cx + 0.7, this.cz, this.cy + 0.1]
        }
        if (this.cx < player || this.cy < player) {
            if (this.cx < player) {
                this.cx += speed;
            }
            if (this.cy < player) {
                this.cy += speed;
            }
        }
    }

    /**
     * Levitate the amount of steps from inside the dice
     */
    textAnimation(optionalLevitation) {
        if (optionalLevitation === 0) {
            this.textPosition = [this.cx - 0.3, this.levitate  + 0.6, this.cy - 0.8];
        } else {
            this.textPosition = [this.cx, optionalLevitation, this.cy];
        }
    }

    /**
     * Move the Dice in a circle motion
     * @returns the new position of the dice
     */
    moveLuckyblock() {
        // increase the angle of rotation
        this.angle += Math.acos(1 - Math.pow(this.dd / this.radius, 2) / 2);
        this.dicePosition = [this.radius * Math.cos(this.angle) / 32, 2, this.radius * Math.sin(this.angle) / 32]
        

        return [this.radius * Math.cos(this.angle) / 32, this.radius * Math.sin(this.angle) / 32]
    }

    /**
     * 
     * @returns 
     */
    diceRotation() {
        this.diceRotationX = this.diceRotationX + 0.1;
        // return [Math.pow(diceRotationX,0.5), Math.pow(diceRotationX,0.8), Math.pow(diceRotationX,0.5)];
        return [0, this.diceRotationX, 0];
    }

    // function getDicePosition() {
    //     return dicePosition;
    // }

    // function setDicePosition(_dicePosition) {
    //     dicePosition = _dicePosition;
    // }

    // function getTextPosition() {
    //     return textPosition;
    // }

    // function setTextPosition(_textPosition) {
    //     textPosition = _textPosition;
    // }
}