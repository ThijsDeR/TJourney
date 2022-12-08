
import { Suspense, useState, useEffect } from "react";
import { Canvas, Image } from "@react-three/fiber";
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
import { GoalsIndex } from "./pages/goals/index/GoalsIndex.js";
import { GoalsCreate } from "./pages/goals/create/GoalsCreate.js";
import { Challenges } from "./pages/challenges/Challenges.js";
import FantasyBook from "./assets/FantasyBook/FantasyBook.js";
import {PositionPlayerClass} from "./components/PositionPlayerClass.js"

let luckyVisible = false;
let buttonPressedOn = false;
const positionPlayerClass = new PositionPlayerClass();

export function Game({ user, timeElapsed, isLoading }) {

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    let [cx,cy,cz] = positionPlayerClass.placeCharacter;
    return (
        isLoading ? <Loading /> :
            <>
                <Navigation />
                <div className="canvasContainer">
                    <div className="App">
                        <Canvas camera={{ position: [cx  - 3,cy + 2,cz] }} style={{ backgroundColor: "#17E7E7" }}>
                            <OrbitControls position={[cx,cy + 5,cz]}target={[cx + 1.5,cy + 1,cz]} minDistance={5} maxDistance={15}/>

                            {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
                            <Stars />
                            <ambientLight intensity={0.5} />
                            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
                            <Suspense fallback={null}>
                                <Physics>
                                    <mesh position={[1.5, -1, 0]} scale={1}>
                                        <FantasyBook timeElapsed={timeElapsed} luckyVisible={luckyVisible} buttonStepsPressedOn={buttonStepsPressedOn} positionPlayerClass={positionPlayerClass}/>
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
                            if (buttonPressedOn === false) {
                                buttonPressedOn = true;
                            } else {
                                buttonPressedOn = false;
                                // window.location.reload();
                            }
                        }}
                      >&#9816;</button>
                        <button id="diceButton" className="ButtonHome" onClick={() => {
                            if (luckyVisible === false) {
                                luckyVisible = true;
                            } else {
                                // TODO: Right now the block just turns invisable, we need this button to do something else but idk what
                                luckyVisible = false;
                            }
                        }}></button>
                        <button className="ButtonHome">&#9731;</button>
                    </div>
                </div>
                <Navigation user={user} />

            </>
    )
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

                <Route path="/" element={<Login user={currentUser} isLoading={isLoading}/>} />
                <Route path="/login" element={<Login user={currentUser} setCurrentUser={setCurrentUser} isLoading={isLoading} />} />
                <Route path="/logout" element={<Logout setCurrentUser={setCurrentUser} />} />
                <Route path="/register" element={<Register user={currentUser} setCurrentUser={setCurrentUser} isLoading={isLoading} />} />
                <Route path="/home" element={<Home user={user} setCurrentUser={setCurrentUser} isLoading={isLoading} />} />
                <Route path="/game" element={<Game user={user} isLoading={isLoading} timeElapsed={timeElapsed} />} />
                <Route path="/challenges" element={<Challenges user={user} isLoading={isLoading} />} />
                <Route path="/goals/index" element={<GoalsIndex user={user} isLoading={isLoading} />} />
                <Route path="/goals/create" element={<GoalsCreate user={user} isLoading={isLoading} />} />
            </Routes>
        </>
    )
}

export default App;   
