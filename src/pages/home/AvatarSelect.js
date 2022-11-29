import React from 'react';
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Canvas } from "@react-three/fiber";
import Environments from "../../assets/Environment/Environment";
import { Suspense } from "react";
import { Environment, Stars, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Chopper from '../../assets/Chopper/Chopper'
import { Circle, useGLTF } from '@react-three/drei'


function AvatarSelect() {
    const { nodes, materials } = useGLTF('/environment.gltf')

    return (
        <>
            <Navigation />
            <div className="pt-5 mt-5 mx-3">
                <div className="title text-center has-text-centered">
                    Avatar Select
                </div>
                <div className="columns is-mobile">
                    <div className="box my-2  column is-half">
                        <Canvas camera={{ position: [-5, 5.0, 0] }}>
                            <OrbitControls target={[0, 2.5, 0]} />
                            {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
                            {/* <Stars /> */}
                            {/* <ambientLight intensity={0.5} /> */}
                            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
                                <mesh geometry={nodes.Boat_Boat_texture_0.geometry} material={materials.Boat_texture} />
                                <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.05}>
                                    <Chopper />
                                </ mesh>
                            <Environment preset="sunset" />
                            {/* </PresentationControls> */}
                        </Canvas>
                    </div>
                    <div className="box my-2  column is-half">
                        <Canvas camera={{ position: [0, -0.2, 1.2] }}>
                            <OrbitControls target={[0, -0.4, 0]} />
                            {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
                            {/* <Stars /> */}
                            {/* <ambientLight intensity={0.5} /> */}
                            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
                            <Suspense fallback={null}>
                                <Physics>
                                    <mesh position={[1.5, -1, 0]} scale={1}>
                                        <Environments />
                                    </mesh>
                                </Physics>
                            </Suspense>
                            <Environment preset="sunset" />
                            {/* </PresentationControls> */}
                        </Canvas>
                    </div>
                </div>
                <div className="columns is-mobile">
                    <div className="box my-2  column is-half">
                        <Canvas camera={{ position: [0, -0.2, 1.2] }}>
                            <OrbitControls target={[0, -0.4, 0]} />
                            {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
                            <Stars />
                            <ambientLight intensity={0.5} />
                            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
                            <Suspense fallback={null}>
                                <Physics>
                                    <mesh position={[1.5, -1, 0]} scale={1}>
                                        <Environments />
                                    </mesh>
                                </Physics>
                            </Suspense>
                            <Environment preset="sunset" />
                            {/* </PresentationControls> */}
                        </Canvas>
                    </div>
                    <div className="box my-2  column is-half">
                        <Canvas camera={{ position: [0, -0.2, 1.2] }}>
                            <OrbitControls target={[0, -0.4, 0]} />
                            {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
                            <Stars />
                            <ambientLight intensity={0.5} />
                            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
                            <Suspense fallback={null}>
                                <Physics>
                                    <mesh position={[1.5, -1, 0]} scale={1}>
                                        <Environments />
                                    </mesh>
                                </Physics>
                            </Suspense>
                            <Environment preset="sunset" />
                            {/* </PresentationControls> */}
                        </Canvas>
                    </div>
                </div><div className="columns is-mobile">
                    <div className="box my-2  column is-half">
                        <Canvas camera={{ position: [0, -0.2, 1.2] }}>
                            <OrbitControls target={[0, -0.4, 0]} />
                            {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
                            <Stars />
                            <ambientLight intensity={0.5} />
                            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
                            <Suspense fallback={null}>
                                <Physics>
                                    <mesh position={[1.5, -1, 0]} scale={1}>
                                        <Environments />
                                    </mesh>
                                </Physics>
                            </Suspense>
                            <Environment preset="sunset" />
                            {/* </PresentationControls> */}
                        </Canvas>
                    </div>
                    <div className="box my-2  column is-half">
                        <Canvas camera={{ position: [0, -0.2, 1.2] }}>
                            <OrbitControls target={[0, -0.4, 0]} />
                            {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
                            <Stars />
                            <ambientLight intensity={0.5} />
                            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
                            <Suspense fallback={null}>
                                <Physics>
                                    <mesh position={[1.5, -1, 0]} scale={1}>
                                        <Environments />
                                    </mesh>
                                </Physics>
                            </Suspense>
                            <Environment preset="sunset" />
                            {/* </PresentationControls> */}
                        </Canvas>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}

export default AvatarSelect;