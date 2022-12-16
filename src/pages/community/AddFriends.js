import React, { useState } from 'react';

import Navigation from "../../components/navigation/Navigation";

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, appContainer, searchBar, chatContainer, friendItems, friendsTile, fakePF, lightText, chatDivider, primaryColor, goBackIndicator } from '../../styling/StylingVariables.js';

// tabs
import Tabs from '../../components/tabs/Tabs';

// tab content
import Friends from './Friends.js';
import Groups from './Groups.js';
import Leaderboard from './Leaderboard.js';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function AddFriends({ user }) {

    const [searchInput, setSearchInput] = useState("");

    //  test data
    const users = [
        { name: "John", level: 1, id: 1 },
        { name: "Jane", level: 2, id: 2 },
        { name: "Jack", level: 3, id: 3 },
        { name: "Jill", level: 4, id: 4 },
        { name: "Jenny", level: 5, id: 5 },
        { name: "Jen", level: 6, id: 6 },
        { name: "Jenna", level: 7, id: 7 },
    ];

    const handleSearchInput = (e) => {
        //  prevent page refresh
        e.preventDefault();
        setSearchInput(e.target.value);
        console.log(searchInput);
    }

    const searchResults = users.filter(user => user.name.toLowerCase().includes(searchInput.toLowerCase()));

    return (
        <>
            <div style={pageStyle}>
                <div style={appContainer}>

                    <div style={goBackIndicator}>
                        <FontAwesomeIcon icon={faAngleLeft} size='lg' />
                        <span style={{ paddingLeft: '10px' }}>Friends</span>
                    </div>



                    <input
                        style={searchBar}
                        type="text"
                        placeholder="Search"
                        onChange={handleSearchInput}
                        value={searchInput} />
                    {searchResults.map(user => (
                        <div key={user.id}>
                            <div style={chatContainer}>
                                <div className='friendTile' style={{ ...friendsTile, ...{ margin: 'unset' } }}>
                                    <div className='friendItems' style={friendItems}>
                                        <div className='friendIcon' style={fakePF}></div>
                                        <div className='friendInfo'>
                                            <div className='friendName' style={{ fontWeight: 'bold' }}> {user.name} </div>
                                            <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Level {user.level} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div >
            </div >
            <Navigation user={user} />
        </>
    )
}
export default AddFriends;