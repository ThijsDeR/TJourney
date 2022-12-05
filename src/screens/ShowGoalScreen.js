import React from 'react';
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList, } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { getGoals, editGoal } from "../services/goal-service";

function Goals() {
    const [challenge1, setChallenge1] = useState("");
    const [challenge2, setChallenge2] = useState("");
    const [challenge3, setChallenge3] = useState("");
    const challenges = [challenge1, challenge2, challenge3];

    const editGoalHandler = async (e) => {
        console.log(e);
        e.preventDefault();
        try {
            await editGoal(challenges).then(
                (data) => {
                    // navigate
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Navigation />
            <div style={{ position: "fixed", top: "100px", bottom: "100px", left: "0px", right: "0px" }}>

                <form onSubmit={editGoalHandler}>
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
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Goals;