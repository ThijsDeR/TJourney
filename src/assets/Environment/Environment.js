/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: BigPo (https://sketchfab.com/BigPo)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/low-poly-environment-2e18c1baa9164093ad2e99e0a904363a
title: Low poly environment
*/

import React, { useRef } from 'react'
import { Circle, useGLTF } from '@react-three/drei'
import Chopper from '../Chopper/Chopper'
import Shiba from '../Shiba/Shiba'
import RandomGuy from '../Random/Random'
import Dragon from '../Dragon/Dragon'

export default function Environments(props) {
  const { nodes, materials } = useGLTF('/environment.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={8.76}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Soil_Soil_texture_0.geometry} material={materials.Soil_texture} />
          <group position={[6.15, 4.42, -27]}>
            <mesh geometry={nodes.Water_Water_texture_0.geometry} material={materials.Water_texture} />
          </group>
          <group position={[-14.07, 11.95, -25.51]}>
            <mesh geometry={nodes.Rock_Rock_texture_0.geometry} material={materials.Rock_texture} />
          </group>
          <mesh geometry={nodes.Tree_2_Tree_2_texture_0.geometry} material={materials.Tree_2_texture} />
          <mesh geometry={nodes.Tree_1_Tree_1_texture_0.geometry} material={materials.Tree_1_texture} />
          <mesh geometry={nodes.Wood_Wood_texture_0.geometry} material={materials.Wood_texture} />
          <mesh geometry={nodes.Coppice_Coppice_texture_0.geometry} material={materials.Coppice_texture} />
          <mesh geometry={nodes.Grass_Grass_texture_0.geometry} material={materials.Grass_texture} />
          <mesh geometry={nodes.Root_Root_texture_0.geometry} material={materials.Root_texture} />
          <mesh geometry={nodes.Lotus_leaf_Lotus_leaf_texture_0.geometry} material={materials.Lotus_leaf_texture} />
          <mesh geometry={nodes.Lantern_pole_Lantern_pole_texture_0.geometry} material={materials.Lantern_pole_texture} />
          <mesh geometry={nodes.Kerbstone_Kerbstone_texture_0.geometry} material={materials.Kerbstone_texture} />
          <mesh geometry={nodes.Wooden_poles_Wooden_pole_texture_0.geometry} material={materials.Wooden_pole_texture} />
          <mesh geometry={nodes.Box_Box_texture_0.geometry} material={materials.Box_texture} />
          <mesh geometry={nodes.Wood_floor_1_Wood_floor_1_texture_0.geometry} material={materials.Wood_floor_1_texture} />
          <mesh geometry={nodes.Wood_floor_2_Wood_floor_2_texture_0.geometry} material={materials.Wood_floor_2_texture} />
          <mesh geometry={nodes.Wood_floor_3_Wood_floor_3_texture_0.geometry} material={materials.Wood_floor_3_texture} />
          <mesh geometry={nodes.Wood_floor_4_Wood_floor_4_texture_0.geometry} material={materials.Wood_floor_4_texture} />
          <mesh geometry={nodes.Other_Other_texture_0.geometry} material={materials.Other_texture} />
          <group>
            <mesh geometry={nodes.Boat_Boat_texture_0.geometry} material={materials.Boat_texture} />
            <mesh position={[-17, 6.8, 8]} rotation={[0, 0, 0]} scale={0.05}>
              <Chopper />
            </mesh>
            <mesh position={[-17, 8.3, -12]} rotation={[0, -0.5, 0]} scale={1.5}>
              <Shiba />
            </mesh>
            <mesh position={[-16.5, 13, -29]} rotation={[0, 0, 0]} scale={0.3}>
              <RandomGuy />
            </mesh>
            <mesh position={[-17, 20, -3]} rotation={[0, 0, 0]} scale={5}>
              {/* <Dragon /> */}
            </mesh>
            <group>
              <mesh position={[-17, 6.8, -1]} rotation={[-1.55, 0, 0]} scale={2}>
                <Circle />
              </mesh>
              <mesh position={[-15, 16.2, -45]} rotation={[-1.55, 0, 0]} scale={2}>
                <Circle />
              </mesh>
              <mesh position={[-17, 6.8, -12]} rotation={[-1.55, 0, 0]} scale={2}>
                <Circle />
              </mesh>
              <mesh position={[-17, 6.8, 8  ]} rotation={[-1.55, 0, 0]} scale={2}>
                <Circle />
              </mesh>
              <mesh position={[-15, 10, -21 ]} rotation={[-1, 0, 0]} scale={2}>
                <Circle />
              </mesh>
              <mesh position={[-16.5, 13, -29]} rotation={[-1.55, 0, 0]} scale={2}>
                <Circle />
              </mesh>
            </group>
          </group>
          <mesh geometry={nodes.Rickshaw_Rickshaw_texture_0.geometry} material={materials.Rickshaw_texture} />
          <mesh geometry={nodes.Wooden_railings_1_Wooden_railings_1_texture_0.geometry} material={materials.Wooden_railings_1_texture} />
          <mesh geometry={nodes.Window_1_Window_1_texture_0.geometry} material={materials.Window_1_texture} />
          <group position={[-3.11, 14.27, -6.57]}>
            <mesh geometry={nodes.B_House_1_B_house_1_texture_0.geometry} material={materials.B_house_1_texture} />
          </group>
          <mesh geometry={nodes.Window_2_Window_2_texture_0.geometry} material={materials.Window_2_texture} />
          <mesh geometry={nodes.B_House_2_B_house_2_texture_0.geometry} material={materials.B_house_2_texture} />
          <mesh geometry={nodes.Wooden_railings_3_Wooden_railings_3_texture_0.geometry} material={materials.Wooden_railings_3_texture} />
          <mesh geometry={nodes.Window_3_Window_3_texture_0.geometry} material={materials.Window_3_texture} />
          <mesh geometry={nodes.Other_3_Other_3_texture_0.geometry} material={materials.Other_3_texture} />
          <mesh geometry={nodes.B_House_3_B_house_3_texture_0.geometry} material={materials.B_house_3_texture} />
          <mesh geometry={nodes.Wooden_railings_4_Wooden_railings_4_texture_0.geometry} material={materials.Wooden_railings_4_texture} />
          <mesh geometry={nodes.Other_4_Other_4_texture_0.geometry} material={materials.Other_4_texture} />
          <mesh geometry={nodes.Window_4_Window_4_texture_0.geometry} material={materials.Window_4_texture} />
          <mesh geometry={nodes.B_House_4_B_House_4_texture_0.geometry} material={materials.B_House_4_texture} />
          <mesh geometry={nodes.Window_5_Window_5_texture_0.geometry} material={materials.Window_5_texture} />
          <mesh geometry={nodes.Other_5_Other_5_texture_0.geometry} material={materials.Other_5_texture} />
          <mesh geometry={nodes.Rotating_bowl_Rotating_bowl_texture_0.geometry} material={materials.Rotating_bowl_texture} />
          <mesh geometry={nodes.B_House_5_B_House_5_texture_0.geometry} material={materials.B_House_5_texture} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/environment.gltf')
