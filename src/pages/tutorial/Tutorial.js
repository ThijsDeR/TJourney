import React, { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation.js';
import { Navigate } from "react-router-dom";
import Loading from '../../components/loading/Loading.js';
import HomescreenTutorial from './tutorialscreens/homeTutorial.js';

function Tutorial({ user, isLoading, setIsLoading }) {
    const [tutorialPosition, setTutorialPosition] = useState(0);

    function updateTutorialPosition() {
        setTutorialPosition(tutorialPosition + 1);
    }

    useEffect(() => {
        if (user) setIsLoading(false)
    }, [user, setIsLoading])

    if (user === undefined && !isLoading) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0px", bottom: "0px", left: "0px", right: "0px" }}>
                            <HomescreenTutorial />
                        </div >
                        <Navigation user={user} />
                    </>
            }
        </>
    );
}

export default Tutorial;