import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from "../../components/navigation/Navigation";

// styling
import 'bulma/css/bulma.min.css';
import { title, myRank, lightText, containerLeftRight, topThreeContainer, topThreePfOne, topThreePfTwoThree, leaderboardContainer, tabList, centerDiv, boldText, tabListItemContainer, communityTileStyle, tabContent, leaderboardLevel, fakePfLeaderboard, rankingBubbleLeaderboard } from '../../styling/StylingVariables.js';

export default function Leaderboard({ user, isLoading, setIsLoading }) {
    const currentUser = user;
    const props = user.preferences

    return (
        <>
            <div className="Chats">

                <div className="containerChat">
                    <div className="Contacts">
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <div className="tabs" style={tabListItemContainer(props.style)}>
                            <div className="item" style={tabList(props.style)}>
                                <div style={centerDiv(props.style)}>
                                    <ol className="tab-list" style={{ display: 'flex' }}>
                                        <li style={tabContent(props.style)}><Link style={{ textDecoration: 'none' }} to={'/chatFriends'}>Friends</Link></li>
                                        <li style={tabContent(props.style)}><Link style={{ textDecoration: 'none' }} to={'/chatGroups'}>Groups</Link></li>
                                        <li style={communityTileStyle(props.style)}><Link style={{ textDecoration: 'none' }} to={'/leaderboard'}>Leaderboard</Link></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="contacts">

                            {/* My rank */}
                            <div style={myRank(props.style)}>
                                <div style={containerLeftRight(props.style)}>
                                    <div>Your current rank</div>
                                    {/* Rank in the leaderboard */}
                                    <div style={boldText(props.style)}> #7 </div>
                                </div>
                            </div>
                            <div className="current-user">
                                <div className="username">
                                    <h2>{currentUser.user.username}</h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{
                                width: '100%', display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                                {/* Top three */}
                                <div style={topThreeContainer(props.style)}>
                                    <div style={topThreePfTwoThree(props.style)}></div>
                                    <div style={topThreePfOne(props.style)}></div>
                                    <div style={topThreePfTwoThree(props.style)}></div>

                                    <div style={boldText(props.style)}>Name 2</div>
                                    <div style={boldText(props.style)}>Name 1</div>
                                    <div style={boldText(props.style)}>Name 3</div>

                                    <div style={lightText(props.style)}>Level x</div>
                                    <div style={lightText(props.style)}>Level x</div>
                                    <div style={lightText(props.style)}>Level x</div>
                                </div>
                            </div>

                            {/* My rank */}
                            <div style={myRank(props.style)}>
                                <div style={containerLeftRight(props.style)}>
                                    <div>Your current rank</div>
                                    {/* Rank in the leaderboard */}
                                    <div style={boldText(props.style)}> #7 </div>
                                </div>
                            </div>

                            {/* Leaderboard */}
                            <h1 style={title(props.style)}>Leaderboard</h1>
                            <div style={leaderboardContainer(props.style)}>
                                <div>
                                    <div style={fakePfLeaderboard(props.style)}></div>
                                    <div style={rankingBubbleLeaderboard(props.style)}>4</div>
                                </div>
                                <div>Geert de Winter</div>
                                <div style={leaderboardLevel(props.style)}>40</div>

                                <div>
                                    <div style={fakePfLeaderboard(props.style)}></div>
                                    <div style={rankingBubbleLeaderboard(props.style)}>5</div>
                                </div>
                                <div>Rosa de jong</div>
                                <div style={leaderboardLevel(props.style)}>35</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Navigation user={props.user} />
        </>
    )
}