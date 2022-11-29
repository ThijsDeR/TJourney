/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: LIONDESERT (https://sketchfab.com/sherzod122007)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/lucky-block-c1d5cfdbd2c24c3aa0a3b82286a19f76
title: Lucky Block
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Dice(props) {
  const { nodes, materials } = useGLTF('/dice.gltf')

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material} />
      </group>
    </group>
  )
}

export function RandomCount(amount) {
  const stepAmount = Math.floor(Math.random() * (amount - 1) + 1);
  return stepAmount;
}

useGLTF.preload('/dice.gltf')
