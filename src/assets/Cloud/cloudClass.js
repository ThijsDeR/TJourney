export class CloudClass {
    angle = 0;
    clips;
    cz = 0;
    czMultiplier = 0.01;
    cx;
    cy;
    rotation;
    round = 0;

    /**
     * Move the Dice in a circle motion
     * @returns the new position of the dice
     */
    CloudMoveAroundPlus(radius, dd) {
        // increase the angle of rotation
        this.angle += Math.acos(1 - Math.pow(dd / radius, 2) / 2);

        return [-(radius * Math.cos(this.angle) / 4), -(radius * Math.sin(this.angle) / 4)]
    }

    /**
     * Move the Dice in a circle motion
     * @returns the new position of the dice
     */
    CloudMoveAroundMin(radius, dd) {
        // increase the angle of rotation
        this.angle -= Math.acos(1 - Math.pow(dd / radius, 2) / 2);

        return [-(radius * Math.cos(this.angle) / 4), -(radius * Math.sin(this.angle) / 4)]
    }

    CloudAnimation(radius, dd) {

        this.rotation = this.angle;
        if (this.round === 2) {
            this.cz += this.czMultiplier;

            if (this.cz >= 2 || this.cz <= -2) {
                this.czMultiplier *= -1;
            }
        }
        if (this.round === 2) {
            [this.cx, this.cy] = this.CloudMoveAroundPlus(radius, dd)
            this.round = 0;
        }
        this.round++;
    }

    getAngle() {
        return this.angle;
    }

    setAngle(_angle) {
        this.angle = _angle;
    }

    getClips() {
        return this.clips;
    }

    setClips(_clips) {
        this.clips = _clips;
    }
}