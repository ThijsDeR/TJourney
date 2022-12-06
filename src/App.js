
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Stars, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { getCurrentUser, logout } from "./services/auth-service.js";
import 'bulma/css/bulma.min.css';
import "./App.css";
// for routing
import {
    Routes,
    Route,
    Navigate,
    Link,
} from "react-router-dom";

import Login from "./pages/login/LoginScreen.js";
import Register from "./pages/register/RegisterScreen.js";
import Logout from "./pages/logout/Logout";
import Navigation from "./components/navigation/Navigation.js";
import VulcanoIsland from "./assets/vulcanoIsland/Vulcano.js";
import FantasyBook from "./assets/FantasyBook/FantasyBook.js";
import { PositionPlayerClass } from "./components/PositionPlayerClass.js";

let luckyVisible = false;
let buttonStepsPressedOn = false;
const positionPlayerClass = new PositionPlayerClass();
const ListofPositionPlaces = [[-18, -1.1, -15.9], [-9, -1.1, -15.9], [-3.2, -1.1, -15.9], [3, -1.1, -15.9], [8, -0.8, -14.9], [9.8, -0.9, -10.9], [10, -1, -5.5], [10.5, -1, 0], [10.75, -1, 5], [10.75, -1, 10], [10.75, -1.3, 15], [10.75, -1, 20], [10.75, -1, 25], [7, -0.8, 28],
[1, -1.8, 27.5], [-8, -2.1, 27.5], [-10.5, -1.5, 24], [-10.5, -1.5, 19], [-10.5, -1.5, 14], [-10.5, -1.5, 9], [-10.5, -1.5, 4], [-13, -1.2, 0],
[-19, -1.5, -0.5], [-25, -2.4, -0.4], [-30, -3.4, -0.8], [-35, -4.4, -4], [-35.5, -4.6, -9.4], [-35.5, -4.6, -14.4], [-35.5, -4.6, -19.4],
[-35.5, -4.6, -24.4], [-35.5, -4.6, -29.4], [-32, -3.8, -31.4], [-27, -2.7, -31.6], [-22, -1.9, -31.6], [-17, -1.3, -31.6]];


export function Game({ user, timeElapsed }) {
    positionPlayerClass.walkTimer(ListofPositionPlaces, buttonStepsPressedOn)
    if (!user) {
        return <Navigate to="/login" replace />;
    }


    return (
        <>
            <Navigation />
            <div className="canvasContainer">
                <div className="App">
                    <Canvas camera={{ position: [0, -0.2, 1.2] }} style={{ backgroundColor: "#17E7E7" }}>
                        <OrbitControls target={[0, 0, 0]} />
                        {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
                        <Stars />
                        <ambientLight intensity={0.5} />
                        {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
                        <Suspense fallback={null}>
                            <Physics>
                                <mesh position={[1.5, -1, 0]} scale={1}>
                                    <FantasyBook timeElapsed={timeElapsed} luckyVisible={luckyVisible} positionPlayerClass={positionPlayerClass} ListofPositionPlaces={ListofPositionPlaces} />
                                </mesh>
                            </Physics>
                        </Suspense>
                        <Environment preset="sunset" />
                        {/* </PresentationControls> */}
                    </Canvas>
                </div>
                <div className="parent">
                    <button className="ButtonHome"
                        onClick={() => {

                                if (buttonStepsPressedOn === false) {
                                    buttonStepsPressedOn = true;
                                } else {
                                    buttonStepsPressedOn = false;
                                }
                            }
                        }
                    >&#9816;</button>
                    <button id="diceButton" className="ButtonHome" onClick={() => {
                        if (luckyVisible === false) {
                            luckyVisible = true;
                        } else {

                            // TODO: Right now the block just turns invisable, we need this button to do something else but idk what
                            luckyVisible = false;
                            window.location.reload();
                        }
                    }}></button>
                    <button className="ButtonHome">&#9731;</button>
                </div>
            </div>
        </>
    );
}

function App({ timeElapsed }) {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        getCurrentUser().then((data) => {
            setCurrentUser(data)
        });
    }, []);


    return (
        <>
            <Routes>
                <Route path="/" element={<Login user={currentUser} />} />
                <Route path="/login" element={<Login user={currentUser} setCurrentUser={setCurrentUser} />} />
                <Route path="/logout" element={<Logout setCurrentUser={setCurrentUser} />} />
                <Route path="/register" element={<Register user={currentUser} setCurrentUser={setCurrentUser} />} />
                <Route path="/game" element={<Game user={currentUser} timeElapsed={timeElapsed} />} />
            </Routes>
        </>
    )
}

export default App;   
