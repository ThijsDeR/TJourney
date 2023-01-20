import '../../App.css'

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Stars, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import luckyBlock from '../../assets/lg1emBK.png'
import { getAllChallenges } from "../../services/goal-service.js";
import { calculateDiceEyesCount, getGameSession, setSteps } from "../../services/game-service.js";
import Loading from '../../components/loading/Loading';
import Navigation from '../../components/navigation/Navigation';
import Game from '../../scripts/game.js';
import FantasyBook from '../../scripts/fantasyBook';
import { calculateLevel } from '../../services/level-service';
import { getFriends } from '../../services/friends-service';
import Friend from '../../scripts/friend.js'
import Position from '../../scripts/position.js'
import Rotation from '../../scripts/rotation.js'

import RankingBar from '../../components/ranking/RankingBar';

const fantasyBook = new FantasyBook();
const game = new Game(fantasyBook);

function GameScreen({ user, timeElapsed, reloadUserHandler }) {
    const [diceEyesCount, setDiceEyesCount] = useState(undefined);
    const [throwAmount, setThrowAmount] = useState(undefined);
    const [level, setLevel] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true);

    const reloadData = () => {
        setLevel(calculateLevel(user.level.amount))
    }

    const getFriendsData = () => {
        getFriends().then((friends) => {
            // setFriends(friends)
            friends.forEach((friend) => {
                const gameFriend = game.friends.find((gameFriend) => gameFriend.userName === friend.user.username)

                if (gameFriend) gameFriend.placeOnTheBoard = friend.gameSession.steps;
                else {
                    const newLength = game.friends.push(new Friend(new Position(0, 0, 0), new Rotation(0, 0, 0), 0.5, 0, friend.user.username))
                    game.friends[newLength - 1].setPosition(friend.gameSession.steps, game.world.circles)
                }

            })

        })
    }

    useEffect(() => {
        setLevel(calculateLevel(user.level.amount))
        game.setPlayerCharacter(user.avatar)

        getAllChallenges(Date.now()).then((challenges) => {
            calculateDiceEyesCount(challenges).then((data) => {
                setDiceEyesCount(data)
            })
        })
        getGameSession().then((data) => {
            game.player.setPosition(data.steps, game.world.circles)
        })
        setIsLoading(false)
    }, [])

    useEffect(() => {
        reloadData()
    }, [user])

    game.update(timeElapsed)

    if (game.shouldUpdate) {
        game.shouldUpdate = false
        if (game.hasThrown) {
            setSteps(game.player.placeOnTheBoard)
        }
        reloadUserHandler().then(() => {
            reloadData()
        })
    }

    return (
        isLoading ? <Loading /> :
            <>
                <div style={{ position: "fixed", top: "0px", left: "0px", right: "0px", zIndex: 999 }}>
                    <RankingBar user={user} level={level} />
                </div >
                <div className="canvasContainer">
                    <div className="App">
                        <Canvas camera={{ position: [game.player.position.x - 3, game.player.position.y + 2, game.player.position.z] }} style={{ backgroundColor: "#17E7E7" }}>
                            <OrbitControls position={[game.player.position.x, game.player.position.y + 5, game.player.position.z]} target={[game.player.position.x + 1.5, game.player.position.y + 1, game.player.position.z]} maxPolarAngle={Math.PI / 1.9} minDistance={5} maxDistance={15} />

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
                    <div style={{ display: "flex", flexDirection: "column", position: "fixed", left: "10px", bottom: "100px", zIndex: 999, backgroundColor: (game.canThrow(diceEyesCount) ? "rgba(0, 0, 0, 0.5)" : "rgba(200, 0, 0, 0.5)"), borderRadius: "25px", padding: "10px", height: "100px" }}
                        onClick={() => {
                            if (game.canThrow(diceEyesCount) && game.player.dice.count === 0) game.throwDice(diceEyesCount)
                        }}
                    >
                        <img src={luckyBlock} style={{ width: "50px", height: "50px" }} alt="lucky block" />
                        <p className="is-size-4" style={{ color: "white", textAlign: "center" }}>{game.canThrow(diceEyesCount) ? diceEyesCount : "0"}</p>
                    </div>
                </div>
                <Navigation style={user.preferences.style} />

            </>
    )
}
export default GameScreen;