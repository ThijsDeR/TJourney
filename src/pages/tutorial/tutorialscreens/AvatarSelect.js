import React from 'react';
import { editAvatar } from "../../../services/auth-service";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faHome, faListCheck, faUserGear, faUsers } from '@fortawesome/free-solid-svg-icons';
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

            <div style={{ zIndex: 30, width: "100%", position: "absolute", }} onClick={() => updateTutorialScreenPart()} >
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
                <div className="nav-buttons is-flex" >
                    {user ?
                        <>
                            <Link to="#" style={{backgroundColor: 'rgb(198, 30, 156)', padding: "0 5% 0 5%"}}><FontAwesomeIcon icon={faUserGear} /></Link>
                            <Link to="#" onClick={screenPart >= 8 ? () => updateTutorialPosition() : () => { }}><FontAwesomeIcon icon={faListCheck} /></Link>
                            <Link to="#"><FontAwesomeIcon icon={faHome} /></Link>
                            <Link to="#"><FontAwesomeIcon icon={faMap} /></Link>
                            <Link to="#"><FontAwesomeIcon icon={faUsers} /></Link>
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