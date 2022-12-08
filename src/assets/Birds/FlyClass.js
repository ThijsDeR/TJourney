export class FlyClass {
    angle = 0;
    clips;
    dd = 2;
    radius = 80;
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
    BirdMoveAround() {
        // increase the angle of rotation
        this.angle += Math.acos(1 - Math.pow(this.dd / this.radius, 2) / 2);

        return [this.radius * Math.cos(this.angle) / 4, this.radius * Math.sin(this.angle) / 4]
    }

    BirdFlyAnimation() {

        this.rotation = this.angle;
        if (this.round === 2) {
            this.cz += this.czMultiplier;

            if (this.cz >= 2 || this.cz <= -2) {
                this.czMultiplier *= -1;
            }
        }
        [this.cx, this.cy] = this.BirdMoveAround()
            this.round = 0
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