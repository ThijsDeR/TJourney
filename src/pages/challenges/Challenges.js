import Navigation from "../../components/navigation/Navigation";
import Loading from "../../components/loading/Loading";
import { useEffect, useState } from "react";
import { checkChallenge, getAllChallenges, getAllGoals } from "../../services/goal-service";
import { Link, Navigate } from "react-router-dom";
import { getGameSession } from "../../services/game-service";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import luckyBlock from '../../assets/lg1emBK.png'


export function Challenges({ user, isLoading, setIsLoading }) {
    const [challenges, setChallenges] = useState(undefined);
    const [diceEyesCount, setdiceEyesCount] = useState(undefined);
    const [goals, setGoals] = useState(undefined);
    const [isSelected, setIsSelected] = useState(undefined);

    useEffect(() => {
        getAllChallenges(Date.now()).then((data) => {
            setChallenges(data)
        })

        getAllGoals().then((data) => {
            setGoals(data)
        })
    }, [])

    useEffect(() => {
        if (challenges) {
            calculatediceEyesCountCount(challenges).then((data) => {
                console.log(data)
                setdiceEyesCount(data)
            })
        }
    }, [challenges])

    useEffect(() => {
        console.log(challenges, diceEyesCount, goals)
        if (challenges && diceEyesCount !== undefined && goals) setIsLoading(false)
    }, [challenges, diceEyesCount, goals])


    function selectDropDown(goal_id) {
        if (isSelected === goal_id) {
            setIsSelected(undefined);
        } else {
            setIsSelected(goal_id);
        }
    }

    const calculatediceEyesCountCount = async (challenges) => {
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

    const checkChallengeHandler = async (goalId, challengeId, finished) => {
        await checkChallenge(goalId, challengeId, !finished)
        getAllChallenges(Date.now()).then((data) => {
            setChallenges(data);
        });
        getAllGoals().then((data) => {
            setGoals(data)
        });
    }

    if (user === undefined && !isLoading) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: "black", overflowY: "auto" }}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <h1 className="is-size-3 has-text-white">
                                    Challenges {
                                        diceEyesCount ? (
                                            <>
                                                <Link to="/game">
                                                    <div style={{ display: "flex", flexDirection: "column", position: "fixed", left: "10px", bottom: "100px", zIndex: 999, backgroundColor: (diceEyesCount !== 0 ? "rgba(0, 200, 200, 0.5)" : "rgba(200, 0, 0, 0.5)"), borderRadius: "25px", padding: "10px" }}>
                                                        <img src={luckyBlock} style={{ width: "50px" }} />
                                                        <p className="is-size-4" style={{ color: "white", textAlign: "center" }}>{diceEyesCount ? diceEyesCount : "0"}</p>
                                                    </div>
                                                </Link>
                                            </>
                                        ) : ""}
                                </h1>
                            </div>
                            <div className="has-text-centered">
                                <button className="button has-background-grey has-text-white mx-4"><a href="/goals/create" className="has-text-white">Make Goals</a></button>
                                <button className="button has-background-grey has-text-white mx-4"><a href="/goals/index" className="has-text-white">See Goals</a></button>
                            </div>

                            <div className="is-size-4 has-text-white has-text-centered box has-background-grey mx-5 mt-5 mb-0" onClick={() => selectDropDown(0)}>
                                Today's Challenges<FontAwesomeIcon className="is-pulled-right pr-5" icon={faCaretDown} />
                            </div>
                            {challenges.map((challenge) => (
                                <>
                                    {isSelected === 0 ?
                                        <div className="columns is-mobile mx-5 my-1">
                                            <div className="column is-3 box has-background-black has-text-white my-1">Day: {challenge.id}</div>
                                            <div className="column is-9 box has-background-grey-dark has-text-white my-1">{challenge.name}
                                                <input type="checkbox" className="is-pulled-right" style={{ width: "25px", height: "25px" }} checked={challenge.finished} onClick={() => checkChallengeHandler(challenge.goal_id, challenge.id, challenge.finished)} />
                                            </div>
                                        </div>
                                        : ""
                                    }
                                </>
                            ))}

                            {goals.map((goal) =>
                                <>
                                    <div className="is-size-4 has-text-white has-text-centered box has-background-grey mx-5 mt-5 mb-0" onClick={() => selectDropDown(goal._id)}>
                                        {goal.name}<FontAwesomeIcon className="is-pulled-right pr-5" icon={faCaretDown} />
                                    </div>
                                    {goal.challenges.map((challenge) => (
                                        <>
                                            {isSelected === goal._id ?
                                                <div className="columns is-mobile mx-5 my-1">
                                                    <div className="column is-3 box has-background-black has-text-white my-1">Day: {challenge.id}</div>
                                                    <div className="column is-9 box has-background-grey-dark has-text-white my-1">{challenge.name}
                                                        <input type="checkbox" className="is-pulled-right" style={{ width: "25px", height: "25px" }} checked={challenge.finished} onClick={() => checkChallengeHandler(goal._id, challenge.id, challenge.finished)} />
                                                    </div>
                                                </div>
                                                : ""
                                            }
                                        </>
                                    ))}
                                </>
                            )}
                            {/* Fucking thissa versie */}
                            {/* {
                                challenges
                                    ? <>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <h1 className="is-size-3 has-text-white">Challenges ({diceEyesCount ? diceEyesCount : 0})</h1>
                                        </div>
                                        {challenges.map((challenge) => (
                                            <>
                                                <div className="columns is-mobile mx-5 my-1">
                                                    <div className="column is-3 box has-background-black has-text-white my-1">Day: {challenge.id}</div>
                                                    <div className="column is-9 box has-background-grey-dark has-text-white my-1">{challenge.name}</div>

                                                </div>

                                                <div className="container m-3">
                                                    <div className="box">
                                                        <article class="media">
                                                            <div class="media-content" style={{ overflow: "hidden" }}>
                                                                <div class="content is-flex is-justify-content-between is-align-items-center">
                                                                    <h2 className="has-text-centered m-0">{challenge.name}</h2>
                                                                    <div class="field">
                                                                        <div class="control">
                                                                            <input type="checkbox" style={{ width: "50px", height: "50px" }} checked={challenge.finished} onClick={() => checkChallengeHandler(challenge.goal_id, challenge.id, challenge.finished)} />
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
                            } */}
                        </div>
                        <Navigation user={user} />
                    </>
            }
        </>
    );
}
