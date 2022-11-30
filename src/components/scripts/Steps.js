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

let placeOnTheBoard = 0;
let placeChopper = [-17, 6.8, 8];

export function steps(listOfPlacesForChopper) {
  stepsReset(listOfPlacesForChopper)

  for (let i = 0; i <= listOfPlacesForChopper.length; i++) {
    if (placeOnTheBoard === i) {
      console.log(placeChopper = listOfPlacesForChopper[i]);
      placeChopper = listOfPlacesForChopper[i];
    }
  }

  return (
    <mesh position={placeChopper} rotation={[0, 0, 0]} scale={0.05}>
      <Chopper />
    </mesh>
  );
}

export function stepsUp(number, listOfPlacesForChopper) {
  console.log("at first: " + placeOnTheBoard)
  placeOnTheBoard = placeOnTheBoard + number;
  console.log("after: " + placeOnTheBoard)


  steps(listOfPlacesForChopper);
}

export function stepsReset(listOfPlacesForChopper) {
  //6<12+1
  if (listOfPlacesForChopper.length - 1 < placeOnTheBoard) {
    let newPlaceOntheBoard;
    newPlaceOntheBoard = placeOnTheBoard % listOfPlacesForChopper.length;
    placeOnTheBoard = newPlaceOntheBoard;
  }
}