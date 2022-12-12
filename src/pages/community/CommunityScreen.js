import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCircle, faAngleRight, faSquare } from '@fortawesome/free-solid-svg-icons'

import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import 'bulma/css/bulma.min.css';

import { getAllChallenges } from "../../services/goal-service.js";
import { getGameSession, setSteps } from "../../services/game-service.js";
import { Navigate } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import { calculateLevel } from '../../services/level-service';
import { getCurrentUser } from '../../services/auth-service';

import { title } from '../../styling/StylingVariables.js';

function CommunityScreen({ user, setUser, timeElapsed, isLoading, setIsLoading }) {

    return (
        <>
            <div style={{ position: "fixed", top: "0px", left: "0px", right: "0px", zIndex: 999 }}>
                <div className="is-flex is-justify-content-center">
                    <h1 style={title}>hi</h1>
                </div>
            </div>
            <Navigation user={user} />
        </>
    )
}
export default CommunityScreen;