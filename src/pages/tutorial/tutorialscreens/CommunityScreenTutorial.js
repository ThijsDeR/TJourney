import React from 'react';
// styling
import 'bulma/css/bulma.min.css';
// tabs
import Tabs from '../../../components/tabs/Tabs';
// tab content
import { Link } from "react-router-dom";
import { myRank, topThreeContainer, topThreePfOne, topThreePfTwoThree, leaderboardContainer, leaderboardLevel, fakePfLeaderboard, rankingBubbleLeaderboard, pageStyle, appContainer, title, primaryColor, containerCenteredBetween, containerLeftRight, goals, tileStyle, containerCenteredLeftItem, smallButton, white, friendsTile, friendItems, notifacationBubble, fakePF, chatContainer, suggestedBox, suggestedTile, pfBox, boldText, lightText, chatDivider, bolderText } from '../../../styling/StylingVariables.js';
import { useEffect, useState } from "react";

function CommunityScreenTutorial({ user, screenPart, updateTutorialScreenPart, updateTutorialPosition }) {
    const [group, setGroup] = useState(undefined);
    const [leaderboard, setLeaderboard] = useState(undefined);

    // Had to do it this way due to how the labels work, which I can't give a z-index without editing other code
    function updateGroupZIndex() {
        if (group === undefined) {
            return;
        }
        if (screenPart === 3) {
            group.style.cssText += "z-index: 30; position: relative; color: white";
            group.addEventListener("click", () => { updateTutorialScreenPart() });
        } else {
            group.style.cssText += "z-index: 0"
        }
    }

    function updateLeaderboardZIndex() {
        if (leaderboard === undefined) {
            return;
        }
        if (screenPart === 6) {
            leaderboard.style.cssText += "z-index: 30; position: relative; color: white";
            leaderboard.addEventListener("click", () => { updateTutorialScreenPart() });
        } else {
            leaderboard.style.cssText += "z-index: 0"
        }
    }

    useEffect(() => {
        // Makes sure everything loaded, otherwise sometimes returns undefined
        if (screenPart > 0) {
            [...document.querySelectorAll("li")]
                .filter(a => a.textContent.includes("Groups"))
                .forEach(a => setGroup(a), updateGroupZIndex());

            [...document.querySelectorAll("li")]
                .filter(a => a.textContent.includes("Leaderboard"))
                .forEach(a => setLeaderboard(a), updateLeaderboardZIndex());
        }

    }, [screenPart])


    return (
        <>
            <div style={{ zIndex: "20", backgroundColor: "rgb(0, 0, 0, 0.5)", width: "100vw", height: "100vh", position: "absolute", left: "0px", top: "0px" }}
                onClick={screenPart !== 3 && screenPart !== 6 ? () =>
                    (screenPart > 12 ? updateTutorialPosition() : updateTutorialScreenPart())
                    : () => { }} />

            <div style={{ zIndex: 30, width: "100%", position: "absolute" }}>
                {screenPart === 0 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        This is the community
                    </div>
                }
                {screenPart === 1 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        Here you can see your suggested friends
                    </div>
                }
                {screenPart === 2 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        And your current friends
                    </div>
                }
                {screenPart === 3 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        Let's go to groups
                    </div>
                }
                {screenPart === 4 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        Here you can see your suggested groups
                    </div>
                }
                {screenPart === 5 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        And the groups you're in
                    </div>
                }
                {screenPart === 6 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        Let's go to the leaderboard
                    </div>
                }
                {screenPart === 7 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        Here you can see the leaderboard of your friends
                    </div>
                }
                {screenPart === 8 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        It shows your top three friends
                    </div>
                }
                {screenPart === 9 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        Your current place
                    </div>
                }
                {screenPart === 10 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        And the rest of the leaderboard
                    </div>
                }
                {screenPart === 11 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        That's it for the tutorial
                    </div>
                }
                {screenPart === 12 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        You can redo this tutorial from your account page
                    </div>
                }
                {screenPart === 13 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ top: "80vh", position: "relative" }}>
                        We hope you enjoy our app!
                    </div>
                }
            </div>

            <div style={{ ...pageStyle, position: "static" }}>
                <div style={appContainer}>
                    <Tabs>
                        {/* FRIENDS */}
                        <div label="Friends">
                            <div style={screenPart === 1 ?
                                { ...containerLeftRight, zIndex: 30, position: "relative" }
                                :
                                containerLeftRight}>
                                <div style={{ verticalAlign: 'middle' }}>
                                    <h1 style={{ ...title, ...{ padding: 'unset' } }}>Suggested players</h1>
                                </div>
                                <Link style={{ height: '24px', border: 'unset' }}><div style={{ color: primaryColor }} >See more</div></Link>
                            </div>

                            <div style={screenPart === 1 ?
                                { ...suggestedBox, zIndex: 30, position: "relative" }
                                :
                                suggestedBox
                            }>

                                <div style={suggestedTile}>
                                    <div style={pfBox}><div style={fakePF}></div></div>
                                    <div style={boldText}>Kevin</div>
                                    <div style={lightText}>Level 655</div>
                                </div>

                                <div style={suggestedTile}>
                                    <div style={pfBox}><div style={fakePF}></div></div>
                                    <div style={boldText}>Kevin</div>
                                    <div style={lightText}>Level 231</div>
                                </div>

                                <div style={suggestedTile}>
                                    <div style={pfBox}><div style={fakePF}></div></div>
                                    <div style={boldText}>Kevin</div>
                                    <div style={lightText}>Level 311</div>
                                </div>

                                <div style={suggestedTile}>
                                    <div style={pfBox}><div style={fakePF}></div></div>
                                    <div style={boldText}>Jolene</div>
                                    <div style={lightText}>Level 9</div>
                                </div>
                            </div>

                            <div style={screenPart === 2 ? { zIndex: 30, position: 'relative' } : {}}>
                                <div className='friendTile' style={friendsTile}>
                                    <div className='friendItems' style={friendItems}>
                                        <div className='friendIcon' style={fakePF}></div>
                                        <div className='friendInfo'>
                                            <div className='friendName' style={{ fontWeight: 'bold' }}> TeaEyes <em style={lightText}>level 9823</em> </div>
                                            {/* TODO: Get last message */}
                                            <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Last message About that program</div>
                                        </div>
                                    </div>
                                </div>
                                <hr style={chatDivider} />

                                <div className='friendTile' style={friendsTile}>
                                    <div className='friendItems' style={friendItems}>
                                        <div className='friendIcon' style={fakePF}></div>
                                        <div className='friendInfo'>
                                            <div className='friendName' style={{ fontWeight: 'bold' }}> Jim <em style={lightText}>level 2</em> </div>
                                            <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Last message Hello?</div>
                                        </div>
                                    </div>
                                    <div className='messageButton' style={notifacationBubble}>2</div>
                                </div>
                                <hr style={chatDivider} />

                                <div className='friendTile' style={friendsTile}>
                                    <div className='friendItems' style={friendItems}>
                                        <div className='friendIcon' style={fakePF}></div>
                                        <div className='friendInfo'>
                                            <div className='friendName' style={{ fontWeight: 'bold' }}> Niek <em style={lightText}>level 501</em> </div>
                                            <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Last message Bij wijze van de </div>
                                        </div>
                                    </div>
                                </div>
                                <hr style={chatDivider} />
                            </div>
                        </div>

                        {/* GROUPS */}
                        <div label="Groups">
                            <div style={screenPart === 4 ? { ...containerLeftRight, zIndex: 30, position: "relative" } : containerLeftRight}>
                                <div style={{ verticalAlign: 'middle' }}>
                                    <h1 style={{ ...title, ...{ padding: 'unset' } }}>Suggested groups</h1>
                                </div>
                                {/* TODO: link to see more suggested players */}
                                <Link style={{ height: '24px', border: 'unset' }}><div style={{ color: primaryColor }} >See more</div></Link>
                            </div>

                            <div style={screenPart === 4 ? { zIndex: 30, position: 'relative' } : {}}>
                                <div style={suggestedBox}>
                                    {/* TODO: four suggested groups form db */}
                                    {/* Suggested group block */}
                                    <div style={suggestedTile}>
                                        <div style={pfBox}><div style={fakePF}></div></div>
                                        <div style={boldText}>Kevins</div>
                                        <div style={lightText}>4 players</div>
                                    </div>

                                    {/* Suggested group block */}
                                    <div style={suggestedTile}>
                                        <div style={pfBox}><div style={fakePF}></div></div>
                                        <div style={boldText}>BBB</div>
                                        <div style={lightText}>21 players</div>
                                    </div>

                                    {/* Suggested group block */}
                                    <div style={suggestedTile}>
                                        <div style={pfBox}><div style={fakePF}></div></div>
                                        <div style={boldText}>Brogrammers</div>
                                        <div style={lightText}>7 players</div>
                                    </div>

                                    {/* Suggested group block */}
                                    <div style={suggestedTile}>
                                        <div style={pfBox}><div style={fakePF}></div></div>
                                        <div style={boldText}>Bike</div>
                                        <div style={lightText}>2 players</div>
                                    </div>
                                </div>
                            </div>

                            {/* your groups */}
                            <div style={screenPart === 5 ? { ...containerLeftRight, zIndex: 30, position: "relative" } : containerLeftRight}>
                                <div style={{ verticalAlign: 'middle' }}>
                                    <h1 style={{ ...title, ...{ padding: 'unset' } }}>Groups</h1>
                                </div>
                                {/* TODO: link to add group page? */}
                                <Link style={{ height: '24px', border: 'unset' }}><div style={{ color: primaryColor }} >Create group</div></Link>
                            </div>

                            {/* Group block */}
                            <div style={screenPart === 5 ? { zIndex: 30, position: 'relative' } : {}}>
                                <div style={chatContainer}>
                                    <div className='groupTile' style={friendsTile}>
                                        <div className='groupItems' style={friendItems}>
                                            <div className='groupIcon' style={fakePF}></div>
                                            <div className='groupInfo'>
                                                <div className='groupName' style={{ fontWeight: 'bold' }}> Inazuma seven </div>
                                                <div className='groupLevel' style={{ fontWeight: 'lighter' }}> <span style={bolderText}>Last message: </span> The tutorial is mostly </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr style={chatDivider} />

                                </div>

                                <div style={chatContainer}>
                                    <div className='groupTile' style={friendsTile}>
                                        <div className='groupItems' style={friendItems}>
                                            <div className='groupIcon' style={fakePF}></div>
                                            <div className='groupInfo'>
                                                <div className='groupName' style={{ fontWeight: 'bold' }}> Mineshaft </div>
                                                <div className='groupLevel' style={{ fontWeight: 'lighter' }}> <span style={bolderText}>Last message: </span> I found a mine </div>
                                            </div>
                                        </div>
                                        <div className='messageButton' style={notifacationBubble}>2</div>
                                    </div>
                                    <hr style={chatDivider} />
                                </div>
                            </div>
                        </div>

                        {/* Leaderboard */}
                        <div label="Leaderboard">
                            <div style={{
                                width: '100%', display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                                {/* Top three */}
                                <div style={screenPart === 8 ? { ...topThreeContainer, zIndex: 30, position: 'relative' } : topThreeContainer}>
                                    <div style={topThreePfTwoThree}></div>
                                    <div style={topThreePfOne}></div>
                                    <div style={topThreePfTwoThree}></div>

                                    <div style={boldText}>Mitchel</div>
                                    <div style={boldText}>TeaEyes</div>
                                    <div style={boldText}>Steve</div>

                                    <div style={lightText}>Level 9001</div>
                                    <div style={lightText}>Level 9823</div>
                                    <div style={lightText}>Level 3045</div>
                                </div>
                            </div>

                            {/* My rank */}
                            <div style={screenPart === 9 ? { ...myRank, zIndex: 30, position: "relative" } : myRank}>
                                <div style={containerLeftRight}>
                                    <div>Your current rank</div>
                                    {/* Rank in the leaderboard */}
                                    <div style={boldText}> #5 </div>
                                </div>
                            </div>

                            {/* Leaderboard */}
                            <div style={screenPart === 10 ? { zIndex: 30, position: "relative" } : {}}>
                                <h1 style={title}>Leaderboard</h1>
                                <div style={leaderboardContainer}>
                                    <div>
                                        <div style={fakePfLeaderboard}></div>
                                        <div style={rankingBubbleLeaderboard}>4</div>
                                    </div>
                                    <div>Jessie</div>
                                    <div style={leaderboardLevel}>2031</div>

                                    <div>
                                        <div style={fakePfLeaderboard}></div>
                                        <div style={rankingBubbleLeaderboard}>6</div>
                                    </div>
                                    <div>Jason</div>
                                    <div style={leaderboardLevel}>1877</div>

                                    <div>
                                        <div style={fakePfLeaderboard}></div>
                                        <div style={rankingBubbleLeaderboard}>7</div>
                                    </div>
                                    <div>Niek</div>
                                    <div style={leaderboardLevel}>522</div>

                                    <div>
                                        <div style={fakePfLeaderboard}></div>
                                        <div style={rankingBubbleLeaderboard}>8</div>
                                    </div>
                                    <div>Ivy</div>
                                    <div style={leaderboardLevel}>3</div>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div >
            <div className="nav-bottom">
                <div className="nav-buttons is-flex" >
                    {user ?
                        <>
                            <Link to="#">L</Link>
                            <Link to="#">CH</Link>
                            <Link to="#">H</Link>
                            <Link to="#">J</Link>
                            <Link>Co</Link>
                        </> :
                        <>
                            <Link to="#">Login</Link>
                            <Link to="#">Sign Up</Link>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default CommunityScreenTutorial;