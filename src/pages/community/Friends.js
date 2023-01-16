import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

// styling
import 'bulma/css/bulma.min.css';
import { title, containerLeftRight, friendsTile, friendItems, fakePF, chatContainer, lightText, chatDivider } from '../../styling/StylingVariables.js';
import { getFriends } from '../../services/friends-service';
import { calculateLevel } from '../../services/level-service';


function Friends({ user }) {
    const [friends, setFriends] = useState(undefined);

    useEffect(() => {
        setFriends(user.friends)
    }, [])

    return (
        <>
            {/* your friends */}
            <div style={containerLeftRight(user.preferences.style)}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title(user.preferences.style), ...{ padding: 'unset' } }}>Friends</h1>
                </div>
                <Link to={'/add-friend'} style={{ height: '24px', border: 'unset' }}><div style={{ color: user.preferences.style.primaryColor }} >Add friend</div></Link>
            </div>

            {/* Friend block */}
            {
                friends ? friends.map((friend) => (
                    <div className='userDiv' style={chatContainer(user.preferences.style)} onClick={() => {
                        window.location.href = `/friendChat?id=${friend.user._id}`;
                    }}>
                        <div className='friendTile' style={friendsTile(user.preferences.style)}>
                            <div className='friendItems' style={friendItems(user.preferences.style)}>
                                <div className='friendIcon' style={fakePF(user.preferences.style)}></div>
                                <div className='friendInfo'>
                                    <div className='friendName' style={{ fontWeight: 'bold' }}> {friend.username} <em style={lightText(user.preferences.style)}>level {friend.level.level}</em> </div>
                                    {/* TODO: Get last message */}
                                    <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Last message </div>
                                </div>
                            </div>
                        </div>
                        <hr style={chatDivider(user.preferences.style)} />
                    </div>
                )) : ""
            }

            {
                friends && friends.length === 0 ? "No friends" : ""
            }
        </>
    )
}
export default Friends;