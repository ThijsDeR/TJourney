import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navigation from "../../components/navigation/Navigation";


// styling
import 'bulma/css/bulma.min.css';
import { title, myRank, lightText, containerLeftRight, topThreeContainer, topThreePfOne, topThreePfTwoThree, leaderboardContainer, tabList, centerDiv, boldText, tabListItemContainer, communityTileStyle, tabContent, leaderboardLevel, fakePfLeaderboard, rankingBubbleLeaderboard } from '../../styling/StylingVariables.js';
import Loading from '../../components/loading/Loading';

export default function Leaderboard({ user, isLoading, setIsLoading }) {

    useEffect(() => {
        if (user) {
            setIsLoading(false)
            console.log(user)
        }
    }, [user, setIsLoading])


    return (
        <>
            {isLoading ? <Loading /> :
                <>
                    <div className="Chats">

                        <div className="containerChat">
                            <div className="Contacts">
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <div className="tabs" style={tabListItemContainer(user.preferences.style)}>
                                    <div className="item" style={tabList(user.preferences.style)}>
                                        <div style={centerDiv(user.preferences.style)}>
                                            <ol className="tab-list" style={{ display: 'flex' }}>
                                                <li style={tabContent(user.preferences.style)}><Link style={{ textDecoration: 'none' }} to={'/chatFriends'}>Friends</Link></li>
                                                <li style={tabContent(user.preferences.style)}><Link style={{ textDecoration: 'none' }} to={'/chatGroups'}>Groups</Link></li>
                                                <li style={communityTileStyle(user.preferences.style)}><Link style={{ textDecoration: 'none' }} to={'/leaderboard'}>Leaderboard</Link></li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="contacts">

                                    {/* My rank */}
                                    <div style={myRank(user.preferences.style)}>
                                        <div style={containerLeftRight(user.preferences.style)}>
                                            <div>Your current rank</div>
                                            {/* Rank in the leaderboard */}
                                            <div style={boldText(user.preferences.style)}> #7 </div>
                                        </div>
                                    </div>
                                    <div className="current-user">
                                        <div className="username">
                                            <h2>{user.username}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Chat-container' style={{margin: "100px 0px 0px 0px"}}>
                                    <div style={{
                                        width: '100%', display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>

                                        {/* Top three */}
                                        <div style={topThreeContainer(user.preferences.style)}>
                                            <div style={topThreePfTwoThree(user.preferences.style)}></div>
                                            <div style={topThreePfOne(user.preferences.style)}></div>
                                            <div style={topThreePfTwoThree(user.preferences.style)}></div>

                                            <div style={boldText(user.preferences.style)}>Name 2</div>
                                            <div style={boldText(user.preferences.style)}>Name 1</div>
                                            <div style={boldText(user.preferences.style)}>Name 3</div>

                                            <div style={lightText(user.preferences.style)}>Level x</div>
                                            <div style={lightText(user.preferences.style)}>Level x</div>
                                            <div style={lightText(user.preferences.style)}>Level x</div>
                                        </div>
                                    </div>

                                    {/* My rank */}
                                    <div style={myRank(user.preferences.style)}>
                                        <div style={containerLeftRight(user.preferences.style)}>
                                            <div>Your current rank</div>
                                            {/* Rank in the leaderboard */}
                                            <div style={boldText(user.preferences.style)}> #7 </div>
                                        </div>
                                    </div>

                                    {/* Leaderboard */}
                                    <h1 style={title(user.preferences.style)}>Leaderboard</h1>
                                    <div style={leaderboardContainer(user.preferences.style)}>
                                        <div>
                                            <div style={fakePfLeaderboard(user.preferences.style)}></div>
                                            <div style={rankingBubbleLeaderboard(user.preferences.style)}>4</div>
                                        </div>
                                        <div>Geert de Winter</div>
                                        <div style={leaderboardLevel(user.preferences.style)}>40</div>

                                        <div>
                                            <div style={fakePfLeaderboard(user.preferences.style)}></div>
                                            <div style={rankingBubbleLeaderboard(user.preferences.style)}>5</div>
                                        </div>
                                        <div>Rosa de jong</div>
                                        <div style={leaderboardLevel(user.preferences.style)}>35</div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <Navigation user={user.preferences.user} />
                </>
            }
        </>
    )
}