import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Environment, Stars, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { RandomCount } from "./assets/Dice/Dice"

const root = ReactDOM.createRoot(document.getElementById('root'));
export let dicePosition;
export let textPosition;
export let steps;
let angle = 0;
let dd = 1;
let radius = 40;
let luckyMove = true;
let cx;
let cy;
let cz = 100;
let levitate = cz + 50;

function Animate() {
  requestAnimationFrame(Animate);

  throwDiceAnimation()

  root.render(
    <div className="canvasContainer">
      <div className="App">
        <React.StrictMode>
          <Canvas id='canvas' camera={{ position: [0, 0, 1.3] }}>
            <OrbitControls target={[0, -0.4, 0]} />
            {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
            <Stars />
            <ambientLight intensity={0.5} />
            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
            <Suspense fallback={null}>
              <Physics>
                <mesh position={[1.475, -1, 0]} scale={1}>
                  <App />
                </mesh>
              </Physics>
            </Suspense>
            <Environment preset="sunset" />
            {/* </PresentationControls> */}
          </Canvas>
        </React.StrictMode>
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

function throwDiceAnimation() {
  let speed = 1;
  let player = 0
  if (luckyMove === true) {
    [cx, cy] = moveLuckyblock();
    textPosition = dicePosition + 20;
  } else {
    if (cx > player || cy > player) {
      if (cx > player) {
        cx -= speed;
      }
      if (cy > player) {
        cy -= speed;
      }
      dicePosition = [cx, cz, cy]
    }
    if (cx < player || cy < player) {
      if (cx < player) {
        cx += speed;
      }
      if (cy < player) {
        cy += speed;
      }
    }
    dicePosition = [player, cz, player];
    setTimeout(() => {
      textAnimation();
      if (levitate <= cz + 80) {
        levitate = levitate + 0.4;
      }
    }, 500)
  }
}

function textAnimation() {
  textPosition = [cx, levitate, cy];
}


function moveLuckyblock() {
  // increase the angle of rotation
  angle += Math.acos(1 - Math.pow(dd / radius, 2) / 2);

  dicePosition = [radius * Math.cos(angle), 100, radius * Math.sin(angle)]

  return [radius * Math.cos(angle), radius * Math.sin(angle)]
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

Animate();