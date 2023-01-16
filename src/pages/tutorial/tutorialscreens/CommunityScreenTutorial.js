import React from 'react';
// styling
import 'bulma/css/bulma.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faHome, faListCheck, faUserGear, faUsers } from '@fortawesome/free-solid-svg-icons';

// tabs
import Tabs from '../../../components/tabs/Tabs';
import Friends from '../../community/Friends.js';
import Leaderboard from '../../community/Leaderboard.js';

// tab content
import { Link } from "react-router-dom";
import { myRank, topThreeContainer, topThreePfOne, topThreePfTwoThree, leaderboardContainer, leaderboardLevel, fakePfLeaderboard, rankingBubbleLeaderboard, pageStyle, appContainer, title, primaryColor, containerCenteredBetween, containerLeftRight, goals, tileStyle, containerCenteredLeftItem, smallButton, white, friendsTile, friendItems, notifacationBubble, fakePF, chatContainer, suggestedBox, suggestedTile, pfBox, boldText, lightText, chatDivider, bolderText } from '../../../styling/StylingVariables.js';
import { useEffect, useState } from "react";
import { buttonStyling, navButtonContainer, selectedStyling } from "../../../components/navigation/NavStylingVariables";

function CommunityScreenTutorial({ user, screenPart, updateTutorialScreenPart, updateTutorialPosition}) {

    return (
        <>
            <div style={{ zIndex: "20", backgroundColor: "rgb(0, 0, 0, 0.5)", width: "100vw", height: "100vh", position: "absolute", left: "0px", top: "0px" }}
                onClick={() => updateTutorialScreenPart()} />

            <div style={{ zIndex: 30, width: "100%", position: "absolute" }}>
                {screenPart === 0 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        This is the community
                    </div>
                }
                {screenPart === 1 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        Here you can see your friends
                    </div>
                }
                {screenPart === 2 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        Add new ones
                    </div>
                }
                {screenPart === 3 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        And see the leaderboard of your friends
                    </div>
                }
                {screenPart > 3 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        Let's go back to home
                    </div>
                }
            </div>

            <div style={pageStyle(user.preferences.style)}>
                <div style={appContainer(user.preferences.style)}>
                    <Tabs style={user.preferences.style}>

                        <div label="Friends">
                            <div style={containerLeftRight(user.preferences.style)} >
                                <div style={{ verticalAlign: 'middle' }}>
                                    <h1 style={{ ...title(user.preferences.style), ...{ padding: 'unset' } }}>Friends</h1>
                                </div>
                                <Link to={'/add-friend'} style={{ height: '24px', border: 'unset' }}><div style={{ color: user.preferences.style.primaryColor }} >Add friend</div></Link>
                            </div>
                            <div className='friendTile' style={friendsTile(user.preferences.style)}>
                                <div className='friendItems' style={friendItems(user.preferences.style)}>
                                    <div className='friendIcon' style={fakePF(user.preferences.style)}></div>
                                    <div className='friendInfo'>
                                        <div className='friendName' style={{ fontWeight: 'bold' }}> James <em style={lightText(user.preferences.style)}>level {54}</em> </div>
                                        <div className='friendLevel' style={{ fontWeight: 'lighter' }}> What was that about... </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={chatDivider(user.preferences.style)} />
                            <div className='friendTile' style={friendsTile(user.preferences.style)}>
                                <div className='friendItems' style={friendItems(user.preferences.style)}>
                                    <div className='friendIcon' style={fakePF(user.preferences.style)}></div>
                                    <div className='friendInfo'>
                                        <div className='friendName' style={{ fontWeight: 'bold' }}> Mighel <em style={lightText(user.preferences.style)}>level {6398}</em> </div>
                                        <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Did you know that the first windmill... </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={chatDivider(user.preferences.style)} />
                            <div className='friendTile' style={friendsTile(user.preferences.style)}>
                                <div className='friendItems' style={friendItems(user.preferences.style)}>
                                    <div className='friendIcon' style={fakePF(user.preferences.style)}></div>
                                    <div className='friendInfo'>
                                        <div className='friendName' style={{ fontWeight: 'bold' }}> Jumpman Mario <em style={lightText(user.preferences.style)}>level {64}</em> </div>
                                        <div className='friendLevel' style={{ fontWeight: 'lighter' }}> How do you like... </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={chatDivider(user.preferences.style)} />
                        </div>

                        <div label="Leaderboard">
                            <Leaderboard user={user}/>
                        </div>
                    </Tabs>
                </div>
            </div>


            <div className="nav-bottom" style={screenPart > 3 ? { zIndex: 30 } : {}}>
                <div style={navButtonContainer(user.preferences.style)} >
                    {user ?
                        <>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faUserGear} /></Link>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faListCheck} /></Link>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style)}} onClick={screenPart > 3 ? () => updateTutorialPosition() : () => { }}><FontAwesomeIcon icon={faHome} /></Link>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faMap} /></Link>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style), ...selectedStyling(user.preferences.style)}}><FontAwesomeIcon icon={faUsers} /></Link>
                        </> :
                        <>
                            <Link to="#" style={{ ...buttonStyling(user.preferences.style)}}>Login</Link>
                            <Link to="#" style={{ ...buttonStyling(user.preferences.style)}}>Sign Up</Link>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default CommunityScreenTutorial;