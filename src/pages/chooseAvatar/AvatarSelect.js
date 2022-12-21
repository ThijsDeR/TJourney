import React from 'react';
import { useState, useEffect } from "react";
import Navigation from "../../components/navigation/Navigation";
import { editAvatar } from "../../services/auth-service";
import Loading from '../../components/loading/Loading.js';

import { DefaultAvatars } from "../../assets/DefaultAvatars/DefaultAvatarsCanvas.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function AvatarSelect({ user, isLoading, setIsLoading }) {
    useEffect(() => {
        if (user) setIsLoading(false)
    }, [user, setIsLoading])

    function selectAvatar(avatar) {
        editAvatar(avatar).then((data) => {
            // Needs to fully reload so canvas updates correctly, tried using Navigate but it shows the avatar wrong until reload
            window.location.href = "/account";
        });
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: user.preferences.style.backgroundColor, color: user.preferences.style.textColor, overflowY: "auto", overflowX: "hidden" }}>
                            <div className="is-size-3" style={{ position: "absolute", left: "5vw" }}>
                                <Link to="/account" style={{ color: user.preferences.style.primaryColor }}><FontAwesomeIcon icon={faChevronLeft} /></Link>
                            </div>
                            <div className="title text-center has-text-centered" style={{color: user.preferences.style.textColor}}>
                                Avatar Select
                            </div>
                            {/* Contains two columns */}
                            <div className="columns is-mobile is-centered">
                                {/* Default column */}
                                <div className="box my-3 mr-2 column is-5" style={{backgroundColor: user.preferences.style.backgroundColor}} onClick={() => selectAvatar("Chopper")}>
                                    {DefaultAvatars.Chopper}
                                </div>
                                {/* End of first column */}
                                <div className="box my-3 ml-2 column is-5" style={{backgroundColor: user.preferences.style.backgroundColor}} onClick={() => selectAvatar("Shiba")}>
                                    {DefaultAvatars.Shiba}
                                </div>
                            </div>
                            {/* End of first set of columns */}

                            <div className="columns is-mobile is-centered">
                                <div className="box my-3 mr-2 column is-5" style={{backgroundColor: user.preferences.style.backgroundColor}} onClick={() => selectAvatar("Randomguy")}>
                                    {DefaultAvatars.Randomguy}
                                </div>
                                <div className="box my-3 ml-2 column is-5" style={{backgroundColor: user.preferences.style.backgroundColor}} onClick={() => selectAvatar("MichelleIdle")}>
                                    {DefaultAvatars.MichelleIdle}
                                </div>
                            </div>
                        </div>
                        <Navigation user={user} />
                    </>
            }
        </>
    );
}

export default AvatarSelect;