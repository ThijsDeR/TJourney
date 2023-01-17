import Circle from "./circle.js";
import * as THREE from 'three';
import { addLevelAmount } from "../services/level-service.js";

export default class StartCircle extends Circle {
    offset;
    xp;
    constructor(position, rotation, scale) {
        super(position, rotation, scale);
        this.offset = 1
        this.xp = 500
    }
    getElement(key) {
        return (
            <mesh key={key} position={[this.position.x, this.position.y - this.offset, this.position.z]} rotation={this.rotation.getRotationArray()} material={new THREE.MeshLambertMaterial({color: "red"})}>
                <cylinderGeometry attach="geometry" args={[1, 0.5, 2, 32]}/>
            </mesh>
        )
    }

    playerPassed() {
        addLevelAmount(this.xp)
    }

    playerLandedOn() {
        addLevelAmount(this.xp * 2)
    }
}