import React from 'react';
import { Link } from "react-router-dom";

// styling
import 'bulma/css/bulma.min.css';
import { title, primaryColor, containerLeftRight, friendsTile, friendItems, notifacationBubble, fakePF, chatContainer, suggestedBox, suggestedTile, pfBox, boldText, lightText, chatDivider, bolderText } from '../../styling/StylingVariables.js';

function Groups() {

    return (
        <>
            {/* Suggested groups */}
            <div style={containerLeftRight}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title, ...{ padding: 'unset' } }}>Suggested groups</h1>
                </div>
                {/* TODO: link to see more suggested players */}
                <Link style={{ height: '24px', border: 'unset' }}><div style={{ color: primaryColor }} >See more</div></Link>
            </div>

            <div style={suggestedBox}>

                {/* TODO: four suggested groups form db */}
                {/* Suggested group block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>x players</div>
                </div>

                {/* Suggested group block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>x players</div>
                </div>

                {/* Suggested group block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>x players</div>
                </div>

                {/* Suggested group block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>x players</div>
                </div>
            </div>

            {/* your groups */}
            <div style={containerLeftRight}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title, ...{ padding: 'unset' } }}>Groups</h1>
                </div>
                {/* TODO: link to add group page? */}
                <Link style={{ height: '24px', border: 'unset' }}><div style={{ color: primaryColor }} >Create group</div></Link>
            </div>

            {/* Group block */}
            <div style={chatContainer}>
                <div className='groupTile' style={friendsTile}>
                    <div className='groupItems' style={friendItems}>
                        <div className='groupIcon' style={fakePF}></div>
                        <div className='groupInfo'>
                            <div className='groupName' style={{ fontWeight: 'bold' }}> Group name </div>
                            <div className='groupLevel' style={{ fontWeight: 'lighter' }}> <span style={bolderText}>groupname</span> : Last message </div>
                        </div>
                    </div>
                    <div className='messageButton' style={notifacationBubble}>8</div>
                </div>
                <hr style={chatDivider} />

            </div>

            <div style={chatContainer}>
                <div className='groupTile' style={friendsTile}>
                    <div className='groupItems' style={friendItems}>
                        <div className='groupIcon' style={fakePF}></div>
                        <div className='groupInfo'>
                            <div className='groupName' style={{ fontWeight: 'bold' }}> Group name </div>
                            <div className='groupLevel' style={{ fontWeight: 'lighter' }}> <span style={bolderText}>groupname</span> : Last message </div>
                        </div>
                    </div>
                    <div className='messageButton' style={notifacationBubble}>8</div>
                </div>
                <hr style={chatDivider} />

            </div>
        </>
    )
}
export default Groups;