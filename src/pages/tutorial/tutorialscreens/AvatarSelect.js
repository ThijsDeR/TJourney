import React from 'react';
import { editAvatar } from "../../../services/auth-service";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faHome, faListCheck, faUserGear, faUsers, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { DefaultAvatars } from "../../../assets/DefaultAvatars/DefaultAvatarsCanvas.js"
import { buttonStyling, navButtonContainer, selectedStyling } from "../../../components/navigation/NavStylingVariables";

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

            <div style={{ zIndex: 30, width: "100%", position: "absolute", }} onClick={() => updateTutorialScreenPart()} >
                {screenPart === 0 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "50vh", position: "relative" }}>
                        Select an avatar you like, you can change this whenever you want
                    </div>
                }
            </div>

            <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: user.preferences.style.backgroundColor, color: user.preferences.style.textColor, overflowY: "auto", overflowX: "hidden" }}>
                <div className="is-size-3" style={{ position: "absolute", left: "5vw" }}>
                    <Link to="" style={{ color: user.preferences.style.primaryColor }}><FontAwesomeIcon icon={faChevronLeft} /></Link>
                </div>
                <div className="title text-center has-text-centered" style={{ color: user.preferences.style.textColor }}>
                    Avatar Select
                </div>
                {/* Contains two columns */}
                <div className="columns is-mobile is-centered">
                    {/* Default column */}
                    <div className="box my-3 mr-2 column is-5" style={user.avatar === 1 ? { backgroundColor: user.preferences.style.primaryColor } : { backgroundColor: user.preferences.style.backgroundColor }} onClick={() => { selectAvatar(1) }}>
                        {DefaultAvatars.leonardDancingCanvas}
                    </div>
                    {/* End of first column */}
                    <div className="box my-3 ml-2 column is-5" style={user.avatar === 0 ? { backgroundColor: user.preferences.style.primaryColor } : { backgroundColor: user.preferences.style.backgroundColor }} onClick={() => { selectAvatar(0) }}>
                        {DefaultAvatars.MichelleIdle}
                    </div>
                </div>
            </div>

            <div className="nav-bottom" style={screenPart >= 2 ? { zIndex: "30" } : {}}>
                <div style={navButtonContainer(user.preferences.style)} >
                    {user ?
                        <>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style), ...selectedStyling(user.preferences.style)}}><FontAwesomeIcon icon={faUserGear} /></Link>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faListCheck} /></Link>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faHome} /></Link>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faMap} /></Link>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faUsers} /></Link>
                        </> :
                        <>
                            <Link to="#" style={{ ...buttonStyling(user.preferences.style)}}>Login</Link>
                            <Link to="#" style={{ ...buttonStyling(user.preferences.style)}}>Sign Up</Link>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default AvatarSelect;