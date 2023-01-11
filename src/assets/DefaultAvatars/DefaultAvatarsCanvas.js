import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { getAllCharacters } from "../../services/playerCharacter-service";

const MichelleIdleCanvas =
    <Canvas camera={{ position: [2.2, 2.2, 2.2] }}>
        <OrbitControls target={[0, 1.8, 0]} enableZoom={false} enablePan={true} autoRotate={true} autoRotateSpeed={5} />
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={2}>
        {getAllCharacters()[0].idle}
        </mesh>
        <Environment preset="sunset" />
    </Canvas>;

const leonardDancingCanvas =
    <Canvas camera={{ position: [2.2, 2.2, 2.2] }}>
        <OrbitControls target={[0, 1.8, 0]} enableZoom={false} enablePan={true} autoRotate={true} autoRotateSpeed={5} />
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={2}>
            {getAllCharacters()[1].idle}
        </mesh>
        <Environment preset="sunset" />
    </Canvas>;

export const DefaultAvatars = {
    MichelleIdle: MichelleIdleCanvas,
    leonardDancingCanvas: leonardDancingCanvas
};