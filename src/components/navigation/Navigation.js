import "./navigation.css";
import { loadCharacter } from "../../services/playerCharacter-service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faHome, faListCheck, faUserGear, faUsers } from '@fortawesome/free-solid-svg-icons';
import {
    Link
} from "react-router-dom";
import { navButtonContainer, selectedStyling, buttonStyling } from "./NavStylingVariables";


function Navigation({ style, loggedIn = true }) {
    function setAccountClass(name) {
        const pathObjectArray = {
            account: ['/account', '/avatarselect', '/preferences'],
            challenges: ['/challenges'],
            home: ['/home'],
            game: ['/game'],
            community: ['/chatFriends', '/chatGroups', '/leaderboard', '/community', '/friendChat'],
            login: ['/login'],
            register: ['/register']
        }

        return pathObjectArray[name].includes(window.location.pathname) ? selectedStyling(style) : {};
    }
    return (
        <>
            <div className="nav-bottom">
                <div style={navButtonContainer(style)}>
                    {
                        loggedIn ?
                            <>
                                <Link to="/account" style={{ ...buttonStyling(style), ...setAccountClass("account") }}><FontAwesomeIcon icon={faUserGear} /></Link>
                                <Link to="/challenges" style={{ ...buttonStyling(style), ...setAccountClass("challenges") }}><FontAwesomeIcon icon={faListCheck} /></Link>
                                <Link to="/home" style={{ ...buttonStyling(style), ...setAccountClass("home") }}><FontAwesomeIcon icon={faHome} /></Link>
                                <Link to="/game" style={{ ...buttonStyling(style), ...setAccountClass("game") }}><FontAwesomeIcon icon={faMap} /></Link>
                                <Link to="/community" style={{ ...buttonStyling(style), ...setAccountClass("community") }}><FontAwesomeIcon icon={faUsers} /></Link>
                            </> :
                            <>
                                <Link to="/login" style={{ ...buttonStyling(style), ...setAccountClass("login") }}>Login</Link>
                                <Link to="/register" style={{ ...buttonStyling(style), ...setAccountClass("register") }}>Sign Up</Link>
                            </>
                    }

                </div>
            </div>
        </>
    );
}

export default Navigation;
