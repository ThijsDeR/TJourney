import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation.js';
import { Navigate } from "react-router-dom";
import Loading from '../../components/loading/Loading.js';
import { calculateLevel, updateLevel } from '../../services/level-service.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import { login, deleteAccount, editUsername, editPassword } from "../../services/auth-service";

function Home({ user, setCurrentUser, isLoading, setIsLoading }) {
    const [userLevel, setUserLevel] = useState(undefined);
    const [level, setLevel] = useState(undefined);
    const [deleteAccountInput, showDeleteAccountInput] = useState(false);
    const [inputPassword, setInputPassword] = useState(false);
    const [inputUserName, setInputUserName] = useState(false);
    const [newUserName, setNewUsername] = useState(undefined);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
    const [passwordNotSame, setPasswordNotSame] = useState(false);

    async function handleNewPassword() {
        console.log("handle new password");
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

    function handleEditProfilePicture() {
        console.log("edit pfp")



    }

    async function handleDeleteAccount(e) {
        e.preventDefault();

        await login(user.email, password);

        if (!window.confirm("Are you certain you wish to delete your account?")) {
            console.log("canceled deletion");
            return;
        }
        console.log("delete account in progress");

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
                                <div className="is-size-3 has-text-centered">
                                    Account
                                    <Link to="/home" className="is-pulled-right has-text-white"><FontAwesomeIcon icon={faGear} /></Link>
                                </div>

                                <div className="is-size-4 mt-3">
                                    <div className="has-text-centered mb-5">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
                                            alt="user profile" className="is-pulled-left" style={{ width: "10vw", height: "5vh", borderRadius: "20px" }}
                                            onClick={() => handleEditProfilePicture()} />
                                        {inputUserName
                                            ?
                                            <form onSubmit={(e) => handleEditUserName(e)}>
                                                <input className="input has-text-white has-text-centered has-background-black" style={{ width: "35vw" }} type="text" placeholder="username" defaultValue={user.username} onChange={(e) => setNewUsername(e.target.value)} />
                                                <button className="is-pulled-right button" onClick={() => setInputUserName(!inputUserName)}>Cancel</button>
                                                <button className="is-pulled-right button">Submit</button>
                                            </form>
                                            :
                                            <>
                                                {user.username}
                                                <button className="is-pulled-right button" onClick={() => setInputUserName(!inputUserName)}>Edit</button>
                                            </>
                                        }

                                    </div>
                                    <div>
                                        Level: ({level ? `${level.level} (${level.xp} / ${level.neededXP})` : ""} )
                                    </div>
                                    <button className="button" onClick={() => setInputPassword(!inputPassword)}>
                                        Edit password
                                    </button>
                                    {inputPassword ?
                                        <>
                                            <div>
                                                Old password
                                                <input className="input has-text-white has-background-black" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                            {passwordNotSame ?
                                                <div className="has-text-danger">
                                                    Passwords don't match
                                                </div>
                                                :
                                                ""
                                            }
                                            <div>
                                                New password
                                                <input className="input has-text-white has-background-black" type="password" placeholder="Password" onChange={(e) => setNewPassword(e.target.value)} />
                                            </div>
                                            <div>
                                                Confirm new password
                                                <input className="input has-text-white has-background-black" type="password" placeholder="Password" onChange={(e) => setNewPasswordConfirm(e.target.value)} />
                                            </div>
                                            <button className="is-pulled-right button mt-3" onClick={() => handleNewPassword()}>
                                                Submit
                                            </button>
                                            <div className="is-clearfix"></div>
                                        </>
                                        :
                                        ""
                                    }
                                </div>
                                <button className="button is-danger mt-5" onClick={() => showDeleteAccountInput(!deleteAccountInput)} /*style={{ bottom: "100px" }}*/>Delete account</button>

                                {deleteAccountInput ?
                                    <>
                                        <form onSubmit={(e) => handleDeleteAccount(e)}>
                                            <div className="is-size-4">Confirm deletion by entering your password:</div>
                                            <input className="input has-text-white has-background-black" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                            <button className="button mt-1 is-pulled-right">Submit</button>
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

export default Home;