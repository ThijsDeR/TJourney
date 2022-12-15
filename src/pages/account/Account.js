import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation.js';
import { Navigate } from "react-router-dom";
import Loading from '../../components/loading/Loading.js';
import { calculateLevel } from '../../services/level-service.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { DefaultAvatars } from '../../assets/DefaultAvatars/DefaultAvatarsCanvas';
import { Environment, OrbitControls } from "@react-three/drei";

import { login, deleteAccount, editUsername, editPassword } from "../../services/auth-service";

function Account({ user, isLoading, setIsLoading }) {
    const [userLevel, setUserLevel] = useState(undefined);
    const [level, setLevel] = useState(undefined);

    const [inputDeleteAccount, showInputDeleteAccount] = useState(false);
    const [inputPassword, showInputPassword] = useState(false);
    const [inputUserName, showInputUserName] = useState(false);

    const [newUserName, setNewUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
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

        editUsername(newUserName).then((data) => {
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
                                <div className="is-size-3" style={{ position: "absolute", right: "5vw" }}>
                                    {/* TODO: make it go to currently non-existent settings page */}
                                    <Link to="/home"><FontAwesomeIcon icon={faGear} /></Link>
                                </div>
                                <div className="is-size-3 has-text-centered">
                                    Account
                                </div>

                                <div className="is-size-4 mt-3">
                                    <div className="mb-5">
                                        {inputUserName
                                            ?
                                            <div style={{ height: "3vh" }} >
                                                <form onSubmit={(e) => handleEditUserName(e)}>
                                                    <input className="input has-text-white has-text-centered has-background-black" style={{ width: "35vw" }} type="text" placeholder="username" defaultValue={user.username} onChange={(e) => setNewUsername(e.target.value)} />
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
                                    <div>
                                        Level: ({level ? `${level.level} (${level.xp} / ${level.neededXP})` : ""} )
                                    </div>

                                    <div className="has-background-black-ter box">
                                        {getAvatar()}
                                    </div>

                                    <div style={{ position: "absolute", bottom: "10vh", right: "5vw" }}>
                                        <button className="button has-background-info has-text-white" onClick={() => [showInputPassword(!inputPassword), showInputDeleteAccount(false)]}>
                                            Edit password
                                        </button>
                                    </div>
                                    {inputPassword ?
                                        <>
                                            <div>
                                                Old password
                                                <input className="input has-text-white has-background-black" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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
                                                <input className="input has-text-white has-background-black" type="password" placeholder="Password" onChange={(e) => setNewPassword(e.target.value)} />
                                            </div>
                                            <div className="mt-3">
                                                Confirm new password
                                                <input className="input has-text-white has-background-black" type="password" placeholder="Password" onChange={(e) => setNewPasswordConfirm(e.target.value)} />
                                            </div>
                                            <button className="is-pulled-right button mt-3 has-background-success has-text-black" onClick={() => handleNewPassword()}>
                                                Submit
                                            </button>
                                            <div className="is-clearfix"></div>
                                        </>
                                        :
                                        ""
                                    }
                                </div>

                                <div style={{ position: "absolute", bottom: "10vh" }}>
                                    <button className="button is-danger mt-5 is-relative" onClick={() => [showInputDeleteAccount(!inputDeleteAccount), showInputPassword(false)]}>Delete account</button>
                                </div>

                                {inputDeleteAccount ?
                                    <>
                                        <form onSubmit={(e) => handleDeleteAccount(e)}>
                                            <div className="is-size-4 mb-1">Confirm deletion by entering your password:</div>
                                            <input className="input has-text-white has-background-black" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                            <button className="button mt-3 is-pulled-right has-background-danger has-text-white">Submit</button>
                                        </form>
                                    </>
                                    :
                                    ""
                                }

                            </div >
                        </div>
                        <Navigation user={user} />
                    </>
            }
        </>
    );
}

export default Account;