import "./navigation.css";
import {loadCharacter} from "../../services/playerCharacter-service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faHome, faListCheck, faUserGear, faUsers } from '@fortawesome/free-solid-svg-icons';

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
                                <Link to="/account" className={window.location.pathname === '/account' ? 'selected' : window.location.pathname === '/avatarselect' ? 'selected' : undefined}><FontAwesomeIcon icon={faUserGear} /></Link>
                                <Link to="/challenges" className={window.location.pathname === '/challenges' ? 'selected' : undefined}><FontAwesomeIcon icon={faListCheck} /></Link>
                                <Link to="/home" className={window.location.pathname === '/home' ? 'selected' : undefined}><FontAwesomeIcon icon={faHome} /></Link>
                                <Link to="/game" className={window.location.pathname === '/game' ? 'selected' : undefined}><FontAwesomeIcon icon={faMap} /></Link>
                                <Link to="/chatFriends" className={window.location.pathname === '/chatFriends' ? 'selected' :
                                     window.location.pathname === '/chatGroups' ? 'selected' :
                                     window.location.pathname === '/leaderboard' ? 'selected' :
                                     undefined}>
                                        <FontAwesomeIcon icon={faUsers} />
                                </Link>
                                {/* <Link to="/community"> Co</Link> */}
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