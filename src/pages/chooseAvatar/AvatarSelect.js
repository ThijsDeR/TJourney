import React from 'react';
import { useState, useEffect } from "react";
import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import { Canvas } from "@react-three/fiber";
import { Environment, Stars, OrbitControls, PresentationControls } from "@react-three/drei";

import Chopper from '../../assets/Chopper/Chopper';
import Shiba from '../../assets/Shiba/Shiba';
import RandomGuy from '../../assets/Random/Random';
import Dragon from '../../assets/Dragon/Dragon';

const ChopperCanvas =
    // Position of camera, x y z, currents puts it top right a bit away from chopper 
    < Canvas camera={{ position: [3, 2, 3] }}>
        {/* Where the camera orbits around, recommend putting the y a bit up */}
        < OrbitControls target={[0, 2.5, 0]} enableZoom={false} enablePan={true} autoRotate={true} autoRotateSpeed={5} />
        {/* Leave the position at 0, scale depends on the avatar */}
        < mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.05} >
            <Chopper />
        </mesh >
        <Environment preset="sunset" />
    </Canvas >;

const ShibaCanvas =
    <Canvas camera={{ position: [3.5, 0, 3.5] }}>
        <OrbitControls target={[0, -0.0, 0]} enableZoom={false} enablePan={true} autoRotate={true} autoRotateSpeed={5} />
        <mesh position={[0, 0, 0,]} rotation={[0, 0, 0]} scale={2.5}>
            <Shiba />
        </mesh>
        <Environment preset="sunset" />
    </Canvas>;

const RandomGuyCanvas =
    <Canvas camera={{ position: [2, 2, 2] }}>
        <OrbitControls target={[0, 2, 0]} enableZoom={false} enablePan={true} autoRotate={true} autoRotateSpeed={5} />
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.2}>
            <RandomGuy />
        </mesh>
        <Environment preset="sunset" />
    </Canvas>;

const PlaceholderCanvas =
    <Canvas camera={{ position: [2, 2, 2] }}>
        <OrbitControls target={[0, 2, 0]} enableZoom={false} enablePan={true} autoRotate={true} autoRotateSpeed={5} />
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.2}>
            <RandomGuy />
        </mesh>
        <Environment preset="sunset" />
    </Canvas>;

function AvatarSelect({ user, isLoading, setIsLoading }) {
    const [pickedTheMainAvatar, setPickedTheMainAvatar] = useState(false);
    const [chosenAvatar, setChosenAvatar] = useState(undefined);

    function selectAvatar(avatarId) {
        const avatars = [ChopperCanvas, ShibaCanvas, PlaceholderCanvas];
        setChosenAvatar(avatars[avatarId]);
        setPickedTheMainAvatar(true);
        console.log("picked avatar: " + avatarId);
    }

    return (
        <>

            <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: "black", overflowY: "auto" }}>
                <div className="title text-center has-text-centered has-text-white">
                    Avatar Select
                </div>

                {/* Contains two columns */}
                <div className="columns is-mobile is-centered">
                    {/* Default column */}
                    <div className="box my-3 mr-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar(0)}>
                        {ChopperCanvas}
                    </div>
                    {/* End of first column */}
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar(1)}>
                        {ShibaCanvas}
                    </div>
                </div>
                {/* End of first set of columns */}

                <div className="columns is-mobile is-centered">
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar(2)}>
                        {RandomGuyCanvas}
                    </div>
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar(2)}>
                        {PlaceholderCanvas}
                    </div>
                </div>
                <div className="columns is-mobile is-centered">
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar(2)}>
                        {PlaceholderCanvas}
                    </div>
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar(2)}>
                        {PlaceholderCanvas}
                    </div>
                </div>
                <div className="columns is-mobile is-centered">
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar(2)}>
                        {PlaceholderCanvas}
                    </div>
                    <div className="box my-3 mr-3 mr-3 column is-5" onClick={() => selectAvatar(2)}>
                        {PlaceholderCanvas}
                    </div>
                </div>
            </div>
            <Navigation user={user} />
        </>
    );
}

export default AvatarSelect;