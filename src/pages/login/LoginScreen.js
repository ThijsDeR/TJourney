import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { getCurrentUser, login } from "../../services/auth-service.js";
import { Link, Navigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";

function Login({ user, setCurrentUser, isLoading, setIsLoading }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(undefined)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            login(email, password).then(
                (data) => {
                    setCurrentUser(data)
                },
                (error) => {
                    setError(error.response.data.error)
                }
            );
        } catch (error) {
            setError(error)
        }
    };

    console.log(user, isLoading)
    if (user && !isLoading) {
        return <Navigate to="/home" replace />;

    }

    const deleteNotificationHandler = (e) => {
        setError(null)
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: "black" }}>
                            <form onSubmit={handleLogin}>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <h1 className="is-size-1 has-text-white">Login</h1>
                                </div>
                                {
                                    error ?
                                        <div class="notification is-danger is-light">
                                            <button class="delete" onClick={deleteNotificationHandler}></button>
                                            {error}
                                        </div> : ''
                                }
                                <div style={{ padding: "20px" }}>
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
                                        <a href class="help is-link"><Link to="/register">Don't have an account?</Link></a>
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
                        <Navigation user={user} />
                    </>
            }
        </>
    );
}

export default Login;