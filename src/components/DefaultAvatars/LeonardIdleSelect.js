import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import DancingLeonard from '../../assets/Leonard/DancingLeonard';

function LeonardIdleSelect() {
    return (
        <>
            <Canvas camera={{ position: [2.2, 2.2, 2.2] }}>
                <OrbitControls target={[0, 1.8, 0]} enableZoom={false} enablePan={true} autoRotate={true} autoRotateSpeed={5} />
                <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={2}>
                    <DancingLeonard />
                </mesh>
                <Environment preset="sunset" />
            </Canvas>
        </>
    );
}

export default LeonardIdleSelect;