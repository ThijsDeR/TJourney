import React, { useEffect, useState } from 'react';
import { Link, Navigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faMap, faHome, faListCheck, faUserGear, faUsers } from '@fortawesome/free-solid-svg-icons'

import 'bulma/css/bulma.min.css';
import { checkChallenge, getAllChallenges, getAllGoals } from '../../../services/goal-service';
import { getGameSession } from '../../../services/game-service';

import '../../challenges/challenges.css';

function ChallengesTutorial({ user, isLoading, screenPart, updateTutorialScreenPart, updateTutorialPosition }) {
    const [unfinishedChallenges, setUnfinishedChallenges] = useState(undefined);
    const [finishedChallenges, setFinishedChallenges] = useState(undefined)
    const [diceEyesCount, setdiceEyesCount] = useState(undefined);
    const [goals, setGoals] = useState(undefined);
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
        setUnfinishedChallenges(unfinished);
    }
    useEffect(() => {
        setChallenges(Date.now())

        getAllGoals().then((data) => {
            setGoals(data)
        })

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
        if (finishedChallenges) {
            calculatediceEyesCountCount(finishedChallenges).then((data) => {
                setdiceEyesCount(data)
            })
        }
    }, [finishedChallenges])

    useEffect(() => {
        if (currentDay !== undefined && days !== undefined && days[currentDay]) setChallenges(days[currentDay].getTime());
    }, [currentDay])

    const calculatediceEyesCountCount = async (challenges) => {
        const gameSession = await getGameSession()
        const total = challenges.length
        let finished = 0
        const msInDay = 1000 * 60 * 60 * 24
        challenges.forEach((challenge) => {
            const entry = gameSession.entries.find((entry) => {
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
                            <div style={screenPart > 4 ? { zIndex: 30, position: "relative" } : {}} onClick={screenPart > 4 ? () => updateTutorialPosition() : () => { }}>
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
                            <Link to=""><FontAwesomeIcon icon={faUserGear} /></Link>
                            <Link to="" className="selected"><FontAwesomeIcon icon={faListCheck} /></Link>
                            <Link to=""><FontAwesomeIcon icon={faHome} /></Link>
                            <Link to=""><FontAwesomeIcon icon={faMap} /></Link>
                            <Link to=""><FontAwesomeIcon icon={faUsers} /></Link>
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