import "./navigation.css";
import {loadCharacter} from "../../services/playerCharacter-service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faHome, faListCheck, faUserGear, faUsers } from '@fortawesome/free-solid-svg-icons';
import {
    Link
} from "react-router-dom";
import { navButtonContainer, selectedStyling, buttonStyling } from "./NavStylingVariables";


function Navigation({ user }) {
    function setAccountClass(name) {
        const pathObjectArray = {
            account: ['/account', '/avatarselect', '/preferences'],
            challenges: ['/challenges'],
            home: ['/home'],
            game: ['/game'],
            community: ['/chatFriends', '/chatGroups', '/leaderboard', '/community', '/friendChat'],
        }
    
        return pathObjectArray[name].includes(window.location.pathname) ? selectedStyling(user.preferences.style) : {};
    }
    return (
        <>
            <div className="nav-bottom">
                <div style={navButtonContainer(user.preferences.style)}>
                    {
                        user ?
                            <>
                                <Link to="/account" style={{...buttonStyling(user.preferences.style), ...setAccountClass("account")}}><FontAwesomeIcon icon={faUserGear} /></Link>
                                <Link to="/challenges" style={{...buttonStyling(user.preferences.style), ...setAccountClass("challenges")}}><FontAwesomeIcon icon={faListCheck} /></Link>
                                <Link to="/home" style={{...buttonStyling(user.preferences.style), ...setAccountClass("home")}}><FontAwesomeIcon icon={faHome} /></Link>
                                <Link to="/game" style={{...buttonStyling(user.preferences.style), ...setAccountClass("game")}}><FontAwesomeIcon icon={faMap} /></Link>
                                <Link to="/community" style={{...buttonStyling(user.preferences.style), ...setAccountClass("community")}}><FontAwesomeIcon icon={faUsers} /></Link>
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
