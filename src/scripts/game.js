import Player from "./player.js";
import Rotation from './rotation.js';

export default class Game {
    world;
    player;
    friends;
    lastPlaceOnBoard;
    shouldUpdate;

    constructor(world) {
        this.world = world;
        this.player = new Player(this.world.circles[0].position, new Rotation(0, 0, 0), 1.5, 0)
        this.lastPlaceOnBoard = 0;
        this.shouldUpdate = false;
        this.friends = [];
        
    }

    getWorldElement = (timeElapsed) => {
        return this.world.getElement(timeElapsed, this);
    }

    update(timeElapsed) {
        this.player.update(timeElapsed, this.world.circles)
        this.friends.forEach((friend) => {
            friend.update(timeElapsed, this.world.circles)
        })
        if (this.player.currentPlaceOnTheBoard !== this.lastPlaceOnBoard) {

            if (this.player.currentPlaceOnTheBoard === this.player.placeOnTheBoard) {
                this.world.circles[this.player.currentPlaceOnTheBoard % this.world.circles.length].playerLandedOn()
                this.shouldUpdate = true;
            }
            else {
                this.world.circles[this.player.currentPlaceOnTheBoard % this.world.circles.length].playerPassed()
            }
            this.lastPlaceOnBoard = this.player.currentPlaceOnTheBoard
        }
    }

    throwDice(count) {
        this.player.spawnDiceAnimation(count)
    }
}