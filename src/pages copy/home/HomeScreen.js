import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation.js';
import { Link, Navigate } from "react-router-dom";
import "./homeStyles.css";
import Loading from '../../components/loading/Loading.js';
import { calculateLevel, updateLevel } from '../../services/level-service.js';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RankingBar from '../../components/ranking/RankingBar.js';

import { paddingPage, progressContainer, progress, rankingBarContainer, levelBubble, black } from '../../styling/StylingVariables.js';

function Home({ user }) {
    const [userLevel, setUserLevel] = useState(undefined)
    const [level, setLevel] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (level === undefined || userLevel === undefined) {
            setUserLevel(user.level.amount)
            setLevel(calculateLevel(user.level.amount))
            setIsLoading(false)
        }
    }, [level, userLevel])

    if (!isLoading) {
        if (user.tutorialFinished === undefined || user.tutorialFinished === false) {
            return <Navigate to="/tutorial" replace />;
        }
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0px", bottom: "0px", left: "0px", right: "0px" }}>
                            <section className="bg-image" style={{ height: "100%" }}>
                                <RankingBar user={user} level={level} />
                            </section>
                        </div >
                        <Navigation style={user.preferences.style} />
                    </>
            }
        </>
    );
}

export default Home;