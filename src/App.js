
import { Suspense, useState, useEffect } from "react";
import { moveLuckyblockToCenter, RandomCount, textAnimation, throwDiceAnimation } from './assets/Dice/Dice'
import { Canvas } from "@react-three/fiber";
import Environments from "./assets/Environment/Environment";
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


export let steps;
export let luckyMove = true;
export let luckyVisible = false;
let delay = 0;
let countAsked = false;

export function Game({ user }) {
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (luckyVisible === true) {
        delay++;
        if (luckyMove === true) {
            throwDiceAnimation()
        }
        if (delay >= 500) {
            luckyMove = false;
            moveLuckyblockToCenter(1, 0)
            if (countAsked === false && delay >= 600) {
                steps = RandomCount(30);
                textAnimation(180);
                countAsked = true;
            }
        } else if (delay > 20000) {
            luckyVisible = false;
            luckyMove = true;
            delay = 0;
        }
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
                                <mesh position={[1.5, -1, 0]} scale={0.0001}>
                                    <VulcanoIsland />
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

function App() {
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
                <Route path="/game" element={<Game user={currentUser} />} />
            </Routes>
        </>
    )
}

export default App;   