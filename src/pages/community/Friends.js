import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";

// styling
import 'bulma/css/bulma.min.css';
import { title, containerLeftRight, friendsTile, friendItems, fakePF, chatContainer, lightText, chatDivider } from '../../styling/StylingVariables.js';
import { getFriends, removeFriend } from '../../services/friends-service';
import { calculateLevel } from '../../services/level-service';

function Friends(props) {
    const [friends, setFriends] = useState(undefined);

    useEffect(() => {
        getFriends().then((friends) => {
            friends.forEach((friend) => {
                friend.user.level = calculateLevel(friend.user.level.amount)
            })
            setFriends(friends)
            console.log(friends)
        });
    }, [])
    return (
        <>
            {/* Suggested friends */}
            {/* <div style={containerLeftRight(props.style)}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title(props.style), ...{ padding: 'unset' } }}>Suggested players</h1>
                </div>
                TODO: link to see more suggested players
                <Link style={{ height: '24px', border: 'unset' }}><div style={{ color: primaryColor }} >See more</div></Link>
            </div> */}

            {/* <div style={suggestedBox(props.style)}>

                TODO: four suggested friends form db
                Suggested friend block
                <div style={suggestedTile(props.style)}>
                    <div style={pfBox(props.style)}><div style={fakePF(props.style)}></div></div>
                    <div style={boldText(props.style)}>Name</div>
                    <div style={lightText(props.style)}>Level x</div>
                </div>

                Suggested friend block
                <div style={suggestedTile(props.style)}>
                    <div style={pfBox(props.style)}><div style={fakePF(props.style)}></div></div>
                    <div style={boldText(props.style)}>Name</div>
                    <div style={lightText(props.style)}>Level x</div>
                </div>

                Suggested friend block
                <div style={suggestedTile(props.style)}>
                    <div style={pfBox(props.style)}><div style={fakePF(props.style)}></div></div>
                    <div style={boldText(props.style)}>Name</div>
                    <div style={lightText(props.style)}>Level x</div>
                </div>

                Suggested friend block
                <div style={suggestedTile(props.style)}>
                    <div style={pfBox(props.style)}><div style={fakePF(props.style)}></div></div>
                    <div style={boldText(props.style)}>Name</div>
                    <div style={lightText(props.style)}>Level x</div>
                </div>
            </div> */}

            {/* your friends */}
            <div style={containerLeftRight(props.style)}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title(props.style), ...{ padding: 'unset' } }}>Friends</h1>
                </div>
                {/* TODO: link to add friend page? */}
                <Link to={'/add-friend'} style={{ height: '24px', border: 'unset' }}><div style={{ color: props.style.primaryColor }} >Add friend</div></Link>
            </div>

            {/* Friend block */}
            {
                friends ? friends.map((friend) => (
                    // TODO: Delete friends knop
                    <div className='userDiv' style={chatContainer(props.style)} onClick={(e) => {
                        removeFriend(friend.user._id);
                        e.target.closest(".userDiv").remove()
                    }}>
                        <div className='friendTile' style={friendsTile(props.style)}>
                            <div className='friendItems' style={friendItems(props.style)}>
                                <div className='friendIcon' style={fakePF(props.style)}></div>
                                <div className='friendInfo'>
                                    <div className='friendName' style={{ fontWeight: 'bold' }}> {friend.user.username} <em style={lightText(props.style)}>level {friend.user.level.level}</em> </div>
                                    {/* TODO: Get last message */}
                                    <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Last message </div>
                                </div>
                            </div>
                            {/* TODO: Message unread count */}
                            {/* <div className='messageButton' style={notifacationBubble}>0</div> */}
                        </div>
                        <hr style={chatDivider(props.style)} />
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