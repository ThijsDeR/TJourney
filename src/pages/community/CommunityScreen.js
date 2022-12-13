import React from 'react';
import { Link } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";

import { getAllChallenges } from "../../services/goal-service.js";
import { getGameSession, setSteps } from "../../services/game-service.js";
import { Navigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { calculateLevel } from '../../services/level-service';
import { getCurrentUser } from '../../services/auth-service';

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, title, primaryColor, tabs, tabPanel, tab, appContainer } from '../../styling/StylingVariables.js';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCircle, faAngleRight, faSquare } from '@fortawesome/free-solid-svg-icons'

// tabs
import Tabs from '../../components/tabs/Tabs';
import Tab from '../../components/tabs/Tab';

// tab content
import Friends from './Friends.js';
import Groups from './Groups.js';
import Leaderboard from './Leaderboard.js';

function CommunityScreen({ user, setUser, timeElapsed, isLoading, setIsLoading }) {

    return (
        <>
            <div style={pageStyle}>
                <div style={appContainer}>
                    <Tabs>
                        <div label="Friends">
                            <Friends />
                        </div>
                        <div label="Groups">
                            <Groups />
                        </div>
                        <div label="Leaderboard">
                            <Leaderboard />
                        </div>
                    </Tabs>
                </div>
            </div>
            <Navigation user={user} />
        </>
    )
}
export default CommunityScreen;