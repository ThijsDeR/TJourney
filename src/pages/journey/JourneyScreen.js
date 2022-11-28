import "../App.css";

import React from "react";
import { Canvas } from "@react-three/fiber";
import Environments from "../assets/Environment/Environment";
import { Suspense } from "react";
import { Environment, PresentationControls, View, Stars, OrbitControls } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";

function Plane() {
    const [ref, api] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -1, 0]
    }));
    return (
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshLambertMaterial attach="material" color="lightgreen" />
        </mesh>
    );
}

function Journey() {
    return (
        <div className="canvasContainer">
            <div className="App">
                <Canvas camera={{ position: [0, -0.2, 1.2] }}>
                    <OrbitControls target={[0, -0.4, 0]} />
                    {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
                    <Stars />
                    <ambientLight intensity={0.5} />
                    {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
                    <Suspense fallback={null}>
                        <Physics>
                            <mesh position={[1.5, -1, 0]} scale={1}>
                                <Environments />
                            </mesh>
                            <Plane />
                        </Physics>
                    </Suspense>
                    <Environment preset="sunset" />
                    {/* </PresentationControls> */}
                </Canvas>
            </div>
            <div class="progress">
                <div class="progress-value"><h3 className="level">Level 50</h3></div>
            </div>
            <div class="parent">
                <button class="ButtonHome">&#9816;</button>
                <button class="ButtonHome">&#9728;</button>
                <button class="ButtonHome">&#9731;</button>
            </div>
        </div>
    );
}

export default Journey;