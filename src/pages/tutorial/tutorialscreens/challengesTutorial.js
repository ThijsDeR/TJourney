import "../../../components/navigation/navigation.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import luckyBlock from "../../../assets/lg1emBK.png"

const ChallengesTutorial = ({ user, updateTutorialPosition, screenPart, updateTutorialScreenPart }) => {
    const [challenges, setChallenges] = useState(undefined);
    const [diceEyesCount, setdiceEyesCount] = useState(undefined);
    const [goals, setGoals] = useState(undefined);
    const [isSelected, setIsSelected] = useState(undefined);

    function selectDropDown(goal_id) {
        if (isSelected === goal_id) {
            setIsSelected(undefined);
        } else {
            setIsSelected(goal_id);
        }
    }

    return (
        <>
            <div style={{ zIndex: "20", backgroundColor: "rgb(0, 0, 0, 0.5)", width: "100vw", height: "100vh", position: "absolute", left: "0px", top: "0px" }} onClick={() => updateTutorialScreenPart()} />
            {screenPart === 0 &&
                <div className="modal-content has-text-white is-size-4 has-text-centered" style={{ position: 'absolute', top: "5vh", zIndex: 30 }}>
                    This is the Challenges screen
                </div>
            }
            {screenPart >= 1 &&
                <div className=" has-text-white is-size-4 has-text-centered" style={{ position: 'absolute', top: "5vh", zIndex: 30 }}>
                    Challenges is still being redone so let's go to journey
                </div>
            }

            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1 className="is-size-3 has-text-white">
                    Challenges {
                        diceEyesCount ? (
                            <>
                                <Link to="/game">
                                    <div style={{ display: "flex", flexDirection: "column", position: "fixed", left: "10px", bottom: "100px", zIndex: 999, backgroundColor: (diceEyesCount !== 0 ? "rgba(0, 200, 200, 0.5)" : "rgba(200, 0, 0, 0.5)"), borderRadius: "25px", padding: "10px" }}>
                                        <img src={luckyBlock} style={{ width: "50px" }} alt="Lucky block" />
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
                                <input type="checkbox" className="is-pulled-right" style={{ width: "25px", height: "25px" }} checked={challenge.finished} />
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
                                        <input type="checkbox" className="is-pulled-right" style={{ width: "25px", height: "25px" }} checked={challenge.finished} />
                                    </div>
                                </div>
                                : ""
                            }
                        </>
                    )) : ""}
                </>
            ) : ""}

            <div className="nav-bottom" style={screenPart >= 1 ? { zIndex: "30" } : {}}>
                <div className="nav-buttons is-flex" >
                    {user ?
                        <>
                            <Link to="#">L</Link>
                            <Link to="#">CH</Link>
                            <Link to="#">H</Link>
                            <Link to="#" onClick={screenPart >= 1 ? () => updateTutorialPosition() : ""}>J</Link>
                            <Link>Co</Link>
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

export default ChallengesTutorial;