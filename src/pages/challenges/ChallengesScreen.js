import React, { useEffect, useState } from 'react';
import { Link, Navigate } from "react-router-dom";
// import { lol, selectTasks } from '../../components/streak/streak';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import Navigation from "../../components/navigation/Navigation";
import 'bulma/css/bulma.min.css';
import { checkChallenge, getAllChallenges, getAllGoals } from '../../services/goal-service';
import { getGameSession } from '../../services/game-service';
import Loading from '../../components/loading/Loading';
import { editStreak } from './../../services/auth-service';
import './challenges.css';

export function Challenges({ user, isLoading, setIsLoading }) {
    const [unfinishedChallenges, setUnfinishedChallenges] = useState(undefined);
    const [finishedChallenges, setFinishedChallenges] = useState(undefined)
    const [diceEyesCount, setdiceEyesCount] = useState(undefined);
    const [goals, setGoals] = useState(undefined);
    const [days, setDays] = useState(undefined);
    const [currentDay, setCurrentDay] = useState(undefined)


    const setChallenges = async (date) => {
        const challenges = await getAllChallenges(date);
        // selectTasks()
        const finished = [];
        const unfinished = [];

        challenges.forEach((challenge) => {
            challenge.finished ? finished.push(challenge) : unfinished.push(challenge);
        })
        setFinishedChallenges(finished);
        setUnfinishedChallenges(unfinished);
        console.log(localStorage.getItem('streakapplied'))
        // console.log(user.streak)

        if (!unfinished.length && !isLoading && (!localStorage.getItem('streakapplied') || localStorage.getItem('streakapplied') === null)) {
            console.log('het werkt')
            if (user.streak === undefined) {
                editStreak(1)
                localStorage.setItem('streakapplied', true);
            } else {
                console.log("Het werkt electric boogaloo");
                editStreak(user.streak + 1);
                localStorage.setItem('streakapplied', true);
            }

        }
    }
    const CheckstreakContinue = async (date) => {
        const challenges = await getAllChallenges(date);
        // selectTasks()
        const finished = [];
        const unfinished = [];

        challenges.forEach((challenge) => {
            challenge.finished ? finished.push(challenge) : unfinished.push(challenge);
        })



        if (unfinished.length && !isLoading && date < Date.now) {
            editStreak(0)
        }
    }

    useEffect(() => {
        CheckstreakContinue(new Date(Date.now() - (1000 * 3600 * 24 * 1)))
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
        if (finishedChallenges && unfinishedChallenges && diceEyesCount !== undefined && goals) setIsLoading(false)
    }, [finishedChallenges, unfinishedChallenges, diceEyesCount, goals, setIsLoading])

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

    const checkChallengeHandler = async (goalId, challengeId, finished) => {
        await checkChallenge(goalId, challengeId, !finished)
        setChallenges(days[currentDay].getTime())
        getAllGoals().then((data) => {
            setGoals(data)
        });

    }

    const setDayHandler = async (day) => {
        setCurrentDay(day)
    }

    if (user === undefined && !isLoading) {
        return <Navigate to="/login" replace />;
    }

    const paddingPage = "10px 20px"
    const marginFinishedChallenges = "3px 0px 3px 30px"

    const pageStyle = (style) => {
        return {
            position: "fixed",
            top: "0px",
            bottom: "50px",
            left: "0px",
            right: "0px",
            backgroundColor: style.backgroundColor,
            color: style.textColor,
            overflowY: "scroll",
            overflowX: "hidden",
        }
    }

    const title = (style) => {
        return {
            fontSize: "18px",
            fontWeight: "bold",
            padding: "15px 0px 0px 25px",
        }
    }

    const buttonStyle = (style) => {
        return {
            color: style.textColor,
            height: "35px",
        }
    }

    const tileStyle = (style) => {
        return {
            backgroundColor: style.primaryColor,
            borderRadius: "5px",
            padding: "3px 10px",
            margin: "10px 0px",
            height: "70px",
            alignItems: 'center',
            justifyContent: 'center',
        }
    }

    const containerLeftRight = (style) => {
        return {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
        }
    }

    const goalsContainer = (style) => {
        return {
            backgroundColor: style.secondaryColor,
            margin: "15px 0px 0px 0px",
            padding: paddingPage
        }
    }

    const goalItem = (style) => {
        return {
            display: 'inline-block',
            margin: '10px 0px 10px 10px',
        }
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={pageStyle(user.preferences.style)}>
                            <div style={{ padding: paddingPage }}>
                                <h1 style={{ ...title(user.preferences.style), ...{ textAlign: 'center' } }}>{currentDay !== undefined ? days[currentDay].toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }) : ""}</h1 >
                                {/* <div style={{ textAlign: 'center' }}> <FontAwesomeIcon icon={faCaretDown} size='2x' /> </div> */}
                                <div id="daysScroll" style={{ textAlign: 'center', display: "flex", marginBottom: '30px', overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none", width: "100%" }}>
                                    <div style={{ display: "flex", flex: "0 0 auto", gap: "10px" }}>
                                        {
                                            days ? days.map((day, dayIndex) => (
                                                <div onClick={() => setDayHandler(dayIndex)}>
                                                    <FontAwesomeIcon icon={faCircle} size='2x' color={dayIndex === currentDay ? user.preferences.style.primaryColor : "white"} />
                                                </div>
                                            )) : ""
                                        }
                                    </div>
                                </div>

                                {/* Challenges */}
                                <div>
                                    <h2 style={{ fontWeight: 'bold' }} >Challenges</h2>

                                    {unfinishedChallenges ? unfinishedChallenges.map((challenge, challengeIndex) => (
                                        <>
                                            <div style={{ ...tileStyle(user.preferences.style), ...containerLeftRight(user.preferences.style) }}>
                                                <div>{challenge.description}</div>
                                                <div>
                                                    <input type="checkbox" className="is-pulled-right" style={{ width: "25px", height: "25px" }} checked={challenge.finished} onClick={() => checkChallengeHandler(challenge.goal_id, challenge.id, challenge.finished)} />
                                                </div>
                                            </div>
                                        </>
                                    )) : ""}

                                    <div style={{ ...tileStyle(user.preferences.style), ...{ backgroundColor: user.preferences.style.secondaryColor, height: "unset" } }}>
                                        <h2 style={{ fontWeight: 'bold' }} >Finished</h2>
                                        <hr style={{ borderTop: `2px solid ${user.preferences.style.tertiaryColor}`, margin: 'unset', backgroundColor: user.preferences.style.tertiaryColor }}></hr>

                                        {finishedChallenges ? finishedChallenges.map((challenge, challengeIndex) => (
                                            <>
                                                {
                                                    challenge.finished ? <div style={containerLeftRight(user.preferences.style)}>
                                                        <div style={{ margin: marginFinishedChallenges }}> {challenge.description} </div>
                                                        <div style={{ paddingTop: '5px' }}>
                                                            <input type="checkbox" className="is-pulled-right" style={{ width: "25px", height: "25px" }} checked={challenge.finished} onClick={() => checkChallengeHandler(challenge.goal_id, challenge.id, challenge.finished)} />
                                                        </div>
                                                    </div> : ""
                                                }

                                                {/* {challengeIndex === challenges.length - 1 ? <>
                                                    <hr style={{ borderTop: `1px solid ${tertiaryColor}`, margin: marginFinishedChallenges, backgroundColor: tertiaryColor }}></hr>
                                                </> : ""} */}
                                            </>
                                        )) : ""}




                                    </div>
                                </div>
                            </div>

                            {/* Goals */}

                            <div style={goalsContainer(user.preferences.style)} >
                                <div style={containerLeftRight(user.preferences.style)}>
                                    <div><h2 style={{ fontWeight: 'bold' }} >Goals</h2></div>
                                    {/* TODO: link to edit goals page */}
                                    <Link><div style={{ color: user.preferences.style.primaryColor }} >Edit</div></Link>
                                </div>

                                {goals ? goals.map((goal, goalIndex) =>
                                    <>
                                        <div style={{ ...tileStyle(user.preferences.style), ...{ backgroundColor: user.preferences.style.tertiaryColor, height: 'unset' } }}>
                                            <div style={goalItem(user.preferences.style)}>
                                                <FontAwesomeIcon icon={faCircle} size='5x' />
                                            </div>
                                            <div style={goalItem(user.preferences.style)}>
                                                <div style={{ fontWeight: 'bold' }}>{goal.name}</div>
                                                <div>{Math.floor((Date.parse(goal.endDate) - Date.now()) / (1000 * 3600 * 24))} days left</div>
                                                <div style={{ fontWeight: 'lighter', fontSize: '13px' }}>Started on {new Date(Date.parse(goal.startDate)).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</div>
                                            </div>
                                        </div>
                                    </>
                                ) : ""}
                                <Link to="/goals/create">
                                    <div style={{ ...tileStyle(user.preferences.style), ...buttonStyle(user.preferences.style), ...{ backgroundColor: user.preferences.style.primaryColor } }}>
                                        Add new goal
                                    </div>
                                </Link>
                            </div>
                        </div >
                        <Navigation user={user} />
                        {/* <streaks></streaks> */}
                    </>
            }
        </>
    );
}