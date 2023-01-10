import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { calculateLevel } from '../../../services/level-service.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { DefaultAvatars } from '../../../assets/DefaultAvatars/DefaultAvatarsCanvas';
import { login, deleteAccount, editUsername, editPassword } from "../../../services/auth-service";

function Account({ user, isLoading, screenPart, updateTutorialScreenPart, updateTutorialPosition }) {
    const [userLevel, setUserLevel] = useState(undefined);
    const [level, setLevel] = useState(undefined);

    const [inputDeleteAccount, showInputDeleteAccount] = useState(false);
    const [inputPassword, showInputPassword] = useState(false);
    const [inputUserName, showInputUserName] = useState(false);

    const [passwordNotSame, setPasswordNotSame] = useState(false);

    function getAvatar() {
        let avatar = undefined;
        Object.keys(DefaultAvatars).forEach(function (key, index) {
            if (key === user.avatar) {
                avatar = DefaultAvatars[key];
                return;
            }
        });
        if (avatar !== undefined) {
            return avatar;
        } else {
            // Defaults to chopper if no avatar in db
            return DefaultAvatars.Chopper
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
                    <div className="is-size-3 has-text-info" style={screenPart > 5 ? { zIndex: 300, position: "absolute", right: "5vw" } : { position: "absolute", right: "5vw" }}>
                        <div onClick={() => updateTutorialPosition()}><FontAwesomeIcon icon={faGear} /></div>
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
                                        <input className="input has-text-white has-text-centered has-background-black" style={{ width: "35vw" }} type="text" placeholder="username" defaultValue={user.username} />
                                        <button className="is-pulled-right button ml-3 has-background-black has-text-white" onClick={() => showInputUserName(!inputUserName)}>Cancel</button>
                                        <button className="is-pulled-right button has-background-success">Submit</button>
                                    </form>
                                </div>
                                :
                                <div style={{ height: "3vh" }} >
                                    {user.username}
                                    <button className="is-pulled-right button has-background-black has-text-white" onClick={() => showInputUserName(!inputUserName)}>Edit</button>
                                </div>
                            }
                        </div>

                        {/* Level */}
                        <div style={screenPart === 2 ? { zIndex: 300, position: 'relative' } : {}}>
                            Level: ({level ? `${level.level} (${level.xp} / ${level.neededXP})` : ""} )
                        </div>

                        {/* Avatar canvas */}
                        <div style={(screenPart === 3 || screenPart > 5) ? { zIndex: 300, position: 'relative' } : {}} className="has-background-black-ter box" onClick={screenPart > 5 ? () => updateTutorialPosition() : () => {}}>
                            {getAvatar()}
                        </div>

                        {/* Edit password */}
                        <div style={screenPart === 5 ?
                            { zIndex: 300, position: 'absolute', bottom: "10vh", right: "5vw" }
                            :
                            { position: "absolute", bottom: "10vh", right: "5vw" }} >
                            <button className="button has-background-info has-text-white" onClick={() => [showInputPassword(!inputPassword), showInputDeleteAccount(false)]}>
                                Edit password
                            </button>
                        </div>
                        {inputPassword ?
                            <>
                                <div className="modal is-active px-5">
                                    <div className="modal-background"></div>
                                    <div className="modal-content px-2 py-3 has-background-dark" style={{ borderRadius: "15px" }}>
                                        <div>
                                            Old password
                                            <input className="input has-text-white has-background-black" type="password" placeholder="Password" />
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
                                            <input className="input has-text-white has-background-black" type="password" placeholder="Password" />
                                        </div>
                                        <div className="mt-3">
                                            Confirm new password
                                            <input className="input has-text-white has-background-black" type="password" placeholder="Password" />
                                        </div>
                                        <button className="button mt-3 has-background-danger has-text-black" onClick={() => showInputPassword(false)}>
                                            Close
                                        </button>
                                        <button className="is-pulled-right button mt-3 has-background-success has-text-black">
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
                                <div className="modal-content px-2 py-3 has-background-dark" style={{ borderRadius: "15px" }}>
                                    <div>
                                        <div className="is-size-4 mb-1 has-text-white">Confirm deletion by entering your password:</div>
                                        <input className="input has-text-white has-background-black" type="password" placeholder="Password" />
                                        <button className="button mt-3 is-pulled-right has-background-success has-text-black">Submit</button>
                                        <button className="button mt-3 has-background-danger has-text-black" onClick={() => showInputDeleteAccount(false)}>Close</button>
                                    </div>
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
                                <Link to="#">A</Link>
                                <Link to="#">CH</Link>
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
            </div>

        </>
    );
}

export default Account;