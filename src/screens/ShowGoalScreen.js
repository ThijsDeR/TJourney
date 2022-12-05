import React from 'react';
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList, } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { getGoals, editGoal } from "../services/goal-service";

function Goals() {
    const [challenge1, setChallenge1] = useState("");
    const [challenge2, setChallenge2] = useState("");
    const [challenge3, setChallenge3] = useState("");
    const challenges = [challenge1, challenge2, challenge3];
    const [goals, setGoals] = useState([]);
    // Temp workaround
    const [update, setUpdate] = useState(0);

    const editGoalHandler = async (e, object, objectIndex, i) => {
        // e.preventDefault();

        goals[objectIndex].challenges.finished[i] = !object.challenges.finished[i];
        console.log("click");

        // Temp workaround
        setUpdate(update + 1);

        // try {
        //     await editGoal(challenges, "test", object).then(
        //         (data) => {
        //             // navigate
        //             window.location.reload();
        //         },
        //         (error) => {
        //             console.log(error);
        //         }
        //     );
        // } catch (err) {
        //     console.log(err);
        // }
    };

    useEffect(() => {
        getGoals().then((data) => {
            setGoals(data);
        })
    }, [])

    return (
        <>
            <Navigation />
            <div style={{ position: "fixed", top: "100px", bottom: "100px", left: "0px", right: "0px" }}>

                <div className="mx-5 mt-3">
                    {goals.map((object, i) => (
                        <>
                            <div className="box">{object.goal.name}
                                {object.challenges.challenge !== null ?
                                    <div>
                                        <div>
                                            Challenge: {object.challenges.challenge[0]}
                                            <FontAwesomeIcon className="is-pulled-right" icon={object.challenges.finished[0] ? faSquareCheck : faSquare} onClick={(e) => editGoalHandler(e, object, i, 0)} />
                                        </div>

                                        <div>
                                            Challenge: {object.challenges.challenge[1]}
                                            <FontAwesomeIcon className="is-pulled-right" icon={object.challenges.finished[1] ? faSquareCheck : faSquare} onClick={(e) => editGoalHandler(e, object, i, 1)} />
                                        </div>

                                        <div>
                                            Challenge: {object.challenges.challenge[2]}
                                            <FontAwesomeIcon className="is-pulled-right" icon={object.challenges.finished[2] ? faSquareCheck : faSquare} onClick={(e) => editGoalHandler(e, object, i, 2)} />
                                        </div>
                                    </div>
                                    :
                                    ""
                                }
                            </div>
                        </>
                    ))}
                </div>

                {/* Probably no longer necessary */}
                {/* <form onSubmit={editGoalHandler}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <h1 className="is-size-1">Edit Goal</h1>
                    </div>
                    <h2 className="has-text-centered">Backend stuff, this will not be frontend</h2>
                    <div style={{ padding: "20px" }}>
                        <div className="field">
                            <label className="label">Your Challenges</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Drink 300ml water" onChange={(e) => setChallenge1(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faRectangleList} />
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Drink 300ml water" onChange={(e) => setChallenge2(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faRectangleList} />
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="Drink 300ml water" onChange={(e) => setChallenge3(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faRectangleList} />
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button type="submit" className="button is-link">Make</button>
                            </div>
                            <div className="control">
                                <button className="button is-link is-light">Cancel</button>
                            </div>
                        </div>
                    </div>
                </form> */}
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default Goals;