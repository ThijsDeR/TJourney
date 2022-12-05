
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

let luckyVisible = false;



export function Game({ user, timeElapsed }) {
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
        </>
    );
}

function App({timeElapsed}) {
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