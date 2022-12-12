import FantasyBookComponent from "../assets/FantasyBook/FantasyBook.js";
import Circle from "./circle.js";
import Position from "./position.js";
import Rotation from "./rotation.js";
import StartCircle from "./startCircle.js";
import World from "./world.js";
import XPCircle from "./xpCircle.js";

export default class FantasyBook extends World {
    constructor() {
        super([
            new StartCircle(new Position(-18, -0.1, -15.9), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-9, -0.1, -15.9), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-3.2, -0.1, -15.9), new Rotation(0, 0, 0), 1),
            new Circle(new Position(3, -0.1, -15.9), new Rotation(0, 0, 0), 1),
            new XPCircle(new Position(8, 0.2, -14.9), new Rotation(0, 0, 0), 1),
            new Circle(new Position(9.8, 0.1, -10.9), new Rotation(0, 0, 0), 1),
            new Circle(new Position(10, 0, -5.5), new Rotation(0, 0, 0), 1),
            new Circle(new Position(10.5, 0, 0), new Rotation(0, 0, 0), 1),
            new Circle(new Position(10.75, 0, 5), new Rotation(0, 0, 0), 1),
            new XPCircle(new Position(10.75, 0, 10), new Rotation(0, 0, 0), 1),
            new Circle(new Position(10.75, -0.3, 15), new Rotation(0, 0, 0), 1),
            new Circle(new Position(10.75, 0, 20), new Rotation(0, 0, 0), 1),
            new Circle(new Position(10.75, 0, 25), new Rotation(0, 0, 0), 1),
            new Circle(new Position(7, 0.2, 28), new Rotation(0, 0, 0), 1),
            new XPCircle(new Position(1, -0.8, 27.5), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-8, -1.1, 27.5), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-10.5, -0.5, 24), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-10.5, -0.5, 19), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-10.5, -0.5, 14), new Rotation(0, 0, 0), 1),
            new XPCircle(new Position(-10.5, -0.5, 9), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-10.5, -0.5, 4), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-13, -0.2, 0), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-19, -0.5, -0.5), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-25, -1.4, -0.4), new Rotation(0, 0, 0), 1),
            new XPCircle(new Position(-30, -2.4, -0.8), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-35, -3.4, -4), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-35.5, -3.6, -9.4), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-35.5, -3.6, -14.4), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-35.5, -3.6, -19.4), new Rotation(0, 0, 0), 1),
            new XPCircle(new Position(-35.5, -3.6, -24.4), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-35.5, -3.6, -29.4), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-32, -2.8, -31.4), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-27, -1.7, -31.6), new Rotation(0, 0, 0), 1),
            new Circle(new Position(-22, -0.9, -31.6), new Rotation(0, 0, 0), 1),
            new XPCircle(new Position(-17, -0.3, -31.6), new Rotation(0, 0, 0), 1),
        ])
    }

    getElement(timeElapsed, game) {
        return (<FantasyBookComponent timeElapsed={timeElapsed} game={game} />)
    }
}