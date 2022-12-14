import React from 'react';
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, title, primaryColor, containerCenteredBetween, containerLeftRight, goals, tileStyle, containerCenteredLeftItem, smallButton, white, friendsTile, friendItems, notifacationBubble, fakePF, chatContainer, suggestedBox, suggestedTile, pfBox, boldText, lightText, chatDivider } from '../../styling/StylingVariables.js';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCircle, faAngleRight, faSquare } from '@fortawesome/free-solid-svg-icons'

function Friends({ user, setUser, timeElapsed, isLoading, setIsLoading }) {

    return (
        <>
            {/* Suggested friends */}
            <div style={containerLeftRight}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title, ...{ padding: 'unset' } }}>Suggested players</h1>
                </div>
                {/* TODO: link to see more suggested players */}
                <Link style={{ height: '24px', border: 'unset' }}><div style={{ color: primaryColor }} >See more</div></Link>
            </div>

            <div style={suggestedBox}>

                {/* TODO: four suggested friends form db */}
                {/* Suggested friend block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>Level x</div>
                </div>

                {/* Suggested friend block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>Level x</div>
                </div>

                {/* Suggested friend block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>Level x</div>
                </div>

                {/* Suggested friend block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>Level x</div>
                </div>
            </div>

            {/* your friends */}
            <div style={containerLeftRight}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title, ...{ padding: 'unset' } }}>Chats</h1>
                </div>
                {/* TODO: link to add friend page? */}
                <Link style={{ height: '24px', border: 'unset' }}><div style={{ color: primaryColor }} >New chat</div></Link>
            </div>

            {/* Friend block */}
            <div style={chatContainer}>
                <div className='friendTile' style={friendsTile}>
                    <div className='friendItems' style={friendItems}>
                        <div className='friendIcon' style={fakePF}></div>
                        <div className='friendInfo'>
                            <div className='friendName' style={{ fontWeight: 'bold' }}> Name <em style={lightText}>level x</em> </div>
                            <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Last message </div>
                        </div>
                    </div>
                    <div className='messageButton' style={notifacationBubble}>8</div>
                </div>
                <hr style={chatDivider} />

            </div>

            <div style={chatContainer}>
                <div className='friendTile' style={friendsTile}>
                    <div className='friendItems' style={friendItems}>
                        <div className='friendIcon' style={fakePF}></div>
                        <div className='friendInfo'>
                            <div className='friendName' style={{ fontWeight: 'bold' }}> Name <em style={lightText}>level x</em> </div>
                            <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Last message </div>
                        </div>
                    </div>
                    <div className='messageButton' style={notifacationBubble}>8</div>
                </div>
                <hr style={chatDivider} />

            </div>


        </>
    )
}
export default Friends;