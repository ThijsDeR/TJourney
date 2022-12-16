import React from 'react';

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

function AddFriends({ user }) {
    return (
        <>
            <div style={pageStyle}>
                <div style={appContainer}>
                    Add friends
                </div>
            </div>
            <Navigation user={user} />
        </>
    )
}
export default AddFriends;