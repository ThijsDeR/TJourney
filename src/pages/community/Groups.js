import React from 'react';
import { Link } from "react-router-dom";

// styling
import 'bulma/css/bulma.min.css';
import { title, primaryColor, containerLeftRight, friendsTile, friendItems, notifacationBubble, fakePF, chatContainer, suggestedBox, suggestedTile, pfBox, boldText, lightText, chatDivider, bolderText } from '../../styling/StylingVariables.js';

function Groups(props) {

    return (
        <>
            {/* Suggested groups */}
            <div style={containerLeftRight(props.style)}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title(props.style), ...{ padding: 'unset' } }}>Suggested groups</h1>
                </div>
                {/* TODO: link to see more suggested players */}
                <Link style={{ height: '24px', border: 'unset' }}><div style={{ color: props.style.primaryColor }} >See more</div></Link>
            </div>

            <div style={suggestedBox(props.style)}>

                {/* TODO: four suggested groups form db */}
                {/* Suggested group block */}
                <div style={suggestedTile(props.style)}>
                    <div style={pfBox(props.style)}><div style={fakePF(props.style)}></div></div>
                    <div style={boldText(props.style)}>Name</div>
                    <div style={lightText(props.style)}>x players</div>
                </div>

                {/* Suggested group block */}
                <div style={suggestedTile(props.style)}>
                    <div style={pfBox(props.style)}><div style={fakePF(props.style)}></div></div>
                    <div style={boldText(props.style)}>Name</div>
                    <div style={lightText(props.style)}>x players</div>
                </div>

                {/* Suggested group block */}
                <div style={suggestedTile(props.style)}>
                    <div style={pfBox(props.style)}><div style={fakePF(props.style)}></div></div>
                    <div style={boldText(props.style)}>Name</div>
                    <div style={lightText(props.style)}>x players</div>
                </div>

                {/* Suggested group block */}
                <div style={suggestedTile(props.style)}>
                    <div style={pfBox(props.style)}><div style={fakePF(props.style)}></div></div>
                    <div style={boldText(props.style)}>Name</div>
                    <div style={lightText(props.style)}>x players</div>
                </div>
            </div>

            {/* your groups */}
            <div style={containerLeftRight(props.style)}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title(props.style), ...{ padding: 'unset' } }}>Groups</h1>
                </div>
                {/* TODO: link to add group page? */}
                <Link style={{ height: '24px', border: 'unset' }}><div style={{ color: props.primaryColor }} >Create group</div></Link>
            </div>

            {/* Group block */}
            <div style={chatContainer(props.style)}>
                <div className='groupTile' style={friendsTile(props.style)}>
                    <div className='groupItems' style={friendItems(props.style)}>
                        <div className='groupIcon' style={fakePF(props.style)}></div>
                        <div className='groupInfo'>
                            <div className='groupName' style={{ fontWeight: 'bold' }}> Group name </div>
                            <div className='groupLevel' style={{ fontWeight: 'lighter' }}> <span style={bolderText(props.style)}>groupname</span> : Last message </div>
                        </div>
                    </div>
                    <div className='messageButton' style={notifacationBubble(props.style)}>8</div>
                </div>
                <hr style={chatDivider(props.style)} />

            </div>

            <div style={chatContainer(props.style)}>
                <div className='groupTile' style={friendsTile(props.style)}>
                    <div className='groupItems' style={friendItems(props.style)}>
                        <div className='groupIcon' style={fakePF(props.style)}></div>
                        <div className='groupInfo'>
                            <div className='groupName' style={{ fontWeight: 'bold' }}> Group name </div>
                            <div className='groupLevel' style={{ fontWeight: 'lighter' }}> <span style={bolderText(props.style)}>groupname</span> : Last message </div>
                        </div>
                    </div>
                    <div className='messageButton' style={notifacationBubble(props.style)}>8</div>
                </div>
                <hr style={chatDivider(props.style)} />

            </div>
        </>
    )
}
export default Groups;