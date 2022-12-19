import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation.js';
import { Navigate } from "react-router-dom";
import Loading from '../../components/loading/Loading.js';
import HomescreenTutorial from './tutorialscreens/homeTutorial.js';
import ChallengesTutorial from './tutorialscreens/challengesTutorial.js';
import GameScreenTutorial from './tutorialscreens/GameScreenTutorial.js';

function Tutorial({ user, isLoading, setIsLoading }) {
    const [tutorialPosition, setTutorialPosition] = useState(0);
    const [screenPart, setScreenPart] = useState(0);

    function updateTutorialPosition() {
        console.log("next screen")
        setScreenPart(0);
        setTutorialPosition(tutorialPosition + 1);
    }

    function updateTutorialScreenPart() {
        setScreenPart(screenPart + 1);
        console.log(screenPart);
    }

    useEffect(() => {
        if (user) setIsLoading(false)
    }, [user, setIsLoading])

    if (user === undefined && !isLoading) {
        return <Navigate to="/login" replace />;
    }

    const data = { user, updateTutorialPosition, screenPart, updateTutorialScreenPart }
    const TutorialScreens = [<HomescreenTutorial {...data} />, <ChallengesTutorial {...data} />, <GameScreenTutorial {...data} />]
    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: "black", overflowY: "auto", overflowX: "hidden" }}>
                            {TutorialScreens[tutorialPosition]}
                        </div>
                    </>
            }
        </>
    );
}

export default Tutorial;