
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
// import Challenges from "./pages/challenges/ChallengesScreen.js";
import { GoalsIndex } from "./pages/goals/index/GoalsIndex.js";
import { GoalsCreate } from "./pages/goals/create/GoalsCreate.js";
import { Challenges } from "./pages/challenges/Challenges.js";
import FantasyBook from "./assets/FantasyBook/FantasyBook.js";
import { PositionPlayerClass } from "./components/PositionPlayerClass.js"

import luckyBlock from './assets/lg1emBK.png'
import { getAllChallenges, getAllGoals } from "./services/goal-service.js";
import { getGameSession } from "./services/game-service.js";
import { DiceClass } from "./assets/Dice/DiceClass.js";

const positionPlayerClass = new PositionPlayerClass();

export function Game({ user, timeElapsed, isLoading, setIsLoading }) {
    const [challenges, setChallenges] = useState(undefined);
    const [diceEyesCount, setDiceEyesCount] = useState(undefined);
    const [luckyVisible, setLuckyVisible] = useState(false)

    useEffect(() => {
        getAllChallenges(Date.now()).then((data) => {
            setChallenges(data)
        })
    }, [])

    useEffect(() => {
        if (challenges) {
            calculateDiceEyesCount(challenges).then((data) => {
                setDiceEyesCount(data)
            })
        }
    }, [challenges])

    useEffect(() => {
        if (challenges && diceEyesCount !== undefined) setIsLoading(false)
    }, [challenges, diceEyesCount])


    const calculateDiceEyesCount = async (challenges) => {
        const gameSession = await getGameSession()
        const total = challenges.length
        let finished = 0
        const msInDay = 1000 * 60 * 60 * 24
        challenges.forEach((challenge) => {
            if (challenge.finished) {
                const entry = gameSession[0].entries.find((entry) => {

                    return Date.parse(entry.date)
                        >= (
                            Math.floor(
                                Date.parse(challenge.date) / msInDay
                            ) * msInDay
                        )
                        &&
                        Date.parse(entry.date)
                        <= (
                            Math.ceil(
                                Date.parse(challenge.date) / msInDay
                            ) * msInDay
                        )
                })
                if (!entry) {
                    finished++
                }
            }
        })

        const diceEyesCountConfigs = [
            [0, 20],
            [0, 12, 20],
            [0, 10, 16, 20],
            [0, 8, 14, 18, 20],
            [0, 6, 12, 16, 18, 20],
            [0, 6, 10, 14, 16, 18, 20],
        ]

        return diceEyesCountConfigs[Math.max(0, total - 1)][finished]
    }
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    let [cx, cy, cz] = positionPlayerClass.placeCharacter;

    return (
        isLoading ? <Loading /> :
            <>
                <div className="canvasContainer">
                    <div className="App">
                        <Canvas camera={{ position: [cx - 3, cy + 2, cz] }} style={{ backgroundColor: "#17E7E7" }}>
                            <OrbitControls position={[cx, cy + 5, cz]} target={[cx + 1.5, cy + 1, cz]} maxPolarAngle={Math.PI / 1.9} minDistance={5} maxDistance={15} />

                            {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
                            <Stars />
                            <ambientLight intensity={0.5} />
                            {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
                            <Suspense fallback={null}>
                                <Physics>
                                    <mesh position={[1.5, -1, 0]} scale={1}>
                                        <FantasyBook timeElapsed={timeElapsed} luckyVisible={luckyVisible} setLuckyVisible={setLuckyVisible} positionPlayerClass={positionPlayerClass} diceEyesCount={diceEyesCount} />
                                    </mesh>
                                </Physics>
                            </Suspense>
                            <Environment preset="sunset" />

                            {/* </PresentationControls> */}
                        </Canvas>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", position: "fixed", left: "10px", bottom: "100px", zIndex: 999, backgroundColor: (diceEyesCount !== 0 ? "rgba(0, 0, 0, 0.5)" : "rgba(200, 0, 0, 0.5)"), borderRadius: "25px", padding: "10px" }}
                        onClick={() => {
                            if (diceEyesCount !== 0) setLuckyVisible(true)
                        }}
                    >
                        <img src={luckyBlock} style={{ width: "50px" }} />
                        <p className="is-size-4" style={{ color: "white", textAlign: "center" }}>{diceEyesCount ? diceEyesCount : "0"}</p>
                    </div>
                </div>
                <Navigation user={user} />

            </>
    )
}

function App({ timeElapsed }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser().then((data) => {
            setUser(data)
        });
    }, [currentUser]);


    return (
        <>
            <Routes>
                <Route path="/" element={<Login user={currentUser} setCurrentUser={setCurrentUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/login" element={<Login user={currentUser} setCurrentUser={setCurrentUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/logout" element={<Logout setCurrentUser={setCurrentUser} setIsLoading={setIsLoading}/>} />
                <Route path="/register" element={<Register user={currentUser} setCurrentUser={setCurrentUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/home" element={<Home user={user} setCurrentUser={setCurrentUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/game" element={<Game user={user} isLoading={isLoading} timeElapsed={timeElapsed} setIsLoading={setIsLoading} />} />
                <Route path="/challenges" element={<Challenges user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/goals/index" element={<GoalsIndex user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/goals/create" element={<GoalsCreate user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
            </Routes>
        </>
    )
}

export default App;   
