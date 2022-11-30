/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Animateria (https://sketchfab.com/Animateria)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/volcano-island-lowpoly-4a6591dc9fee40d8bfda8350683af9af
title: Volcano Island Lowpoly
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import Chopper from '../Chopper/Chopper'

export default function Vulcano(props) {
  const { nodes, materials } = useGLTF('/vulcano.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Clouds_Clouds_0.geometry} material={materials.Clouds} />
          </group>
          <mesh position={[-6050, 2205, -3100]} rotation={[0, 4, 0]} scale={5}>
              {/* <Chopper /> */}
            </mesh>
          <group position={[180.51, 1151.68, 5904.32]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.hammock_hammock_0.geometry} material={materials.hammock} />
          </group>
          <group position={[3492.55, 1112.37, 3620.93]} rotation={[-1.38, 0.11, -0.02]} scale={100}>
            <mesh geometry={nodes.Tequila_Bottle_Tequila_Bottle_0.geometry} material={materials.Tequila_Bottle} />
          </group>
          <group position={[3541.67, 1110.09, 3568.02]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.skeleton_skeleton_0.geometry} material={materials.skeleton} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Pyramid_Pyramid_0.geometry} material={materials.Pyramid} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100.04}>
            <mesh geometry={nodes.Island_Grass_Island_Grass_0.geometry} material={materials.Island_Grass} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.shrubbery_shrubbery_0.geometry} material={materials.shrubbery} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Lava_bubble_Lava_bubble_0.geometry} material={materials.Lava_bubble} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Volcanic_lava_Volcanic_lava_0.geometry} material={materials.Volcanic_lava} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Palm_tree_2_Palm_tree_2_0.geometry} material={materials.Palm_tree_2} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Palm_tree_1_Palm_tree_1_0.geometry} material={materials.Palm_tree_1} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Volacano_Sand_Volacano_Sand_0.geometry} material={materials.Volacano_Sand} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Ocean_Ocean_0.geometry} material={materials.Ocean} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Volcano_Grass_Volcano_Grass_0.geometry} material={materials.Volcano_Grass} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100.04}>
            <mesh geometry={nodes.Volcano_Base_Volcano_Base_0.geometry} material={materials.Volcano_Base} />
          </group>
          <group position={[8827.42, 8352.52, 2067.07]} rotation={[1.26, 0.67, -1.17]} scale={100}>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/vulcano.gltf')
