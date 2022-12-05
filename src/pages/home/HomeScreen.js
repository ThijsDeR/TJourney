import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation.js';
import { Link, Navigate } from "react-router-dom";
import "./homeStyles.css";
import Loading from '../../components/loading/Loading.js';
import { updateLevel } from '../../services/level-service.js';

function Home({ user, setCurrentUser, isLoading }) {
    const [level, setLevel] = useState(0)

    useEffect(() => {
        if (user && level === 0) {
            setLevel(user.level)
        }
    }, [user])

    if (!user && !isLoading) {
        return <Navigate to="/login" replace />;
    }


    const saveLevel = async (amount) => {
        setLevel(amount)
        updateLevel(amount).then((data) => {
            setCurrentUser(data.userData)
        })
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0px", bottom: "0px", left: "0px", right: "0px" }}>
                            <section class="bg-image" style={{height: "100%"}}>
                                <div className="is-flex is-justify-content-center">
                                    <h2 className="is-size-3 has-text-weight-bold">{user.username} ({level})</h2>
                                </div>

                                <div className="is-flex is-justify-content-center">
                                    <button onClick={() => saveLevel(level + 1)}>Increase</button>
                                    <button onClick={() => saveLevel(level - 1)}>Decrease</button>
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