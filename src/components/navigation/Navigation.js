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
    
        console.log(user, user.preferences, user.preferences.style)
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
                                <Link to="/challenges" style={{...setAccountClass("challenges"), ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faListCheck} /></Link>
                                <Link to="/home" style={{...setAccountClass("home"), ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faHome} /></Link>
                                <Link to="/game" style={{...setAccountClass("game"), ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faMap} /></Link>
                                <Link to="/community" style={{...setAccountClass("community"), ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faUsers} /></Link>
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
