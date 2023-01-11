import "./navigation.css";
import {loadCharacter} from "../../services/playerCharacter-service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faHome, faListCheck, faUserGear, faUsers } from '@fortawesome/free-solid-svg-icons';

import {
    Link
} from "react-router-dom";

function setAccountClass(linkNumber) {
    let answer;
    const pathObjectArray = {
        accountButton: ['/account', '/avatarselect', '/preferences'],
        challengesButton: ['/challenges'],
        homeButton: ['/home'],
        gameButton: ['/game'],
        communityButton: ['/chatFriends', '/chatGroups', '/leaderboard'],
    };
    if (linkNumber === 0) {
        pathObjectArray.accountButton.forEach((element) => {
            if (window.location.pathname === element) {
                answer = 'selected';
            }
        })
    } else if (linkNumber === 1) {
        pathObjectArray.challengesButton.forEach((element) => {
            if (window.location.pathname === element) {
                answer = 'selected';
            }
        })
    } else if (linkNumber === 2) {
        pathObjectArray.homeButton.forEach((element) => {
            if (window.location.pathname === element) {
                answer = 'selected';
            }
        })
    } else if (linkNumber === 3) {
        pathObjectArray.gameButton.forEach((element) => {
            if (window.location.pathname === element) {
                answer = 'selected';
            }
        })
    } else if (linkNumber === 4) {
        pathObjectArray.communityButton.forEach((element) => {
            if (window.location.pathname === element) {
                answer = 'selected';
            }
        })
    } else {
        answer = undefined;
    }
    return answer;
}

function Navigation({ user }) {
    return (
        <>
            <div className="nav-bottom">
                <div className="nav-buttons is-flex">
                    {
                        user ?
                            <>
                                <Link to="/account" className={setAccountClass(0)}><FontAwesomeIcon icon={faUserGear} /></Link>
                                <Link to="/challenges" className={setAccountClass(1)}><FontAwesomeIcon icon={faListCheck} /></Link>
                                <Link to="/home" className={setAccountClass(2)}><FontAwesomeIcon icon={faHome} /></Link>
                                <Link to="/game" className={setAccountClass(3)}><FontAwesomeIcon icon={faMap} /></Link>
                                <Link to="/chatFriends" className={setAccountClass(4)}><FontAwesomeIcon icon={faUsers} /></Link>
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