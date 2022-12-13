import React from 'react';
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, title, primaryColor, tabs, tabPanel, tab } from '../../styling/StylingVariables.js';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCircle, faAngleRight, faSquare } from '@fortawesome/free-solid-svg-icons'


function Leaderboard({ user, setUser, timeElapsed, isLoading, setIsLoading }) {

    return (
        <>
            <h1 style={title}>Leaderboard</h1>
            <div>Your leaderboard</div>
        </>
    )
}
export default Leaderboard;