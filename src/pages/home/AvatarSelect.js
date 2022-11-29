import React from 'react';
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Canvas } from "@react-three/fiber";
import { Environment, Stars, OrbitControls } from "@react-three/drei";

import Chopper from '../../assets/Chopper/Chopper';
import Shiba from '../../assets/Shiba/Shiba';
import RandomGuy from '../../assets/Random/Random'
import Dragon from '../../assets/Dragon/Dragon'


function AvatarSelect() {

    function selectAvatar(avatar) {
        console.log("selected " + avatar)
    }

    return (
        <>
            <Navigation />
            <div className="pt-5 mt-5 mx-3">
                <div className="title text-center has-text-centered">
                    Avatar Select
                </div>

                {/* Contains two columns */}
                <div className="columns is-mobile is-centered">
                    {/* Default column */}
                    <div className="box my-3 mr-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar("chopper")}>
                        {/* Position of camera, x y z, currents puts it top right a bit away from chopper */}
                        <Canvas camera={{ position: [3, 2, 3] }}>
                            {/* Where the camera orbits around, recommend putting the y a bit up */}
                            <OrbitControls target={[0, 2.5, 0]} />
                            {/* Leave the position at 0, scale depends on the avatar */}
                            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.05}>
                                <Chopper />
                            </ mesh>
                            <Environment preset="sunset" />
                        </Canvas>
                    </div>
                    {/* End of first column */}
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar("shiba")}>
                        <Canvas camera={{ position: [3, 0, 3] }}>
                            <OrbitControls target={[0, -0.0, 0]} />
                            <mesh position={[0, 0, 0,]} rotation={[0, 0, 0]} scale={2.5}>
                                <Shiba />
                            </mesh>
                            <Environment preset="sunset" />
                        </Canvas>
                    </div>
                </div>
                {/* End of first set of columns */}

                <div className="columns is-mobile is-centered">
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar("randomGuy")}>
                        <Canvas camera={{ position: [2, 2, 2] }}>
                            <OrbitControls target={[0, 2, 0]} />
                            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.2}>
                                <RandomGuy />
                            </mesh>
                            <Environment preset="sunset" />
                        </Canvas>
                    </div>
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar("placeholder")}>
                        <Canvas camera={{ position: [2, 2, 2] }}>
                            <OrbitControls target={[0, 2, 0]} />
                            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.2}>
                                <RandomGuy />
                                {/* Dragon is broken it seems atm */}
                                {/* <Dragon /> */}
                            </mesh>
                            <Environment preset="sunset" />
                        </Canvas>
                    </div>
                </div>
                <div className="columns is-mobile is-centered">
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar("placeholder")}>
                        <Canvas camera={{ position: [2, 2, 2] }}>
                            <OrbitControls target={[0, 2, 0]} />
                            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.2}>
                                <RandomGuy />
                            </mesh>
                            <Environment preset="sunset" />
                        </Canvas>
                    </div>
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar("placeholder")}>
                        <Canvas camera={{ position: [2, 2, 2] }}>
                            <OrbitControls target={[0, 2, 0]} />
                            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.2}>
                                <RandomGuy />
                            </mesh>
                            <Environment preset="sunset" />
                        </Canvas>
                    </div>
                </div>
                <div className="columns is-mobile is-centered">
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar("placeholder")}>
                        <Canvas camera={{ position: [2, 2, 2] }}>
                            <OrbitControls target={[0, 2, 0]} />
                            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.2}>
                                <RandomGuy />
                            </mesh>
                            <Environment preset="sunset" />
                        </Canvas>
                    </div>
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar("placeholder")}>
                        <Canvas camera={{ position: [2, 2, 2] }}>
                            <OrbitControls target={[0, 2, 0]} />
                            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.2}>
                                <RandomGuy />
                            </mesh>
                            <Environment preset="sunset" />
                        </Canvas>
                    </div>
                </div>
                <div className="columns is-mobile is-centered">
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar("placeholder")}>
                        <Canvas camera={{ position: [2, 2, 2] }}>
                            <OrbitControls target={[0, 2, 0]} />
                            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.2}>
                                <RandomGuy />
                            </mesh>
                            <Environment preset="sunset" />
                        </Canvas>
                    </div>
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar("placeholder")}>
                        <Canvas camera={{ position: [2, 2, 2] }}>
                            <OrbitControls target={[0, 2, 0]} />
                            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.2}>
                                <RandomGuy />
                            </mesh>
                            <Environment preset="sunset" />
                        </Canvas>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}

export default AvatarSelect;