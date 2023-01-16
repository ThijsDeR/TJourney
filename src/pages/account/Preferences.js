import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation.js';
import { Navigate } from "react-router-dom";
import Loading from '../../components/loading/Loading.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { getPreferencesColor, updateStylePreference } from '../../services/user-service.js';

export function Preferences({ user }) {
    const preferenceChangeHandler = async (style) => {
        await updateStylePreference(style)

        window.location.href = "/account";
    }

    if (user === undefined) {
        return <Navigate to="/login" replace />;
    }

    const styles = [
        {
            name: "Red",
            light: {
                name: "Light Red",
                style: "lightRed",
            },
            dark: {
                name: "Dark Red",
                style: "darkRed"
            }
        },
        {
            name: "Blue",
            light: {
                name: "Light Blue",
                style: "lightBlue",
            },
            dark: {
                name: "Dark Blue",
                style: "darkBlue"
            }
        },
        {
            name: "Yellow",
            light: {
                name: "Light Yellow",
                style: "lightYellow",
            },
            dark: {
                name: "Dark Yellow",
                style: "darkYellow"
            }
        },
        {
            name: "Green",
            light: {
                name: "Light Green",
                style: "lightGreen",
            },
            dark: {
                name: "Dark Green",
                style: "darkGreen"
            }
        },
        {
            name: "Purple",
            light: {
                name: "Light Purple",
                style: "lightPurple",
            },
            dark: {
                name: "Dark Purple",
                style: "darkPurple"
            }
        },
    ]

    return (
        <>

            <div style={{ position: "fixed", top: "0px", bottom: "50px", left: "0px", right: "0px", backgroundColor: user.preferences.style.backgroundColor, color: user.preferences.style.textColor, display: "flex", flexDirection: "column" }}>
                <div className="mx-5">
                    <div className="is-size-3" style={{ position: "absolute", left: "5vw" }}>
                        <Link to="/account" style={{ color: user.preferences.style.primaryColor }}><FontAwesomeIcon icon={faChevronLeft} /></Link>
                    </div>
                    <div className="is-size-3 has-text-centered">
                        Preferences
                    </div>
                </div>

                <div style={{ overflowY: "auto", overflowX: "hidden", height: "100%" }}>
                    <div className="columns is-mobile is-centered">
                        <div className="box my-3 mr-2 column is-5" style={{ backgroundColor: getPreferencesColor("default").backgroundColor, color: getPreferencesColor("default").primaryColor, border: "1px solid " + getPreferencesColor("default").primaryColor }} onClick={() => { preferenceChangeHandler("default") }}>
                            default
                        </div>
                        {/* <div className="box my-3 ml-2 column is-5 has-background-dark has-text-white" onClick={() => { preferenceChangeHandler("dark") }}>
                                    dark
                                </div> */}
                    </div>

                    {
                        styles.map((style) => (
                            <div className="columns is-mobile is-centered">
                                <div className="box my-3 mr-2 column is-5" style={{ backgroundColor: getPreferencesColor(style.light.style).backgroundColor, color: getPreferencesColor(style.light.style).primaryColor, border: "1px solid " + getPreferencesColor(style.light.style).primaryColor }} onClick={() => { preferenceChangeHandler(style.light.style) }}>
                                    {style.light.name}
                                </div>
                                <div className="box my-3 ml-2 column is-5" style={{ backgroundColor: getPreferencesColor(style.dark.style).backgroundColor, color: getPreferencesColor(style.dark.style).primaryColor, border: "1px solid " + getPreferencesColor(style.dark.style).primaryColor }} onClick={() => { preferenceChangeHandler(style.dark.style) }}>
                                    {style.dark.name}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            <Navigation style={user.preferences.style} />
        </>
    );
}