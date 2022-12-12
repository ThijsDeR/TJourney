/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Pixel (https://sketchfab.com/stefan.lengyel1)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/medieval-fantasy-book-06d5a80a04fc4c5ab552759e9a97d91a
title: Medieval Fantasy Book
*/
import { Circle } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, Text } from '@react-three/drei'
import Birds from '../Birds/Fly'
import Dice from '../Dice/Dice'
import { DiceClass } from '../Dice/DiceClass.js'
import { FlyClass } from '../Birds/FlyClass.js'
import { CircleClass } from '../../components/CircleClass.js'
import MichelleIdle from '../Michelle/Idle'
import Shark from '../Shark/Shark'
import Cloud from '../Cloud/Cloud'
import MichelleWalking from '../Michelle/Walking'
const flyClass = new FlyClass();
const diceClass = new DiceClass();


export default function FantasyBook(props) {
  const circleClass = new CircleClass();
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/fantasyBook.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.The_Life.play();
  })

  flyClass.BirdFlyAnimation()
  diceClass.spawnDiceAnimation(props.luckyVisible, props.positionPlayerClass, props.diceEyesCount);
  props.positionPlayerClass.walkTimer(props.luckyVisible);

  if (!diceClass.isLuckyBlockVisible()) {
    props.setLuckyVisible(false)
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="dad255dd2cf24ae0bb357684e49722b4fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="flag" position={[-11.51, 12.5, -6.75]} rotation={[-Math.PI / 2, 0, -Math.PI / 6]}>
                  <group name="Object_17" position={[-7.26, 9.04, -8.16]}>
                    <mesh name="0" geometry={nodes['0'].geometry} material={materials['Texture-base']} morphTargetDictionary={nodes['0'].morphTargetDictionary} morphTargetInfluences={nodes['0'].morphTargetInfluences} />
                  </group>
                </group>
                <group name="flag-second" position={[-11.49, 12.55, -26.24]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_20" position={[-7.26, 9.04, -8.16]}>
                    <mesh name="1" geometry={nodes['1'].geometry} material={materials['Texture-base']} morphTargetDictionary={nodes['1'].morphTargetDictionary} morphTargetInfluences={nodes['1'].morphTargetInfluences} />
                  </group>
                </group>
                <group name="Scene" position={[-4.79, 0, 0.28]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Mill-wind-wheel" position={[-35.78, -27.19, 3.89]} rotation={[0.45, -0.45, -0.5]}>
                    <group name="Object_11" position={[-8.25, 39.88, -25.75]} rotation={[-0.61, 0.14, 0.64]}>
                      <mesh name="Mill-wind-wheel_Texture-base_0" geometry={nodes['Mill-wind-wheel_Texture-base_0'].geometry} material={materials['Texture-base']} />
                    </group>
                  </group>
                  <group name="Mill-water-wheel" position={[3.71, -15.4, -0.44]} rotation={[-1.92, 0, 0]}>
                    <group name="Object_14" position={[-17.71, 31.18, 4.78]}>
                      <mesh name="Mill-water-wheel_Texture-base_0" geometry={nodes['Mill-water-wheel_Texture-base_0'].geometry} material={materials['Texture-base']} />
                    </group>
                  </group>
                  <group name="Object_5" position={[-14, 15.79, 4.34]}>
                    <mesh name="Scene_Texture-base_0" geometry={nodes['Scene_Texture-base_0'].geometry} material={materials['Texture-base']} />
                    <mesh name="Scene_Texture-base_0_1" geometry={nodes['Scene_Texture-base_0_1'].geometry} material={materials['Texture-base']} />
                    <mesh name="Scene_Texture-base-gloss-jpg_0" geometry={nodes['Scene_Texture-base-gloss-jpg_0'].geometry} material={materials['Texture-base-gloss-jpg']} />
                    <mesh name="Scene_Book-tittle_0" geometry={nodes['Scene_Book-tittle_0'].geometry} material={materials['Book-tittle']} />
                  </group>
                </group>
                <group name="Waterfall" position={[-4.79, 0, 0.35]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_23" position={[-14, 15.79, 4.34]}>
                    <mesh name="Waterfall_Texture-base-gloss-jpg_0" geometry={nodes['Waterfall_Texture-base-gloss-jpg_0'].geometry} material={materials['Texture-base-gloss-jpg']} />
                  </group>
                </group>
                <group name="deers" position={[-23.12, -0.05, 14.88]} rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="Object_26" position={[4.33, 30.39, 4.39]}>
                    <mesh name="deers_Texture-base_0" geometry={nodes['deers_Texture-base_0'].geometry} material={materials['Texture-base']} />
                  </group>
                </group>
                <group>
                  <mesh position={[flyClass.cx, 25 + flyClass.cz, flyClass.cy]} rotation={[0, 3 - flyClass.rotation, 0]} scale={5}>
                    <Birds />
                  </mesh>
                </group>
                <group>
                  <mesh position={[-4, -2.6, -25]} rotation={[0, -0.5, 0]} scale={1}>
                    <Shark />
                  </mesh>
                  <mesh position={[-2, -2.6, -20]} rotation={[0, 0.4, 0]} scale={1}>
                    <Shark />
                  </mesh>
                  <mesh position={[-1, -3, -30]} scale={1}>
                    <Shark />
                  </mesh>
                </group>
                <group>
                  {props.positionPlayerClass.ListofPositionPlaces.map((ListofPositionPlaces = props.positionPlayerClass.ListofPositionPlaces) => {
                    return circleClass.drawCircle(ListofPositionPlaces)
                  })
                  }
                  <mesh position={[-17, -1.3, -31.6]} rotation={[-1.55, 0, 0]} scale={2}>
                    <Circle />
                  </mesh>
                </group>
                <group>
                  <mesh position={props.positionPlayerClass.placeCharacter} rotation={[0, props.positionPlayerClass.rotation, 0]} scale={1.5}>

                    {props.positionPlayerClass.diceNumber === 0 ? <MichelleIdle /> : <MichelleWalking />}
                    
                    {props.luckyVisible ? <group >
                      <mesh position={diceClass.dicePosition} rotation={diceClass.diceRotation()} scale={0.5}>
                        <Dice />
                      </mesh>
                      <mesh position={diceClass.textPosition} scale={0.1}>
                        <Text fontSize={6} color="hotpink">{props.positionPlayerClass.diceNumber}</Text>
                      </mesh>
                    </group> : null}
                  </mesh>
                </group>
                <group>
                  <mesh position={[40, 50, 0]} rotation={[0, 1, 0]} scale={3}>
                    <Cloud />
                  </mesh>
                  <mesh position={[-60, 50, -30]} rotation={[0, 3, 0]} scale={3}>
                    <Cloud />
                  </mesh>
                  <mesh position={[50, 50, 50]} rotation={[0, 1, 0]} scale={3}>
                    <Cloud />
                  </mesh>
                  <mesh position={[25, 50, -50]} rotation={[0, 1, 0]} scale={3}>
                    <Cloud />
                  </mesh>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/fantasyBook.gltf')
