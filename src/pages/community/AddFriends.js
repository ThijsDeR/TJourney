import React, { useEffect, useState } from 'react';

import Navigation from "../../components/navigation/Navigation";
import { Link } from "react-router-dom";

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, appContainer, searchBar, chatContainer, friendItems, friendsTile, fakePF, lightText, chatDivider, primaryColor, goBackIndicator, smallButton, unsetLinkStyle } from '../../styling/StylingVariables.js';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { addFriend, getNonFriends } from '../../services/friends-service';
import { calculateLevel } from '../../services/level-service';
import Loading from '../../components/loading/Loading';

function AddFriends({ user, isLoading, setIsLoading }) {
    const [searchInput, setSearchInput] = useState("");
    const [nonFriends, setNonFriends] = useState(undefined)

    useEffect(() => {
        getNonFriends().then((nonFriends) => {
            nonFriends.forEach((nonFriend) => {
                nonFriend.level = calculateLevel(nonFriend.level.amount)
            })
            setNonFriends(nonFriends)
        })
    }, [])

    useEffect(() => {
        if (user && nonFriends) setIsLoading(false)
        
    }, [user, nonFriends, setIsLoading])

    const handleSearchInput = (e) => {
        //  prevent page refresh
        e.preventDefault();
        setSearchInput(e.target.value);
    }


    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={pageStyle(user.preferences.style)}>
                            <div style={appContainer(user.preferences.style)}>

                                <Link to='/community' style={{ textDecoration: 'none' }}>
                                    <div style={goBackIndicator(user.preferences.style)}>
                                        <FontAwesomeIcon icon={faAngleLeft} size='lg' />
                                        <span style={{ paddingLeft: '10px' }}>Friends</span>
                                    </div>
                                </Link>

                                <input
                                    style={searchBar(user.preferences.style)}
                                    type="text"
                                    placeholder="Search"
                                    onChange={handleSearchInput}
                                    value={searchInput} />
                                <div style={{ overflowY: "auto", maxHeight: "100%" }}>
                                    {nonFriends ? nonFriends.map(nonFriend => (
                                        <div className='userDiv' key={nonFriend._id}>
                                            <div style={chatContainer(user.preferences.style)}>
                                                <div className='friendTile' style={{ ...friendsTile(user.preferences.style), ...{ margin: 'unset' } }}>
                                                    <div className='friendItems' style={friendItems(user.preferences.style)}>
                                                        <div className='friendIcon' style={fakePF(user.preferences.style)}></div>
                                                        <div className='friendInfo'>
                                                            <div className='friendName' style={{ fontWeight: 'bold' }}> {nonFriend.username} </div>
                                                            <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Level {nonFriend.level.level} </div>
                                                        </div>
                                                    </div>

                                                    {/* TODO: add friend when button is clicked */}
                                                    <div style={{
                                                        justifySelf: 'flex-end',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                    }}>
                                                        <a href style={unsetLinkStyle(user.preferences.style)} onClick={(e) => {
                                                            addFriend(nonFriend)
                                                            e.target.closest(".userDiv").remove()
                                                            window.location.reload()
                                                        }}>
                                                            <div style={{ ...smallButton(user.preferences.style), ...{ width: '70px' } }}>Add</div>
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
            }
        </>
    )
}
export default AddFriends;