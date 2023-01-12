import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation.js';
import { Link, Navigate } from "react-router-dom";
import "./homeStyles.css";
import Loading from '../../components/loading/Loading.js';
import { calculateLevel, updateLevel } from '../../services/level-service.js';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home({ user, setCurrentUser, isLoading, setIsLoading }) {
    const [userLevel, setUserLevel] = useState(undefined)
    const [level, setLevel] = useState(undefined)

    useEffect(() => {
        if (user && !userLevel) {
            setUserLevel(user.level.amount)
            setLevel(calculateLevel(user.level.amount))
        }
    }, [user, userLevel])


    useEffect(() => {
        if (userLevel) setLevel(calculateLevel(userLevel))
    }, [userLevel])

    useEffect(() => {
        if (user && userLevel !== undefined) setIsLoading(false)
    }, [user, userLevel, setIsLoading])

    if (user === undefined && !isLoading) {
        return <Navigate to="/login" replace />;
    }

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
                                <div style={{ display: "grid", gap: "5%", gridTemplateColumns: "10% 85%" }}>
                                    <Link to="/account" style={{ color: "black", width: "100%", height: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }}><FontAwesomeIcon icon={faUser} style={{ marginLeft: "10%", width: "80%", height: "80%" }} /></Link>
                                    <h2 className="is-size-3 has-text-weight-bold">{user ? user.username : ""} ({level ? `${level.level} (${level.xp} / ${level.neededXP})` : ""} )</h2>
                                </div>
                            </section>
                        </div >
                        <Navigation user={user} />
                    </>
            }
        </>
    );
}

export default Home;