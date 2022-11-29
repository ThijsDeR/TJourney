
import { Canvas } from "@react-three/fiber";
import Environments from "./assets/Environment/Environment";
import { Suspense, useState } from "react";
import { Environment, PresentationControls, View, Stars, OrbitControls } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";
import Login from "./pages/login/Login.js";
import 'bulma/css/bulma.min.css';
import { moveLuckyblockToCenter, RandomCount, textAnimation, throwDiceAnimation } from './assets/Dice/Dice'

export let steps;
export let luckyMove = true;
export let luckyVisible = false;
let delay = 0;
let countAsked = false;

function App() {
  
  if (luckyVisible === true) {
    delay++;
    if (luckyMove === true) {
      throwDiceAnimation()
    }
    if (delay >= 500) {
      luckyMove = false;
      moveLuckyblockToCenter(1, 0)
      if (countAsked === false && delay >= 600) {
        steps = RandomCount(30);
        textAnimation(180);
        countAsked = true;
      }
    } else if (delay > 20000) {
      luckyVisible = false;
      luckyMove = true;
      delay = 0;
    }
  }

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
          if (luckyVisible === false) {
            luckyVisible = true;
          } else {

            // TODO: Right now the block just turns invisable, we need this button to do something else but idk what
            luckyVisible = false;
          }
        }}></button>
        <button className="ButtonHome">&#9731;</button>
      </div>
    </div>

  );
}

export default App;