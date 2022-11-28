import React from 'react';
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { goals } from "../services/goal-service"


function Goals() {

    const [goal, setGoal] = useState("");



    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await goals(goal).then(
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
                <form onSubmit={handleLogin}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <h1 className="is-size-1">Make Goal</h1>
                    </div>
                    <div style={{ padding: "20px" }}>
                        <div className="field">
                            <label className="label">Goal</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" placeholder="Drink water" onChange={(e) => setGoal(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                        </div>



                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">Submit</button>
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