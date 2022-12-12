import Circle from "./circle.js";
import * as THREE from 'three';
import { addLevelAmount, updateLevel } from "../services/level-service.js";

export default class XPCircle extends Circle {
    offset;
    xp;
    constructor(position, rotation, scale, updateLevel) {
        super(position, rotation, scale);
        this.offset = 1
        this.xp = 100
    }
    getElement() {
        return (
            <mesh position={[this.position.x, this.position.y - this.offset, this.position.z]} rotation={this.rotation.getRotationArray()} material={new THREE.MeshLambertMaterial({color: "blue"})}>
                <cylinderBufferGeometry attach="geometry" args={[1, 0.5, 2, 32]}/>
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