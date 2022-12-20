import React, { useEffect, useState } from 'react';

import Navigation from "../../components/navigation/Navigation";
import { Link, Navigate } from "react-router-dom";

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, appContainer, searchBar, chatContainer, friendItems, friendsTile, fakePF, lightText, chatDivider, primaryColor, goBackIndicator, smallButton, unsetLinkStyle } from '../../styling/StylingVariables.js';

// tabs
import Tabs from '../../components/tabs/Tabs';

// tab content
import Friends from './Friends.js';
import Groups from './Groups.js';
import Leaderboard from './Leaderboard.js';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { addFriend, getNonFriends } from '../../services/friends-service';
import { calculateLevel } from '../../services/level-service';

function AddFriends({ user }) {
    const [searchInput, setSearchInput] = useState("");
    const [nonFriends, setNonFriends] = useState(undefined)

    //  test data
    // const users = [
    //     { name: "John", level: 1, id: 1 },
    //     { name: "Jane", level: 2, id: 2 },
    //     { name: "Jack", level: 3, id: 3 },
    //     { name: "Jill", level: 4, id: 4 },
    //     { name: "Jenny", level: 5, id: 5 },
    //     { name: "Jen", level: 6, id: 6 },
    //     { name: "Jenna", level: 7, id: 7 },
    // ];

    useEffect(() => {
        getNonFriends().then((nonFriends) => {
            nonFriends.forEach((nonFriend) => {
                nonFriend.level = calculateLevel(nonFriend.level.amount)
            })
            setNonFriends(nonFriends)
            console.log(nonFriends)
        })
    }, [])

    const handleSearchInput = (e) => {
        //  prevent page refresh
        e.preventDefault();
        setSearchInput(e.target.value);
    }


    return (
        <>
            <div style={pageStyle}>
                <div style={appContainer}>

                    <Link to='/community' style={{ textDecoration: 'none' }}>
                        <div style={goBackIndicator}>
                            <FontAwesomeIcon icon={faAngleLeft} size='lg' />
                            <span style={{ paddingLeft: '10px' }}>Friends</span>
                        </div>
                    </Link>

                    <input
                        style={searchBar}
                        type="text"
                        placeholder="Search"
                        onChange={handleSearchInput}
                        value={searchInput} />
                    <div style={{overflowY: "auto", maxHeight: "100%"}}>
                        {nonFriends ? nonFriends.map(user => (
                            <div className='userDiv' key={user._id}>
                                <div style={chatContainer}>
                                    <div className='friendTile' style={{ ...friendsTile, ...{ margin: 'unset' } }}>
                                        <div className='friendItems' style={friendItems}>
                                            <div className='friendIcon' style={fakePF}></div>
                                            <div className='friendInfo'>
                                                <div className='friendName' style={{ fontWeight: 'bold' }}> {user.username} </div>
                                                <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Level {user.level.level} </div>
                                            </div>
                                        </div>

                                        {/* TODO: add friend when button is clicked */}
                                        <div style={{
                                            justifySelf: 'flex-end',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                            <a href style={unsetLinkStyle} onClick={(e) => {
                                                addFriend(user._id)
                                                e.target.closest(".userDiv").remove()
                                            }}>
                                                <div style={{ ...smallButton, ...{ width: '70px' } }}>Add</div>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        )) : ""}
                    </div>
                </div >
            </div >
            <Navigation user={user} />
        </>
    )
}
export default AddFriends;