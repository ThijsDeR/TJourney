import "./navigation.css";
import HZLogo from './hz-removebg.png';

import {
    Link
} from "react-router-dom";


function Navigation({user}) {
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation" style={{ position: "fixed", top: "0px", left: "0px", right: "0px", height: "50px", minHeight: "50px" }}>
                <div className="navbar-brand" style={{ minHeight: "50px", height: "50px" }}>
                    <div className="navbar-item is-flex is-justify-content-start">
                        <img src={HZLogo} width="40" style={{ maxHeight: "50px" }} alt="" />
                        <h3>Tjourney</h3>
                    </div>

                    <button type="button" className="navbar-burger" style={{ minHeight: "50px", height: "50px" }} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => {
                        document.querySelector(".navbar-menu").classList.toggle("is-active")
                        document.querySelector(".navbar-burger").classList.toggle("is-active")
                    }}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div id="navbarBasicExample" className="navbar-menu" style={{ backgroundColor: "rgba(250, 250, 250)" }}>
                    <div className="navbar-start">
                        <a href className="navbar-item">
                            <Link to="/home">Home</Link>
                        </a>

                        <a href className="navbar-item">
                            Documentation
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            {
                                user ? <>
                                    <div className="buttons">
                                        <a href className="button is-link is-light">
                                            <Link to="/logout">Logout</Link>
                                        </a>
                                        <a href className="button is-primary">
                                        {user.username ? user.username : "No Username"}
                                        </a>
                                    </div>
                                </> : <>
                                    <div className="buttons">
                                        <a href className="button is-primary">
                                            <strong><Link to="/register">Signup</Link></strong>
                                        </a>
                                        <a href className="button is-link is-light">
                                            <Link to="/login">Log in</Link>
                                        </a>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;