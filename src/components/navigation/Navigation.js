import "./navigation.css";
import HZLogo from './hz-removebg.png';

import {
    Link
} from "react-router-dom";


function Navigation({ user }) {
    return (
        <>
            <div className="nav-bottom">
                <div className="nav-buttons is-flex">
                    {
                        user ?
                            <>
                                <Link to="/logout">L</Link>
                                <Link to="/challenges">CH</Link>
                                <Link to="/home">H</Link>
                                <Link to="/game">J</Link>
                                <Link>Co</Link>
                            </> :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Sign Up</Link>
                            </>
                    }
                </div>
            </div>
        </>
    );
}

export default Navigation;