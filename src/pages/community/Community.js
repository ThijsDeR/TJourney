import React, { useEffect } from 'react';

import Navigation from "../../components/navigation/Navigation";

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, appContainer } from '../../styling/StylingVariables.js';

// tabs
import Tabs from '../../components/tabs/Tabs';

// tab content
import Friends from './Friends.js';
import Leaderboard from './Leaderboard.js';

function CommunityScreen({ user }) {

    return (
        <>
            <div style={pageStyle(user.preferences.style)}>
                <div style={appContainer(user.preferences.style)}>
                    <Tabs style={user.preferences.style}>
                        <div label="Friends">
                            <Friends user={user}/>
                        </div>
                        <div label="Leaderboard">
                            <Leaderboard user={user}/>
                        </div>
                    </Tabs>
                </div>
            </div>
            <Navigation style={user.preferences.style} />
        </>
    )
}
export default CommunityScreen;