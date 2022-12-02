export class FlyClass {
    angle = 0;
    clips;
    dd = 1;
    radius = 5000;
    cz = 0;
    czMultiplier = 10;
    cx;
    cy;
    rotation;

    /**
     * Move the Dice in a circle motion
     * @returns the new position of the dice
     */
    BirdMoveAround() {
        // increase the angle of rotation
        this.angle += Math.acos(1 - Math.pow(this.dd / this.radius, 2) / 2);

        return [this.radius * Math.cos(this.angle), this.radius * Math.sin(this.angle)]
    }

    BirdFlyAnimation() {
        [this.cx, this.cy] = this.BirdMoveAround();
        this.rotation = this.angle;
        this.cz += this.czMultiplier;

        if (this.cz >= 700 || this.cz <= -700) {
            this.czMultiplier *= -1;
        }

        for (let i = 0; i < 50; i++) {
            [this.cx, this.cy] = this.BirdMoveAround()
        }
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