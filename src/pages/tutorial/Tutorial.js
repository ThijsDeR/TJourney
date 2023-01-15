import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";
import { editTutorial } from '../../services/auth-service.js';
import Loading from '../../components/loading/Loading.js';
import HomescreenTutorial from './tutorialscreens/homeTutorial.js';
import ChallengesTutorial from './tutorialscreens/challengesTutorial.js';
import GameScreenTutorial from './tutorialscreens/GameScreenTutorial.js';
import AccountTutorial from './tutorialscreens/AccountTutorial.js';
import AvatarSelectTutorial from './tutorialscreens/AvatarSelect.js';
import { GoalsCreateTutorial } from './tutorialscreens/GoalsCreateTutorial.js';
import CommunityScreenTutorial from './tutorialscreens/CommunityScreenTutorial.js';
import FinalScreenTutorial from './tutorialscreens/FinalScreenTutorial.js';

function Tutorial({ user, isLoading, setIsLoading }) {
    const [tutorialPosition, setTutorialPosition] = useState(0);
    const [screenPart, setScreenPart] = useState(0);
    const [showSkipModal, setShowSkipModal] = useState(false);
    const [tutorialDone, setTutorialDone] = useState(false);
    const [startTutorial, setStartTutorial] = useState(false);

    function updateTutorialPosition() {
        setScreenPart(0);
        setTutorialPosition(tutorialPosition + 1);
        if (tutorialPosition >= 7) {
            setTutorialDone(true);
        }
    }

    function updateTutorialScreenPart(amount = 1) {
        setScreenPart(screenPart + amount);
    }

    useEffect(() => {
        if (user) setIsLoading(false)
    }, [user, setIsLoading])

    if (user === undefined && !isLoading) {
        return <Navigate to="/login" replace />;
    }


    if (tutorialDone) {
        editTutorial(true).then(
            // Tried using Navigate (outside the then), could not get it to work so I gave up and used href. 
            () => { window.location.href = "/home" }
        );
    }

    const data = { user, updateTutorialPosition, screenPart, updateTutorialScreenPart }
    const TutorialScreens = [
        <HomescreenTutorial {...data} />, <AccountTutorial {...data} />,
        <AvatarSelectTutorial {...data} />, <ChallengesTutorial {...data} />,
        <GoalsCreateTutorial {...data} />, <GameScreenTutorial {...data} />,
        <CommunityScreenTutorial {...data} />, <FinalScreenTutorial {...data} />];

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: "black", overflowY: "auto", overflowX: "hidden" }}>
                            <div className="button has-background-black has-text-white is-size-7" style={{ zIndex: 9999, position: "absolute", opacity: 0.6 }} onClick={() => setShowSkipModal(true)}>Skip</div>
                            {!startTutorial &&
                                <div className="modal is-active px-5" style={{ zIndex: 9999 }}>
                                    <div className="modal-background" />
                                    <div className="modal-card has-background-grey-darker has-text-centered is-size-3 has-text-white" style={{ borderRadius: 10, maxHeight: "60vh" }}>
                                        <div>Welcome to our app about habits!</div>
                                        <div className="modal-card-body has-background-grey-dark is-size-4 has-text-left">
                                            <div className="mb-2">Here we will help you track your habits!</div>
                                            <div className="mb-2">This app helps with the problems of bad habits using a bit of gamification and by doing it together with your friends.</div>
                                            <div className="mb-2">Our app makes improving your habits more fun by playing a game with your friends.</div>
                                            <div className="mb-2">You can send motivational messages to your friends and compete with them for the highest score or streak.</div>
                                        
                                        </div>
                                        <div className="mt-5 is-size-4">Do you wish to do a tutorial?</div>
                                        <div>
                                            <button className="button has-background-success mr-3 has-text-black" onClick={() => setStartTutorial(true)}>Yes</button>
                                            <button className="button has-background-danger ml-3 has-text-black" onClick={() => setTutorialDone(true)}>No</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            {showSkipModal &&
                                <div className="modal is-active px-5" style={{ zIndex: 9999 }}>
                                    <div className="modal-background" />
                                    <div className="modal-content has-background-grey-darker has-text-centered is-size-3 has-text-white" style={{ borderRadius: 10 }}>
                                        <div>Skip tutorial?</div>
                                        <button className="button has-background-danger mr-3 has-text-black" onClick={() => setShowSkipModal(false)}>Cancel</button>
                                        <button className="button has-background-success ml-3 has-text-black" onClick={() => setTutorialDone(true)}>Skip</button>
                                    </div>
                                </div>
                            }
                            {TutorialScreens[tutorialPosition]}
                        </div>
                    </>
            }
        </>
    );
}

export default Tutorial;