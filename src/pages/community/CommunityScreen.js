import React, { useEffect } from 'react';

import Navigation from "../../components/navigation/Navigation";

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, appContainer } from '../../styling/StylingVariables.js';

// tabs
import Tabs from '../../components/tabs/Tabs';

// tab content
import Friends from './Friends.js';
import Groups from './Groups.js';
import Leaderboard from './Leaderboard.js';
import Loading from '../../components/loading/Loading';

function CommunityScreen({ user, isLoading, setIsLoading }) {

    useEffect(() => {
        if (user) setIsLoading(false)
    }, [user, setIsLoading])

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={pageStyle(user.preferences.style)}>
                            <div style={appContainer(user.preferences.style)}>
                                <Tabs style={user.preferences.style}>
                                    <div label="Friends">
                                        <Friends style={user.preferences.style} />
                                    </div>
                                    <div label="Groups">
                                        <Groups style={user.preferences.style} />
                                    </div>
                                    <div label="Leaderboard">
                                        <Leaderboard style={user.preferences.style} />
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                        <Navigation user={user} />
                    </>
            }

        </>
    )
}
export default CommunityScreen;