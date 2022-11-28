import "../../App.css";
import { Canvas } from "@react-three/fiber";
import Environments from "../../assets/Environment/Environment";
import { Suspense } from "react";
import { Environment, PresentationControls, View, Stars, OrbitControls } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";
import 'bulma/css/bulma.min.css';
import { useState, useEffect } from "react";
import { getCurrentUser, logout } from "../../services/auth-service.js";
import Login from "../../pages/login/Login";
import Chopper from '../../assets/Chopper/Chopper'

const counting = 0;
let placeChopper;

 export  function Steps() {
  if(counting===1){
    placeChopper = [-17, 6.8, -1];
  
  } else if (counting===0){
    placeChopper =[-17, 6.8, 8];
  
  }
  return(
    <mesh position={placeChopper} rotation={[0, 0, 0]} scale={0.05}>
      <Chopper />
    </mesh>
  );
}

export function StepsUp(){

}
