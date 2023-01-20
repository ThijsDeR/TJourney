import Navigation from "../../components/navigation/Navigation.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { register } from "../../services/auth-service.js";
import { Navigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function Register({ user, reloadUserHandler }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(undefined)

    const handleRegister = (e) => {
        e.preventDefault();
        try {
            register(email, password, username).then(
                (data) => {
                    reloadUserHandler()
                },
                (error) => {
                    setError(error)
                }
            );
        } catch (err) {
            setError(error)
        }
    };

    if (user) {
        return <Navigate to="/home" replace />;
    }

    const deleteNotificationHandler = (e) => {
        setError(null)
    }

    return (
        <>

            <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: "black" }}>
                <form onSubmit={handleRegister}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <h1 className="is-size-1 has-text-white">Register</h1>
                    </div>
                    {
                        error ?
                            <div className="notification is-danger is-light">
                                <button className="delete" onClick={deleteNotificationHandler}></button>
                                {error}
                            </div> : ''
                    }
                    <div style={{ padding: "20px" }}>
                        <div className="field">
                            <label className="label has-text-white">User Name</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input has-text-white has-background-black" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-white">Email</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input has-text-white has-background-black" type="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Password</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input has-text-white has-background-black" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faKey} />
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">Submit</button>
                            </div>
                            <div className="control">
                                <button className="button is-link is-light">Cancel</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Navigation style={{
                backgroundColor: "#121212",
                primaryColor: "#FF686B",
                secondaryColor: "#323232",
                tertiaryColor: "#505050",
                textColor: "#F7F7F7"
            }} loggedIn={false} />
        </>
    )
}

export default Register;