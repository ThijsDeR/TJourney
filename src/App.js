
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
import Home from "./pages/home/HomeScreen.js";
import Loading from "./components/loading/Loading";
import Challenges from "./pages/challenges/ChallengesScreen.js";

import VulcanoIsland from "./assets/vulcanoIsland/Vulcano.js";
import FantasyBook from "./assets/FantasyBook/FantasyBook.js";

let luckyVisible = false;

export function Game({ user, timeElapsed, isLoading }) {
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0", backgroundColor: "rgba(0, 0, 0, 0.9)", zIndex: "100" }}>
                            <div className="is-flex is-justify-content-center">
                                <h2 className="has-text-white is-size-3">hoi</h2>
                            </div>
                        </div>
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
                                                <FantasyBook timeElapsed={timeElapsed} luckyVisible={luckyVisible} />
                                            </mesh>
                                        </Physics>
                                    </Suspense>
                                    <Environment preset="sunset" />
                                    {/* </PresentationControls> */}
                                </Canvas>
                            </div>
                            <div className="parent">
                                <button className="ButtonHome">&#9816;</button>
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
                        <Navigation user={user} />

                    </>
            }
        </>
    );
}

function App({ timeElapsed }) {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [user, setUser] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser().then((data) => {
            setUser(data)
            setIsLoading(false)
        });
    }, [currentUser]);


    return (
        <>
            <Routes>

                <Route path="/" element={<Login user={currentUser} />} />
                <Route path="/login" element={<Login user={currentUser} setCurrentUser={setCurrentUser} />} />
                <Route path="/logout" element={<Logout setCurrentUser={setCurrentUser} />} />
                <Route path="/register" element={<Register user={currentUser} setCurrentUser={setCurrentUser} />} />
                <Route path="/game" element={<Game user={currentUser} timeElapsed={timeElapsed} />} />
                <Route path="/challenges" element={<Challenges user={currentUser} />} />
                <Route path="/home" element={<Home user={user} setCurrentUser={setCurrentUser} isLoading={isLoading} />} />
                <Route path="/game" element={<Game user={user} isLoading={isLoading} timeElapsed={timeElapsed} />} />
            </Routes>
        </>
    )
}

// export function getSteps() {
//     return steps;
// }

// export function setSteps(_steps) {
//     steps = _steps;
// }

// export function getLuckyMove() {
//     return luckyMove;
// }

// export function setLuckyMove(_luckyMove) {
//     luckyMove = _luckyMove;
// }

// export function getLuckyVisible() {
//     return luckyVisible;
// }

// export function setLuckyVisible(_luckyVisible) {
//     luckyVisible = _luckyVisible;
// }
export default App;