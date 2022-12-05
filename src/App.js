import React from "react";

// for routing
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import "./App.css";
import { Canvas } from "@react-three/fiber";
import Environments from "./assets/Environment/Environment";
import { Suspense } from "react";
import { Environment, PresentationControls, View, Stars, OrbitControls } from "@react-three/drei";
import { Physics, usePlane } from "@react-three/cannon";
import 'bulma/css/bulma.min.css';
import { useState, useEffect } from "react";
import { getCurrentUser, logout } from "./services/auth-service.js";
import Login from "./pages/login/Login";


// Screens
import Home from "./screens/HomeScreen";
import Journey from "./screens/JourneyScreen";
import Goals from "./screens/GoalScreen"
import ShowGoals from "./screens/ShowGoalScreen";
import ChallengeScreen from "./screens/ChallengeScreen";

function App3() {
    return (
        <>
            <Routes>
            {/* // Routes for the application */}
                <Route path="/" element={<Home />} />
                <Route path="/journey" element={<Journey />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/showGoals" element={<ShowGoals /> } />
                <Route path="/challenge" element={<ChallengeScreen />} />
                <Route path="/login" element={<Login />} />
            </Routes>

            // Navigation
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/journey">Journey</Link></li>
                    <li><Link to="/goals">Goal</Link></li>
                    <li><Link to="/showGoals">Goal show</Link></li>
                </ul>
            </nav>
        </>
    );
}
function App({logoutHandler}) {
  return (
    <div className="canvasContainer">
      <div className="App">
        <Canvas camera={{ position: [0, -0.2, 1.2] }}>
          <OrbitControls target={[0, -0.4, 0]}/>
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
      <div className="parent">
        <button className="ButtonHome">&#9816;</button>
        <button className="ButtonHome" onClick={() => {logoutHandler()}}>&#9728;</button>
        <button className="ButtonHome">&#9731;</button>
      </div>
    </div>
  );
}

function App2() {
    const [currentUser, setCurrentUser] = useState(undefined);

    console.log(currentUser);
  useEffect(() => {
    getCurrentUser().then((data) => {
        setCurrentUser(data)
    });
  }, []);

  const logoutHandler = async () => {
    await logout()
    setCurrentUser(undefined)
    window.location.reload()
  }

    return (
        <>
            {currentUser ? (
                <App logoutHandler={logoutHandler}/>
            ) : <Login />}
        </>
    )
}

export default App3;