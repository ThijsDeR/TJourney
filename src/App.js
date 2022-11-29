
import { Canvas } from "@react-three/fiber";
import Environments from "./assets/Environment/Environment";
import { Suspense, useState } from "react";
import { Environment, PresentationControls, View, Stars, OrbitControls } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";
import Login from "./pages/login/Login.js";
import 'bulma/css/bulma.min.css';
import { RandomCount } from './assets/Dice/Dice'

function App() {

  return (
    <Environments />
  );
}

export default App;