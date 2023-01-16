import "./navigation.css";
import {loadCharacter} from "../../services/playerCharacter-service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faHome, faListCheck, faUserGear, faUsers } from '@fortawesome/free-solid-svg-icons';

import {
    Link
} from "react-router-dom";

function setAccountClass(name) {
    const pathObjectArray = {
        account: ['/account', '/avatarselect', '/preferences'],
        challenges: ['/challenges', '/goals/create', '/goals/index'],
        home: ['/home'],
        game: ['/game'],
        community: ['/chatFriends', '/chatGroups', '/leaderboard', '/community', '/friendChat', '/add-group'],
    }

    return pathObjectArray[name].includes(window.location.pathname) ? 'selected' : '';
}

function Navigation({ user }) {
    return (
        <>
            <div className="nav-bottom">
                <div className="nav-buttons is-flex">
                    {
                        user ?
                            <>
                                <Link to="/account" className={setAccountClass("account")}><FontAwesomeIcon icon={faUserGear} /></Link>
                                <Link to="/challenges" className={setAccountClass("challenges")}><FontAwesomeIcon icon={faListCheck} /></Link>
                                <Link to="/home" className={setAccountClass("home")}><FontAwesomeIcon icon={faHome} /></Link>
                                <Link to="/game" className={setAccountClass("game")}><FontAwesomeIcon icon={faMap} /></Link>
                                <Link to="/community" className={setAccountClass("community")}><FontAwesomeIcon icon={faUsers} /></Link>
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
