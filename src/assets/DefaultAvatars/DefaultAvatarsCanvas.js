import Chopper from "../Chopper/Chopper";
import MichelleIdle from "../Michelle/Idle";
import RandomGuy from "../Random/Random";
import Shiba from "../Shiba/Shiba"
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { getAllCharacters } from "../../services/playerCharacter-service";

// const ChopperCanvas =
//     // Position of camera, x y z, currents puts it top right a bit away from chopper 
//     < Canvas camera={{ position: [3, 2, 3] }}>
//         {/* Where the camera orbits around, recommend putting the y a bit up */}
//         < OrbitControls target={[0, 2.5, 0]} enableZoom={false} enablePan={true} autoRotate={true} autoRotateSpeed={5} />
//         {/* Leave the position at 0, scale depends on the avatar */}
//         < mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.05} >
//             {getAllCharacters().idle[0]}
//         </mesh >
//         <Environment preset="sunset" />
//     </Canvas >;

// const ShibaCanvas =
//     <Canvas camera={{ position: [3.5, 0, 3.5] }}>
//         <OrbitControls target={[0, -0.0, 0]} enableZoom={false} enablePan={true} autoRotate={true} autoRotateSpeed={5} />
//         <mesh position={[0, 0, 0,]} rotation={[0, 0, 0]} scale={2.5}>
//             {getAllCharacters().idle[0]}
//         </mesh>
//         <Environment preset="sunset" />
//     </Canvas>;

// const RandomguyCanvas =
//     <Canvas camera={{ position: [2, 2, 2] }}>
//         <OrbitControls target={[0, 2, 0]} enableZoom={false} enablePan={true} autoRotate={true} autoRotateSpeed={5} />
//         <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.2}>
//             <RandomGuy />
//         </mesh>
//         <Environment preset="sunset" />
//     </Canvas>;

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
    // Chopper: ChopperCanvas,
    // Shiba: ShibaCanvas,
    // Randomguy: RandomguyCanvas,
    MichelleIdle: MichelleIdleCanvas,
    leonardDancingCanvas: leonardDancingCanvas
};