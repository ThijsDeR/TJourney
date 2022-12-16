import React from 'react';
import { Link } from "react-router-dom";
import { addGroup, getGroups } from '../../services/groups-service.js';

// styling
import 'bulma/css/bulma.min.css';
import { title, primaryColor, containerLeftRight, friendsTile, friendItems, notifacationBubble, fakePF, chatContainer, suggestedBox, suggestedTile, pfBox, boldText, lightText, chatDivider, bolderText } from '../../styling/StylingVariables.js';
import { waitFor } from '@testing-library/react';
const groups = getGroups();

function Groups() {


    return (
        <>
            {/* Suggested friends */}
            <div style={containerLeftRight} onClick={() => addGroup("je Moeder", "639c53f44681d85aedd63268", " ")}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title, ...{ padding: 'unset' } }}>Suggested groups</h1>
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
                    <div style={lightText}>x players</div>
                </div>

                {/* Suggested friend block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>x players</div>
                </div>

                {/* Suggested friend block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>x players</div>
                </div>

                {/* Suggested friend block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>x players</div>
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
            {/* {groups.forEach(element => {
                <div style={chatContainer}>
                <div className='friendTile' style={friendsTile}>
                    <div className='friendItems' style={friendItems}>
                        <div className='friendIcon' style={fakePF}></div>
                        <div className='friendInfo'>
                            <div className='friendName' style={{ fontWeight: 'bold' }}> {element} </div>
                            <div className='friendLevel' style={{ fontWeight: 'lighter' }}> <span style={bolderText}>Friendname</span> : Last message </div>
                        </div>
                    </div>
                    <div className='messageButton' style={notifacationBubble}>8</div>
                </div>
                <hr style={chatDivider} />
            </div>
            })} */}

            <div style={chatContainer}>
                <div className='friendTile' style={friendsTile}>
                    <div className='friendItems' style={friendItems}>
                        <div className='friendIcon' style={fakePF}></div>
                        <div className='friendInfo'>
                            <div className='friendName' style={{ fontWeight: 'bold' }}> Group name </div>
                            <div className='friendLevel' style={{ fontWeight: 'lighter' }}> <span style={bolderText}>Friendname</span> : Last message </div>
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