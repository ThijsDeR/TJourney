import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation.js';
import { Navigate } from "react-router-dom";
import Loading from '../../components/loading/Loading.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { updateStylePreference } from '../../services/user-service.js';

export function Preferences({ user, isLoading, setIsLoading }) {
    useEffect(() => {
        if (user) setIsLoading(false)
    }, [user, setIsLoading])

    const preferenceChangeHandler = async (style) => {
        const data = await updateStylePreference(style)

        window.location.href = "/account";
    }

    if (user === undefined && !isLoading) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0px", bottom: "0px", left: "0px", right: "0px", backgroundColor: "black", color: "white" }}>
                            <div className="mx-5">
                                <div className="is-size-3" style={{ position: "absolute", left: "5vw" }}>
                                    <Link to="/account" style={{ color: "white" }}><FontAwesomeIcon icon={faChevronLeft} /></Link>
                                </div>
                                <div className="is-size-3 has-text-centered">
                                    Preferences
                                </div>
                            </div>

                            <div className="columns is-mobile is-centered">
                                <div className="box my-3 mr-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("default") }}>
                                    default
                                </div>
                                {/* <div className="box my-3 ml-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("dark") }}>
                                    dark
                                </div> */}
                            </div>

                            <div className="columns is-mobile is-centered">
                                <div className="box my-3 mr-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("lightRed") }}>
                                    light red
                                </div>
                                <div className="box my-3 ml-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("darkRed") }}>
                                    dark red
                                </div>
                            </div>

                            <div className="columns is-mobile is-centered">
                                <div className="box my-3 mr-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("lightBlue") }}>
                                    light blue
                                </div>
                                <div className="box my-3 ml-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("darkBlue") }}>
                                    dark blue
                                </div>
                            </div>

                            <div className="columns is-mobile is-centered">
                                <div className="box my-3 mr-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("lightGreen") }}>
                                    light green
                                </div>
                                <div className="box my-3 ml-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("darkGreen") }}>
                                    dark green
                                </div>
                            </div>

                            <div className="columns is-mobile is-centered">
                                <div className="box my-3 mr-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("lightYellow") }}>
                                    light yellow
                                </div>
                                <div className="box my-3 ml-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("darkYellow") }}>
                                    dark yellow
                                </div>
                            </div>

                            <div className="columns is-mobile is-centered">
                                <div className="box my-3 mr-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("lightPurple") }}>
                                    light purple
                                </div>
                                <div className="box my-3 ml-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("darkPurple") }}>
                                    dark purple
                                </div>
                            </div>
                        </div>
                        <Navigation user={user} />
                    </>
            }
        </>
    );
}