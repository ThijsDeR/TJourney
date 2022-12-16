import React from 'react';
import { useState, useEffect } from "react";
import Navigation from "../../components/navigation/Navigation";
import { editAvatar } from "../../services/auth-service";
import Loading from '../../components/loading/Loading.js';

import { DefaultAvatars } from "../../assets/DefaultAvatars/DefaultAvatarsCanvas.js"

function AvatarSelect({ user, isLoading, setIsLoading }) {
    useEffect(() => {
        if (user) setIsLoading(false)
    }, [user, setIsLoading])

    function selectAvatar(avatar) {
        editAvatar(avatar).then((data) => {
            window.location.href = "/account";
        });
    }

    return (
        <>
            {isLoading ?
                <Loading />
                :
                <>
                    <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: "black", overflowY: "auto", overflowX: "hidden" }}>
                        <div className="title text-center has-text-centered has-text-white">
                            Avatar Select
                        </div>
                        {/* Contains two columns */}
                        <div className="columns is-mobile is-centered">
                            {/* Default column */}
                            <div className="box my-3 mr-2 column is-5 has-background-dark" onClick={() => selectAvatar("Chopper")}>
                                {DefaultAvatars.Chopper}
                            </div>
                            {/* End of first column */}
                            <div className="box my-3 ml-2 column is-5 has-background-dark" onClick={() => selectAvatar("Shiba")}>
                                {DefaultAvatars.Shiba}
                            </div>
                        </div>
                        {/* End of first set of columns */}

                        <div className="columns is-mobile is-centered">
                            <div className="box my-3 mr-2 column is-5 has-background-dark" onClick={() => selectAvatar("Randomguy")}>
                                {DefaultAvatars.Randomguy}
                            </div>
                            <div className="box my-3 ml-2 column is-5 has-background-dark" onClick={() => selectAvatar("MichelleIdle")}>
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