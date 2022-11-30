import "../../App.css";
import { Circle, useGLTF } from '@react-three/drei'
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

export function drawCircle(placeCircle){


    return( 
        <mesh position={placeCircle} rotation={[-1.55, 0, 0]} scale={2}>
        <Circle />
      </mesh> 
    );

       
        
    
    
   
}
