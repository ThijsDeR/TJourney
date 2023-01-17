import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation.js';
import { Navigate } from "react-router-dom";
import Loading from '../../components/loading/Loading.js';
import { calculateLevel } from '../../services/level-service.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faSliders, faPencil, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { DefaultAvatars } from '../../assets/DefaultAvatars/DefaultAvatarsCanvas';
import { login, deleteAccount, editUsername, editPassword } from "../../services/auth-service";
import { getActiveCharacter, getAllCharacters } from '../../services/playerCharacter-service.js';

function Account({ user, reloadUserHandler }) {
    const [userLevel, setUserLevel] = useState(undefined);
    const [level, setLevel] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    const [inputDeleteAccount, showInputDeleteAccount] = useState(false);
    const [inputPassword, showInputPassword] = useState(false);
    const [inputUserName, showInputUserName] = useState(false);

    const [newUserName, setNewUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
    const [passwordNotSame, setPasswordNotSame] = useState(false);

    /**
     * I think this funciton is unneccesary
     * @returns 
     */
    function getAvatar() {
        if (user.avatar === 0) return DefaultAvatars.MichelleIdle;
        if (user.avatar === 1) return DefaultAvatars.leonardDancingCanvas;


        if (getActiveCharacter()[0] === getAllCharacters().idle[0]) {
            return DefaultAvatars.MichelleIdle;
        } else if (getActiveCharacter()[0] === getAllCharacters().idle[1]) {
            return DefaultAvatars.leonardDancingCanvas
        }
    }

    async function handleNewPassword() {
        if (newPassword !== newPasswordConfirm) {
            setPasswordNotSame(true);
            return;
        }
        setPasswordNotSame(false);

        await login(user.email, password);
        await editPassword(newPassword);
        localStorage.removeItem("user");
        window.location.href = "/login";
    }

    function handleEditUserName(e) {
        e.preventDefault();

        editUsername(newUserName).then(() => {
            window.location.reload();
        });
    }

    async function handleDeleteAccount(e) {
        e.preventDefault();

        await login(user.email, password);
        if (!window.confirm("Are you certain you wish to delete your account?")) {
            return;
        }
        deleteAccount();
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

    useEffect(() => {
        if (user && userLevel !== undefined) setIsLoading(false)
    }, [user, userLevel, setIsLoading])

    useEffect(() => {
        reloadUserHandler()
    }, [])

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0px", bottom: "75px", left: "0px", right: "0px", backgroundColor: user.preferences.style.backgroundColor, color: user.preferences.style.textColor }}>
                            <div className="mx-5">
                                <div className="is-size-3" style={{ position: "absolute", left: "5vw" }}>
                                    <Link to="/preferences" style={{ color: user.preferences.style.primaryColor }}><FontAwesomeIcon icon={faSliders} /></Link>
                                </div>

                                <div className="is-size-3" style={{ position: "absolute", right: "5vw" }}>
                                    <Link to="/logout" style={{ color: user.preferences.style.primaryColor }}><FontAwesomeIcon icon={faArrowRightFromBracket} /></Link>
                                </div>

                                <div className="is-size-3 has-text-centered">
                                    Account
                                </div>

                                {/* Username section */}
                                <div className="is-size-4 mt-3">
                                    <div className="mb-5">
                                        {inputUserName
                                            ?
                                            <div style={{ height: "3vh" }} >
                                                <form onSubmit={(e) => handleEditUserName(e)}>
                                                    <input className="input has-text-centered" style={{ width: "35vw", backgroundColor: user.preferences.style.backgroundColor, color: user.preferences.style.textColor }} type="text" placeholder="username" defaultValue={user.username} onChange={(e) => setNewUsername(e.target.value)} />
                                                    <button className="is-pulled-right button ml-3" style={{ backgroundColor: user.preferences.style.secondaryColor, color: user.preferences.style.textColor }} onClick={() => showInputUserName(!inputUserName)}>Cancel</button>
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
                                    <div>
                                        Level: {level ? `${level.level}` : ""}
                                    </div>


                                    {/* Avatar canvas */}
                                    <Link to="/avatarselect" >
                                        <div className="box" style={{ backgroundColor: user.preferences.style.tertiaryColor, position: "relative" }} onClick={() => { window.location.href = "/avatarselect" }}>
                                            {/*change avatar*/}
                                            <div className="is-size-3" style={{position: "absolute", right: "10px", top: "-3px"}}>
                                                <FontAwesomeIcon icon={faPencil} style={{ color: user.preferences.style.primaryColor }}/>
                                            </div>
                                            {getAvatar()}
                                        </div>
                                    </Link>

                                    {/* Edit password */}
                                    <div style={{ position: "absolute", bottom: "0", right: "5vw" }}>
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
                                                        <input className="input has-text-white" style={{ backgroundColor: user.preferences.style.backgroundColor }} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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
                                                        <input className="input has-text-white" style={{ backgroundColor: user.preferences.style.backgroundColor }} type="password" placeholder="Password" onChange={(e) => setNewPassword(e.target.value)} />
                                                    </div>
                                                    <div className="mt-3">
                                                        Confirm new password
                                                        <input className="input has-text-white" style={{ backgroundColor: user.preferences.style.backgroundColor }} type="password" placeholder="Password" onChange={(e) => setNewPasswordConfirm(e.target.value)} />
                                                    </div>
                                                    <button className="button mt-3" style={{ backgroundColor: user.preferences.style.secondaryColor }} onClick={() => showInputPassword(false)}>
                                                        Close
                                                    </button>
                                                    <button className="is-pulled-right button mt-3" style={{ backgroundColor: user.preferences.style.primaryColor, color: user.preferences.style.textColor }} onClick={() => handleNewPassword()}>
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
                                <div style={{ position: "absolute", bottom: "0" }}>
                                    <button className="button is-danger mt-5 is-relative" onClick={() => [showInputDeleteAccount(!inputDeleteAccount), showInputPassword(false)]}>Delete account</button>
                                </div>
                                {inputDeleteAccount ?
                                    <>
                                        <div className="modal is-active px-5">
                                            <div className="modal-background"></div>
                                            <div className="modal-content px-2 py-3" style={{ borderRadius: "15px", backgroundColor: user.preferences.style.backgroundColor }}>
                                                <form onSubmit={(e) => handleDeleteAccount(e)}>
                                                    <div className="is-size-4 mb-1" style={{ color: user.preferences.style.textColor }}>Confirm deletion by entering your password:</div>
                                                    <input className="input" style={{ color: user.preferences.style.secondaryColor, backgroundColor: user.preferences.backgroundColor }} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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
                        </div>
                        <Navigation style={user.preferences.style} />
                    </>
            }
        </>
    );
}

export default Account;