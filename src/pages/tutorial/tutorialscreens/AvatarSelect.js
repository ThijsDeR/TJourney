import React from 'react';
import { editAvatar } from "../../../services/auth-service";
import { Link } from "react-router-dom";

import { DefaultAvatars } from "../../../assets/DefaultAvatars/DefaultAvatarsCanvas.js"

function AvatarSelect({ user, screenPart, updateTutorialScreenPart, updateTutorialPosition }) {
    function selectAvatar(avatar) {
        editAvatar(avatar).then(() => {
            updateTutorialPosition();
        });
    }

    return (
        <>
            {screenPart === 0 &&
                <div style={{ zIndex: "20", backgroundColor: "rgb(0, 0, 0, 0.5)", width: "100vw", height: "100vh", position: "absolute", left: "0px", top: "0px" }} onClick={() => updateTutorialScreenPart()} />
            }

            <div style={{ zIndex: 30, width: "100%", position: "absolute", }}>
                {screenPart === 0 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "50vh", position: "relative" }}>
                        Select an avatar you like, you can change this whenever you want
                    </div>
                }
            </div>

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

            <div className="nav-bottom" style={screenPart >= 2 ? { zIndex: "30" } : {}}>
                <div className="nav-buttons is-flex" >
                    {user ?
                        <>
                            <Link to="#">A</Link>
                            <Link to="#" onClick={screenPart >= 8 ? () => updateTutorialPosition() : ""}>CH</Link>
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

export default AvatarSelect;