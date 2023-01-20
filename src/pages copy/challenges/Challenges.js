import Navigation from "../../components/navigation/Navigation";
import Loading from "../../components/loading/Loading";
import { useEffect, useState } from "react";
import { checkChallenge, getAllChallenges, getAllGoals } from "../../services/goal-service";
import { Link, Navigate } from "react-router-dom";
import { getGameSession } from "../../services/game-service";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import luckyBlock from '../../assets/lg1emBK.png'


export function Challenges({ user }) {
    const [challenges, setChallenges] = useState(undefined);
    const [diceEyesCount, setdiceEyesCount] = useState(undefined);
    const [goals, setGoals] = useState(undefined);
    const [isSelected, setIsSelected] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);


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
                setdiceEyesCount(data)
            })
        }
    }, [challenges])

    useEffect(() => {
        if (challenges && diceEyesCount !== undefined && goals) setIsLoading(false)
    }, [challenges, diceEyesCount, goals, setIsLoading])


    function selectDropDown(goal_id) {
        if (isSelected === goal_id) {
            setIsSelected(undefined);
        } else {
            setIsSelected(goal_id);
        }
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
                                                        <img src={luckyBlock} style={{ width: "50px" }} alt="Lucky block"/>
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
                            {challenges ? challenges.map((challenge, challengeIndex) => (
                                <>
                                    {isSelected === 0 ?
                                        <div key={challengeIndex.toString() + "-c"} className="columns is-mobile mx-5 my-1">
                                            <div className="column is-3 box has-background-black has-text-white my-1">Day: {challenge.id}</div>
                                            <div className="column is-9 box has-background-grey-dark has-text-white my-1">{challenge.name}
                                                <input type="checkbox" className="is-pulled-right" style={{ width: "25px", height: "25px" }} checked={challenge.finished} onClick={() => checkChallengeHandler(challenge.goal_id, challenge.id, challenge.finished)} />
                                            </div>
                                        </div>
                                        : ""
                                    }
                                </> 
                            )) : ''}

                            {goals ? goals.map((goal, goalIndex) =>
                                <>
                                    <div key={goalIndex.toString() + "-g"} className="is-size-4 has-text-white has-text-centered box has-background-grey mx-5 mt-5 mb-0" onClick={() => selectDropDown(goal._id)}>
                                        {goal.name}<FontAwesomeIcon className="is-pulled-right pr-5" icon={faCaretDown} />
                                    </div>
                                    {goal.challenges ? goal.challenges.map((challenge, challengeIndex) => (
                                        <>
                                            {isSelected === goal._id ?
                                                <div key={challengeIndex.toString() + "-gc"} className="columns is-mobile mx-5 my-1">
                                                    <div className="column is-3 box has-background-black has-text-white my-1">Day: {challenge.id}</div>
                                                    <div className="column is-9 box has-background-grey-dark has-text-white my-1">{challenge.name}
                                                        <input type="checkbox" className="is-pulled-right" style={{ width: "25px", height: "25px" }} checked={challenge.finished} onClick={() => checkChallengeHandler(goal._id, challenge.id, challenge.finished)} />
                                                    </div>
                                                </div>
                                                : ""
                                            }
                                        </>
                                    )) : ""}
                                </>
                            ) : ""}
                        </div>
                        <Navigation style={user.preferences.style} />
                    </>
            }
        </>
    );
}
