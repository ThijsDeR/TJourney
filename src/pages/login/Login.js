import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'

function Login() {
    return (
        <>
            <Navigation />
            <div style={{ position: "fixed", top: "100px", bottom: "100px", left: "0px", right: "0px" }}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h1 className="is-size-1">Login</h1>
                </div>
                <div style={{padding: "20px"}}>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="example@gmail.com" onChange={() => {}}/>
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
                            <input className="input" type="password" placeholder="Password" onChange={() => {}}/>
                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faKey} />
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                        <a href class="help is-link">Don't have an account?</a>
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
            </div>
            <Footer />
        </>
    );
}

export default Login;