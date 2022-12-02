import React from "react";



import "./App.css";
import { Canvas } from "@react-three/fiber";
import Environments from "./assets/Environment/Environment";
import { Suspense } from "react";
import { Environment, Stars, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import 'bulma/css/bulma.min.css';
import { useState, useEffect } from "react";
import { getCurrentUser, logout } from "./services/auth-service.js";
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

function Game({ user, isLoading }) {
    if (!user && !isLoading) {
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
                                <Canvas camera={{ position: [0, -0.2, 1.2] }}>
                                    <OrbitControls target={[0, -0.4, 0]} />
                                    {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
                                    <Stars />
                                    <ambientLight intensity={0.5} />
                                    {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
                                    <Suspense fallback={null}>
                                        <Physics>
                                            <mesh position={[1.5, -1, 0]} scale={1}>
                                                <Environments />
                                            </mesh>
                                        </Physics>
                                    </Suspense>
                                    <Environment preset="sunset" />
                                    {/* </PresentationControls> */}
                                </Canvas>
                            </div>
                            <div className="progress">
                                <div className="progress-value"><h3 className="level">Level 50</h3></div>
                            </div>
                        </div>
                        <Navigation user={user} />

                    </>
            }
        </>
    );
}

function App() {
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
                <Route path="/" element={<Login user={user} isLoading={isLoading} />} />
                <Route path="/login" element={<Login user={user} isLoading={isLoading} setCurrentUser={setCurrentUser} />} />
                <Route path="/logout" element={<Logout setCurrentUser={setCurrentUser} isLoading={isLoading} />} />
                <Route path="/register" element={<Register user={user} setCurrentUser={setCurrentUser} isLoading={isLoading} />} />
                <Route path="/home" element={<Home user={user} setCurrentUser={setCurrentUser} isLoading={isLoading} />} />
                <Route path="/game" element={<Game user={user} isLoading={isLoading} />} />
            </Routes>
        </>
    )
}

export default App;