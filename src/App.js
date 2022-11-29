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
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser().then((data) => {
            setCurrentUser(data)
            setIsLoading(false)
        });
    }, []);


    return (
        <>
            <Routes>
                <Route path="/" element={<Login user={currentUser} isLoading={isLoading} />} />
                <Route path="/login" element={<Login user={currentUser} isLoading={isLoading} setCurrentUser={setCurrentUser} />} />
                <Route path="/logout" element={<Logout setCurrentUser={setCurrentUser} isLoading={isLoading} />} />
                <Route path="/register" element={<Register user={currentUser} setCurrentUser={setCurrentUser} isLoading={isLoading} />} />
                <Route path="/home" element={<Home user={currentUser} setCurrentUser={setCurrentUser} isLoading={isLoading} />} />
                <Route path="/game" element={<Game user={currentUser} isLoading={isLoading} />} />
            </Routes>
        </>
    )
}

export default App;