import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { register } from "../../services/auth-service.js";
import { Navigate } from "react-router-dom";

function Register({user, setCurrentUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await register(email, password, username).then(
                (data) => {
                    setCurrentUser(data)
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    if (user) {
        return <Navigate to="/game" replace />;
    }

    return (
        <>
            <Navigation />
            <div style={{ position: "fixed", top: "100px", bottom: "100px", left: "0px", right: "0px" }}>
                <form onSubmit={handleLogin}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <h1 className="is-size-1">Register</h1>
                    </div>
                    <div style={{ padding: "20px" }}>
                        <div className="field">
                            <label className="label">User Name</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                                <span className="icon is-small is-left">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </span>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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
            <Footer />
        </>
    );
}

export default Register;