import React, { useEffect, useState } from 'react';
import { Link, Navigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import 'bulma/css/bulma.min.css';
import { checkChallenge, getAllChallenges, getAllGoals } from '../../../services/goal-service';
import { calculateDiceEyesCount, getGameSession } from '../../../services/game-service';

import '../../challenges/challenges.css';

function ChallengesTutorial({ user, isLoading, screenPart, updateTutorialScreenPart, updateTutorialPosition }) {
    const [finishedChallenges, setFinishedChallenges] = useState(undefined)
    const [days, setDays] = useState(undefined);
    const [currentDay, setCurrentDay] = useState(undefined)

    const setChallenges = async (date) => {
        const challenges = await getAllChallenges(date);
        const finished = [];
        const unfinished = [];

        challenges.forEach((challenge) => {
            challenge.finished ? finished.push(challenge) : unfinished.push(challenge);
        })

        setFinishedChallenges(finished);
    }
    useEffect(() => {
        setChallenges(Date.now())

        const daysAround = 7
        const days = [];
        for (let i = daysAround; i > 0; i--) {
            days.push(new Date(Date.now() - (1000 * 3600 * 24 * i)))
        }

        for (let i = 0; i <= daysAround; i++) {
            days.push(new Date(Date.now() + (1000 * 3600 * 24 * i)))
        }

        setDays(days);
        setCurrentDay(daysAround)
    }, [])

    useEffect(() => {
        if (currentDay !== undefined && days !== undefined && days[currentDay]) setChallenges(days[currentDay].getTime());
    }, [currentDay])

    const setDayHandler = async (day) => {
        setCurrentDay(day)
    }

    if (user === undefined && !isLoading) {
        return <Navigate to="/login" replace />;
    }

    const green = "#61C688";

    // when you change this color, you will change the primary color of the whole page
    const primaryColor = green;
    const secondaryColor = "#323232";
    const tertiaryColor = "#505050";
    const paddingPage = "10px 20px"
    const marginFinishedChallenges = "3px 0px 3px 30px"

    const pageStyle = {
        top: "0px",
        bottom: "50px",
        left: "0px",
        right: "0px",
        backgroundColor: "#121212",
        color: "#F7F7F7",
        overflowY: "scroll",
        overflowX: "hidden",
    }

    const title = {
        fontSize: "18px",
        fontWeight: "bold",
        padding: "15px 0px 0px 25px",
    }

    const buttonStyle = {
        color: primaryColor,
        height: "35px",
    }

    const tileStyle = {
        backgroundColor: primaryColor,
        borderRadius: "5px",
        padding: "3px 10px",
        margin: "10px 0px",
        height: "70px",
        alignItems: 'center',
        justifyContent: 'center',
    }

    const containerLeftRight = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
    }

    const goalsContainer = {
        backgroundColor: secondaryColor,
        margin: "15px 0px 0px 0px",
        padding: paddingPage
    }

    const goalItem = {
        display: 'inline-block',
        margin: '10px 0px 10px 10px',
    }

    return (
        <>
            <div style={{ zIndex: "20", backgroundColor: "rgb(0, 0, 0, 0.5)", width: "100vw", height: "100vh", position: "absolute", left: "0px", top: "0px" }} onClick={() => updateTutorialScreenPart()} />

            <div style={{ zIndex: 30, width: "100%", position: "absolute" }} onClick={() => updateTutorialScreenPart()}>
                {screenPart === 0 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        Here are your goals and challenges
                    </div>
                }
                {screenPart === 1 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        This shows what day you are on
                    </div>
                }
                {screenPart === 2 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        This shows the challenges you need to complete today
                    </div>
                }
                {screenPart === 3 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        and which you have finished
                    </div>
                }
                {screenPart === 4 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        These are your goals
                    </div>
                }
                {screenPart > 4 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        Let's make a new one
                    </div>
                }
            </div>

            <div style={pageStyle}>
                <div onClick={() => { updateTutorialScreenPart() }} style={{ padding: paddingPage }}>
                    <h1 style={screenPart === 1 ?
                        { zIndex: 30, position: 'relative', ...title, ...{ textAlign: 'center' } }
                        :
                        { ...title, ...{ textAlign: 'center' } }}>
                        {currentDay !== undefined ? days[currentDay].toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }) : ""}</h1 >
                    <div id="daysScroll" style={{ textAlign: 'center', display: "flex", marginBottom: '30px', overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none", width: "100%" }}>
                        <div style={screenPart === 1 ?
                            { zIndex: 30, display: "flex", flex: "0 0 auto", gap: "10px" }
                            :
                            { display: "flex", flex: "0 0 auto", gap: "10px" }}>
                            {
                                days ? days.map((day, dayIndex) => (
                                    <div onClick={() => setDayHandler(dayIndex)}>
                                        <FontAwesomeIcon icon={faCircle} size='2x' color={dayIndex === currentDay ? primaryColor : "white"} />
                                    </div>
                                )) : ""
                            }
                        </div>
                    </div>

                    {/* Challenges */}
                    <div>
                        <h2 style={screenPart === 2 ?
                            { zIndex: 30, position: "relative", fontWeight: 'bold' }
                            :
                            { fontWeight: 'bold' }} >Challenges</h2>
                        <div style={screenPart === 2 ?
                            { zIndex: 30, position: "relative", ...tileStyle, ...containerLeftRight }
                            :
                            { ...tileStyle, ...containerLeftRight }}>
                            <div>Challenge for goal 'Drink more than 500mL water' on day 33</div>
                            <div>
                                <input type="checkbox" className="is-pulled-right" style={{ width: "25px", height: "25px" }} checked={false} />
                            </div>
                        </div>

                        <div style={screenPart === 3 ?
                            { zIndex: 30, position: "relative", ...tileStyle, ...{ backgroundColor: secondaryColor, height: "unset" } }
                            :
                            { ...tileStyle, ...{ backgroundColor: secondaryColor, height: "unset" } }}>
                            <h2 style={{ fontWeight: 'bold' }} >Finished</h2>
                            <hr style={{ borderTop: `2px solid ${tertiaryColor}`, margin: 'unset', backgroundColor: tertiaryColor }}></hr>
                            <div style={containerLeftRight}>
                                <div style={{ margin: marginFinishedChallenges }}> Challenge for goal 'Eat more than 1200 calories' on day 22 </div>
                                <div style={{ paddingTop: '5px' }}>
                                    <input type="checkbox" className="is-pulled-right" style={{ width: "25px", height: "25px" }} checked={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Goals */}
                <div style={screenPart === 4 ? { zIndex: 30, position: "relative" } : {}}>

                    <div style={goalsContainer} >
                        <div onClick={() => { updateTutorialScreenPart() }} style={containerLeftRight}>
                            <div><h2 style={{ fontWeight: 'bold' }} >Goals</h2></div>
                            <Link><div style={{ color: primaryColor }} >Edit</div></Link>
                        </div>

                        <div onClick={() => { updateTutorialScreenPart() }} style={{ ...tileStyle, ...{ backgroundColor: tertiaryColor, height: 'unset' } }}>
                            <div style={goalItem}>
                                <FontAwesomeIcon icon={faCircle} size='5x' />
                            </div>
                            <div style={goalItem}>
                                <div style={{ fontWeight: 'bold' }}>Eat more</div>
                                <div>12 days left</div>
                                <div style={{ fontWeight: 'lighter', fontSize: '13px' }}>Started on 19-12-2022</div>
                            </div>
                        </div>
                        <div onClick={() => { updateTutorialScreenPart() }} style={{ ...tileStyle, ...{ backgroundColor: tertiaryColor, height: 'unset' } }}>
                            <div style={goalItem}>
                                <FontAwesomeIcon icon={faCircle} size='5x' />
                            </div>
                            <div style={goalItem}>
                                <div style={{ fontWeight: 'bold' }}>Drink more</div>
                                <div>2 days left</div>
                                <div style={{ fontWeight: 'lighter', fontSize: '13px' }}>Started on 03-01-2023</div>
                            </div>
                        </div>
                        <Link to="#">
                            <div style={screenPart > 4 ? { zIndex: 30, position: "relative" } : {}} onClick={screenPart > 4 ? () => updateTutorialPosition() : () => {}}>
                                <div style={{ ...tileStyle, ...buttonStyle, ...{ backgroundColor: tertiaryColor } }}>
                                    Add new goal
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div >
            <div className="nav-bottom">
                <div className="nav-buttons is-flex" >
                    {user ?
                        <>
                            <Link to="#">A</Link>
                            <Link to="#">CH</Link>
                            <Link to="#">H</Link>
                            <Link to="#">J</Link>
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
    );
}

export default ChallengesTutorial;