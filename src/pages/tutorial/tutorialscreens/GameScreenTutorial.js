import '../../../App.css'
import "../../../components/navigation/navigation.css";
import { Link } from "react-router-dom";


import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Stars, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import luckyBlock from '../../../assets/lg1emBK.png'
import { getAllChallenges } from "../../../services/goal-service.js";
import { getGameSession, setSteps } from "../../../services/game-service.js";
import { Navigate } from 'react-router-dom';
import Loading from '../../../components/loading/Loading';
import Navigation from '../../../components/navigation/Navigation';
import Game from '../../../scripts/game.js';
import FantasyBook from '../../../scripts/fantasyBook';
import { calculateLevel } from '../../../services/level-service';
import { getCurrentUser } from '../../../services/auth-service';
import Friend from '../../../scripts/friend';
import Position from '../../../scripts/position';
import Rotation from '../../../scripts/rotation';
import { getFriends } from '../../../services/friends-service.js';

const fantasyBook = new FantasyBook();
const game = new Game(fantasyBook);

function GameScreen({ user, setUser, timeElapsed, isLoading, setIsLoading, updateTutorialScreenPart, screenPart, updateTutorialPosition }) {
    const [challenges, setChallenges] = useState(undefined);
    const [diceEyesCount, setDiceEyesCount] = useState(undefined);
    const [userLevel, setUserLevel] = useState(undefined)
    const [level, setLevel] = useState(undefined)
    const [gameSession, setGameSesion] = useState(undefined)
    const [friends, setFriends] = useState(undefined)

    const reloadData = () => {
        getCurrentUser().then((user) => {
            setUser(user)
            setUserLevel(user.level.amount)
            setLevel(calculateLevel(user.level.amount))
        })
    }

    const getFriendsData = () => {
        getFriends().then((friends) => {
            setFriends(friends)
            friends.forEach((friend) => {
                console.log(friends, game.friends)
                const gameFriend = game.friends.find((gameFriend) => gameFriend.userName === friend.user.username)

                console.log(gameFriend)

                if (gameFriend) gameFriend.placeOnTheBoard = friend.gameSession.steps;
                else {
                    const newLength = game.friends.push(new Friend(new Position(0, 0, 0), new Rotation(0, 0, 0), 0.5, 0, friend.user.username))
                    game.friends[newLength - 1].setPosition(friend.gameSession.steps, game.world.circles)
                }

            })

        })
    }

    useEffect(() => {
        if (user && !userLevel) {
            setUserLevel(user.level.amount)
            setLevel(calculateLevel(user.level.amount))
        }
    }, [user, userLevel])

    useEffect(() => {
        if (user) {
            getFriendsData()
        }
    }, [user])

    useEffect(() => {
        if (userLevel) setLevel(calculateLevel(userLevel))
    }, [userLevel])

    useEffect(() => {
        getAllChallenges(Date.now()).then((data) => {
            setChallenges(data)
        })
        getGameSession().then((data) => {
            setGameSesion(data)
            game.lastPlaceOnBoard = data.steps
            game.player.setPosition(data.steps, game.world.circles)
        })
    }, [])

    // useEffect(() => {
    //     if (challenges) {
    //         calculateDiceEyesCount(challenges).then((data) => {
    //             setDiceEyesCount(data)
    //         })
    //     }
    // }, [challenges])

    useEffect(() => {
        if (challenges && diceEyesCount !== undefined && userLevel !== undefined && gameSession !== undefined) setIsLoading(false)
    }, [challenges, diceEyesCount, gameSession, setIsLoading, userLevel])

    // const calculateDiceEyesCount = async (challenges) => {
    //     const gameSession = await getGameSession()
    //     const total = challenges.length
    //     let finished = 0
    //     const msInDay = 1000 * 60 * 60 * 24
    //     challenges.forEach((challenge) => {
    //         if (challenge.finished) {
    //             const entry = gameSession.entries.find((entry) => {

    //                 return Date.parse(entry.date)
    //                     >= (
    //                         Math.floor(
    //                             Date.parse(challenge.date) / msInDay
    //                         ) * msInDay
    //                     )
    //                     &&
    //                     Date.parse(entry.date)
    //                     <= (
    //                         Math.ceil(
    //                             Date.parse(challenge.date) / msInDay
    //                         ) * msInDay
    //                     )
    //             })
    //             if (!entry) {
    //                 finished++
    //             }
    //         }
    //     })

    //     const diceEyesCountConfigs = [
    //         [0, 20],
    //         [0, 12, 20],
    //         [0, 10, 16, 20],
    //         [0, 8, 14, 18, 20],
    //         [0, 6, 12, 16, 18, 20],
    //         [0, 6, 10, 14, 16, 18, 20],
    //     ]

    //     return diceEyesCountConfigs[Math.max(0, total - 1)][finished]
    // }

    // if (user === undefined && !isLoading) {
    //     return <Navigate to="/login" replace />;
    // }

    // game.update(timeElapsed)

    // if (game.shouldUpdate) {
    //     game.shouldUpdate = false
    //     getFriendsData()
    //     setSteps(game.player.placeOnTheBoard)
    //     reloadData()
    // }

    return (
        <>
            {(screenPart !== 1 && !(screenPart > 6)) &&
                <div style={{ zIndex: "1000", backgroundColor: "rgb(0, 0, 0, 0.5)", width: "100vw", height: "100vh", position: "absolute", left: "0px", top: "0px" }} onClick={() => updateTutorialScreenPart()} />
            }
            <div style={{ zIndex: 1010, width: "100%", position: "absolute", }}>
                {screenPart === 0 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "15vh", position: "relative" }}>
                        This is your journey
                    </div>
                }
                {screenPart === 1 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "15vh", position: "relative" }} onClick={() => updateTutorialScreenPart()}>
                        Move around for a bit and tap here when you're ready to move on
                    </div>
                }
                {screenPart === 2 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "15vh", position: "relative" }} onClick={() => updateTutorialScreenPart()}>
                        Your friends will also show on this board
                    </div>
                }
                {screenPart === 3 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "70vh", left: "-20vw", position: "relative" }}>
                        This is your dice
                    </div>
                }
                {screenPart === 4 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "65vh", left: "-7vw", position: "relative" }}>
                        You gain a dice by completing challenges
                    </div>
                }
                {screenPart === 5 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "65vh", left: "-7vw", position: "relative" }}>
                        You can throw it and go forward and gain exp
                    </div>
                }
                {screenPart === 6 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "15vh", position: "relative" }}>
                        Go to community when you're ready to continue
                    </div>
                }
            </div>


            <div style={{ position: "fixed", top: "0px", left: "0px", right: "0px", zIndex: 999 }}>
                <div className="is-flex is-justify-content-center">
                    <h2 className="is-size-3 has-text-weight-bold">{user.username} ({level ? `${level.level} (${level.xp} / ${level.neededXP})` : ""} )</h2>
                </div>
            </div >
            <div className="canvasContainer">
                <div className="App">
                    <Canvas camera={{ position: [game.player.position.x - 3, game.player.position.y + 2, game.player.position.z] }} style={{ backgroundColor: "#17E7E7" }}>
                        <OrbitControls position={[game.player.position.x, game.player.position.y + 5, game.player.position.z]} target={[game.player.position.x + 1.5, game.player.position.y + 1, game.player.position.z]} /* maxPolarAngle={Math.PI / 1.9} minDistance={5} maxDistance={15} */ />

                        {/* <PresentationControls global zoom={4} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]}> */}
                        <Stars />
                        <ambientLight intensity={0.5} />
                        {/* <spotLight position={[10, 15, 10]} angle={0.3} /> */}
                        <Suspense fallback={null}>
                            <Physics>
                                <mesh position={[1.5, -1, 0]} scale={1}>
                                    {game.getWorldElement(timeElapsed)}
                                </mesh>
                            </Physics>
                        </Suspense>
                        <Environment preset="sunset" />
                        {/* </PresentationControls> */}
                    </Canvas>
                </div>
                <div style={screenPart >= 3 && screenPart < 6 ?
                    { zIndex: 1010, display: "flex", flexDirection: "column", position: "fixed", left: "10px", bottom: "100px", backgroundColor: (diceEyesCount !== 0 ? "rgba(0, 0, 0, 0.5)" : "rgba(200, 0, 0, 0.5)"), borderRadius: "25px", padding: "10px" }
                    :
                    { display: "flex", flexDirection: "column", position: "fixed", left: "10px", bottom: "100px", zIndex: 999, backgroundColor: (diceEyesCount !== 0 ? "rgba(0, 0, 0, 0.5)" : "rgba(200, 0, 0, 0.5)"), borderRadius: "25px", padding: "10px" }}
                    onClick={() => {
                        if (diceEyesCount !== 0 && game.player.dice.count === 0) game.throwDice(diceEyesCount)
                    }}
                >
                    <img src={luckyBlock} style={{ width: "50px" }} alt="lucky block" />
                    <p className="is-size-4" style={{ color: "white", textAlign: "center" }}>{diceEyesCount ? diceEyesCount : "0"}</p>
                </div>
            </div>


            <div className="nav-bottom" style={screenPart > 6 ? { zIndex: "30" } : {}}>
                <div className="nav-buttons is-flex" >
                    {user ?
                        <>
                            <Link to="#">L</Link>
                            <Link to="#">CH</Link>
                            <Link to="#">H</Link>
                            <Link to="#" >J</Link>
                            <Link onClick={screenPart > 6 ? () => updateTutorialPosition() : ""}>Co</Link>
                        </> :
                        <>
                            <Link to="#">Login</Link>
                            <Link to="#">Sign Up</Link>
                        </>
                    }
                </div>
            </div>

        </>
    )
}
export default GameScreen;