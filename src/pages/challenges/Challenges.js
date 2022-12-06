import Navigation from "../../components/navigation/Navigation";
import Loading from "../../components/loading/Loading";
import { useEffect, useState } from "react";
import { checkChallenge, getAllChallenges, getAllGoals } from "../../services/goal-service";
import { Navigate } from "react-router-dom";
import { getGameSession } from "../../services/game-service";

export function Challenges({ user, isLoading }) {
    const [challenges, setChallenges] = useState(undefined)
    const [dice, setDice] = useState(undefined)

    useEffect(() => {
        getAllChallenges(Date.now()).then((data) => {
            setChallenges(data)
        })
    }, [])

    useEffect(() => {
        if (challenges) {
            calculateDiceCount(challenges).then((data) => {
                setDice(data)
            })
        }
    }, [challenges])

    const calculateDiceCount = async (challenges) => {
        const gameSession = await getGameSession()
        const total = challenges.length
        let finished = 0
        const msInDay = 1000 * 60 * 60 * 24
        challenges.forEach((challenge) => {
            if (challenge.finished) {
                const entry = gameSession[0].entries.find((entry) => {
                    console.log(`
                        entry: ${entry.date} - ${Date.parse(entry.date)}
                        challenge: ${challenge.date} - ${Math.floor(
                            Date.parse(challenge.date) / msInDay
                        ) * msInDay} - ${Math.ceil(
                            Date.parse(challenge.date) / msInDay
                        ) * msInDay}
                    `)

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

        const diceConfigs = [
            [0, 20],
            [0, 12, 20],
            [0, 10, 16, 20],
            [0, 8, 14, 18, 20],
            [0, 6, 12, 16, 18, 20],
            [0, 6, 10, 14, 16, 18, 20],
        ]

        return diceConfigs[total -1][finished]
    }

    const checkChallengeHandler = async (goalId, challengeId, finished) => {
        await checkChallenge(goalId, challengeId, !finished)
        getAllChallenges(Date.now()).then((data) => {
            setChallenges(data)
        })
    }

    if (!user && !isLoading) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: "black", overflowY: "auto" }}>
                            {
                                challenges
                                    ? <>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <h1 className="is-size-3 has-text-white">Challenges ({dice ? dice : 0})</h1>
                                        </div>
                                        {challenges.map((challenge) => (
                                            <>
                                                <div className="container m-3">
                                                    <div className="box">
                                                        <article class="media">
                                                            <div class="media-content" style={{ overflow: "hidden" }}>
                                                                <div class="content is-flex is-justify-content-between is-align-items-center">
                                                                    <h2 className="has-text-centered m-0">{challenge.name}</h2>
                                                                    <div class="field">
                                                                        <div class="control">
                                                                            <input type="checkbox" style={{width: "50px", height: "50px"}} checked={challenge.finished} onClick={() => checkChallengeHandler(challenge.goal_id, challenge.id, challenge.finished)}/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </> : ""
                            }
                        </div>
                        <Navigation user={user} />
                    </>
            }
        </>
    );
}