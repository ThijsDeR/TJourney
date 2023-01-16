import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { calculateLevel } from '../../../services/level-service.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMap, faHome, faListCheck, faUserGear, faUsers, faSliders, faPencil, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import { DefaultAvatars } from '../../../assets/DefaultAvatars/DefaultAvatarsCanvas';
import { login, deleteAccount, editUsername, editPassword } from "../../../services/auth-service";
import { getActiveCharacter, getAllCharacters } from '../../../services/playerCharacter-service.js';


function Account({ user, isLoading, screenPart, updateTutorialScreenPart, updateTutorialPosition }) {
    const [userLevel, setUserLevel] = useState(undefined);
    const [level, setLevel] = useState(undefined);

    const [inputDeleteAccount, showInputDeleteAccount] = useState(false);
    const [inputPassword, showInputPassword] = useState(false);
    const [inputUserName, showInputUserName] = useState(false);

    const [passwordNotSame, setPasswordNotSame] = useState(false);

    function getAvatar() {
        if (user.avatar === 0) return DefaultAvatars.MichelleIdle;
        if (user.avatar === 1) return DefaultAvatars.leonardDancingCanvas;


        if (getActiveCharacter()[0] === getAllCharacters().idle[0]) {
            return DefaultAvatars.MichelleIdle;
        } else if (getActiveCharacter()[0] === getAllCharacters().idle[1]) {
            return DefaultAvatars.leonardDancingCanvas
        }
    }

    useEffect(() => {
        if (user && !userLevel) {
            setUserLevel(user.level.amount)
            setLevel(calculateLevel(user.level.amount))
        }
    }, [user, userLevel])

    useEffect(() => {
        if (userLevel) setLevel(calculateLevel(userLevel))
    }, [userLevel])

    if (user === undefined && !isLoading) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <div style={{ position: "fixed", top: "0px", bottom: "0px", left: "0px", right: "0px", backgroundColor: "black", color: "white" }}>

                <div style={{ zIndex: "20", backgroundColor: "rgb(0, 0, 0, 0.5)", width: "100vw", height: "100vh", position: "absolute", left: "0px", top: "0px" }} onClick={() => updateTutorialScreenPart()} />

                <div style={{ zIndex: 30, width: "100%", position: "absolute", }}>
                    {screenPart === 0 &&
                        <div className="has-text-white is-size-3 has-text-centered" style={{ top: "40vh", position: "relative" }}>
                            This is your account
                        </div>
                    }
                    {screenPart === 1 &&
                        <div className="has-text-white is-size-3 has-text-centered" style={{ top: "40vh", position: "relative" }} onClick={() => updateTutorialScreenPart()}>
                            Here you can see and edit your username
                        </div>
                    }
                    {screenPart === 2 &&
                        <div className="has-text-white is-size-3 has-text-centered" style={{ top: "40vh", position: "relative" }} onClick={() => updateTutorialScreenPart()}>
                            See your level
                        </div>
                    }
                    {screenPart === 3 &&
                        <div className="has-text-white is-size-3 has-text-centered" style={{ top: "40vh", position: "relative" }} onClick={() => updateTutorialScreenPart()}>
                            See your avatar that represents you
                        </div>
                    }
                    {screenPart === 4 &&
                        <div className="has-text-white is-size-3 has-text-centered" style={{ top: "40vh", position: "relative" }} onClick={() => updateTutorialScreenPart()}>
                            And delete
                        </div>
                    }
                    {screenPart === 5 &&
                        <div className="has-text-white is-size-3 has-text-centered" style={{ top: "40vh", position: "relative" }} onClick={() => updateTutorialScreenPart()}>
                            or edit your account
                        </div>
                    }
                    {screenPart > 5 &&
                        <div className="has-text-white is-size-3 has-text-centered" style={{ top: "40vh", position: "relative" }} onClick={() => updateTutorialScreenPart()}>
                            Let's go select an avatar by clicking on your avatar
                        </div>
                    }
                </div>
                
                <div className="mx-5">
                    <div className="is-size-3" style={{ position: "absolute", left: "5vw" }}>
                        <Link to="" style={{ color: user.preferences.style.primaryColor }}><FontAwesomeIcon icon={faSliders} /></Link>
                    </div>

                    <div className="is-size-3" style={{ position: "absolute", right: "5vw" }}>
                        <Link to="" style={{ color: user.preferences.style.primaryColor }}><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
                    </div>

                    <div className="is-size-3 has-text-centered">
                        Account
                    </div>

                    {/* Username section */}
                    <div className="is-size-4 mt-3">
                        <div className="mb-5" style={screenPart === 1 ? { zIndex: 300, position: 'relative' } : {}}>
                            {inputUserName
                                ?
                                <div style={{ height: "3vh" }} >
                                    <form>
                                        <input className="input has-text-centered" style={{ width: "35vw", backgroundColor: user.preferences.style.backgroundColor, color: user.preferences.style.textColor }} type="text" placeholder="username" defaultValue={user.username} />
                                        <button className="is-pulled-right button ml-3" style={{ backgroundColor: user.preferences.style.secondaryColor }} onClick={() => showInputUserName(!inputUserName)}>Cancel</button>
                                        <button className="is-pulled-right button" style={{ backgroundColor: user.preferences.style.primaryColor }}>Submit</button>
                                    </form>
                                </div>
                                :
                                <div style={{ height: "3vh" }} >
                                    {user.username}
                                    <button className="is-pulled-right button" style={{ backgroundColor: user.preferences.style.secondaryColor, color: user.preferences.style.textColor }} onClick={() => showInputUserName(!inputUserName)}>Edit</button>
                                </div>
                            }
                        </div>

                        {/* Level */}
                        <div style={screenPart === 2 ? { zIndex: 300, position: 'relative' } : {}}>
                            Level: ({level ? `${level.level} (${level.xp} / ${level.neededXP})` : ""} )
                        </div>


                        {/* Avatar canvas */}
                        <Link to="" style={(screenPart === 3 || screenPart > 5) ? { zIndex: 300, position: 'relative' } : {}} onClick={screenPart > 5 ? () => updateTutorialPosition() : () => { }}>
                            <div className="box" style={{ backgroundColor: user.preferences.style.tertiaryColor, position: "relative" }} onClick={() => { window.location.href = "/avatarselect" }}>
                                {/*change avatar*/}
                                <div className="is-size-3" style={{ position: "absolute", right: "10px", top: "-3px" }}>
                                    <FontAwesomeIcon icon={faPencil} style={{ color: user.preferences.style.primaryColor }} />
                                </div>
                                {getAvatar()}
                            </div>
                        </Link>

                        {/* Edit password */}
                        <div style={screenPart === 5 ?
                            { zIndex: 300, position: 'absolute', bottom: "10vh", right: "5vw" }
                            :
                            { position: "absolute", bottom: "10vh", right: "5vw" }}>
                            <button className="button has-text-white" style={{ backgroundColor: user.preferences.style.primaryColor }} onClick={() => [showInputPassword(!inputPassword), showInputDeleteAccount(false)]}>
                                Edit password
                            </button>
                        </div>


                        {inputPassword ?
                            <>
                                <div className="modal is-active px-5">
                                    <div className="modal-background"></div>
                                    <div className="modal-content p-4" style={{ borderRadius: "15px", backgroundColor: user.preferences.style.backgroundColor }}>
                                        <div>
                                            Old password
                                            <input className="input has-text-white" style={{ backgroundColor: user.preferences.style.backgroundColor }} type="password" placeholder="Password" />
                                        </div>
                                        <div className="mt-3">
                                            {passwordNotSame ?
                                                <div className="has-text-danger is-size-5 my-0 ">
                                                    Passwords don't match
                                                </div>
                                                :
                                                ""
                                            }
                                            New password
                                            <input className="input has-text-white" style={{ backgroundColor: user.preferences.style.backgroundColor }} type="password" placeholder="Password" />
                                        </div>
                                        <div className="mt-3">
                                            Confirm new password
                                            <input className="input has-text-white" style={{ backgroundColor: user.preferences.style.backgroundColor }} type="password" placeholder="Password" />
                                        </div>
                                        <button className="button mt-3" style={{ backgroundColor: user.preferences.style.secondaryColor }} onClick={() => showInputPassword(false)}>
                                            Close
                                        </button>
                                        <button className="is-pulled-right button mt-3" style={{ backgroundColor: user.preferences.style.primaryColor, color: user.preferences.style.textColor }}>
                                            Submit
                                        </button>
                                        <div className="is-clearfix"></div>
                                    </div>
                                </div>
                            </>
                            :
                            ""
                        }
                    </div>

                    {/* Delete account */}
                    <div style={screenPart === 4 ?
                        { zIndex: 300, position: 'absolute', bottom: "10vh" }
                        :
                        { position: "absolute", bottom: "10vh" }}>
                        <button className="button is-danger mt-5 is-relative" onClick={() => [showInputDeleteAccount(!inputDeleteAccount), showInputPassword(false)]}>Delete account</button>
                    </div>
                    {inputDeleteAccount ?
                        <>
                            <div className="modal is-active px-5">
                                <div className="modal-background"></div>
                                <div className="modal-content px-2 py-3" style={{ borderRadius: "15px", backgroundColor: user.preferences.style.backgroundColor }}>
                                    <form>
                                        <div className="is-size-4 mb-1" style={{ color: user.preferences.style.textColor }}>Confirm deletion by entering your password:</div>
                                        <input className="input" style={{ color: user.preferences.style.secondaryColor, backgroundColor: user.preferences.backgroundColor }} type="password" placeholder="Password" />
                                        <button className="button mt-3 is-pulled-right" style={{ color: user.preferences.style.textColor, backgroundColor: user.preferences.style.primaryColor }}>Submit</button>
                                        <button className="button mt-3" style={{ color: user.preferences.style.secondaryColor, backgroundColor: user.preferences.backgroundColor }} onClick={() => showInputDeleteAccount(false)}>Close</button>
                                    </form>
                                </div>
                            </div>
                        </>
                        :
                        ""
                    }

                </div >

                <div className="nav-bottom">
                    <div className="nav-buttons is-flex" >
                        {user ?
                            <>
                                <Link to="" className="selected"><FontAwesomeIcon icon={faUserGear} /></Link>
                                <Link to=""><FontAwesomeIcon icon={faListCheck} /></Link>
                                <Link to=""><FontAwesomeIcon icon={faHome} /></Link>
                                <Link to=""><FontAwesomeIcon icon={faMap} /></Link>
                                <Link to=""><FontAwesomeIcon icon={faUsers} /></Link>
                            </> :
                            <>
                                <Link to="#">Login</Link>
                                <Link to="#">Sign Up</Link>
                            </>
                        }
                    </div>
                </div>
            </div>

        </>
    );
}

export default Account;