
import { Canvas } from "@react-three/fiber";
import Environments from "./assets/Environment/Environment";
import { Suspense, useState } from "react";
import { Environment, PresentationControls, View, Stars, OrbitControls } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";
import Login from "./pages/login/Login.js";
import 'bulma/css/bulma.min.css';
import { RandomCount, throwDiceAnimation } from './assets/Dice/Dice'

export let steps;
export let luckyMove = true;

function App() {

  throwDiceAnimation()

  return (
    <div className="canvasContainer">
      <div className="App">
      <Canvas id='canvas' camera={{ position: [0, 0, 1.3] }}>
            <OrbitControls target={[0, -0.4, 0]} />
            {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
            <Stars />
            <ambientLight intensity={0.5} />
            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
            <Suspense fallback={null}>
              <Physics>
                <mesh position={[1.475, -1, 0]} scale={1}>
                  <Environments />
                </mesh>
              </Physics>
            </Suspense>
            <Environment preset="sunset" />
            {/* </PresentationControls> */}
          </Canvas>
      </div>
      <div className="parent">
        <button className="ButtonHome">&#9816;</button>
        <button id="diceButton" className="ButtonHome" onClick={() => {
          if (luckyMove === true) {
            luckyMove = false;
            steps = RandomCount(30);
          } else {
            luckyMove = true;
          }
        }}></button>
        <button className="ButtonHome">&#9731;</button>
      </div>
    </div>

  );
}

export default App;