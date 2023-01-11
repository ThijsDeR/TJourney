import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom';
import Navigation from "../../components/navigation/Navigation";
import { calculateLevel } from '../../services/level-service.js';


// styling
import 'bulma/css/bulma.min.css';
import { title, myRank, lightText, containerLeftRight, topThreeContainer, topThreePfOne, topThreePfTwoThree, leaderboardContainer, leaderboardPFContainer, tabList, centerDiv, boldText, tabListItemContainer, communityTileStyle, tabContent, leaderboardLevel, fakePfLeaderboard, rankingBubbleLeaderboard } from '../../styling/StylingVariables.js';
import Loading from '../../components/loading/Loading';
import { getAllUsers } from '../../services/auth-service';

export default function Leaderboard({ user, isLoading, setIsLoading }) {
    const [users, setUsers] = useState();
    const [rankOfCurrentUser, setRankOfCurrentUser] = useState();

    useEffect(() => {
        if (user) {
            getAllUsers().then((users) => {
                users.forEach((otherUser) => {
                    otherUser.level.level = calculateLevel(otherUser.level.amount)
                })
                users && users.sort((a, b) => {
                    return b.level.amount - a.level.amount
                })

                let rankOfCurrentUser = 0;
                users && users.forEach((otherUser, index) => {
                    if (otherUser._id === user._id) {
                        rankOfCurrentUser = index + 1;
                    }
                })
                setRankOfCurrentUser(rankOfCurrentUser)
                setUsers(users)
                setIsLoading(false)
            })
        }
    }, [user, setIsLoading])

    // check if friend if undefined if not - sort by level



    // find index of current user in user array

    if (user === undefined && !isLoading) {
        return <Navigate to="/login" replace />;
    }

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
                                            <div style={{ margin: "0px 10px 0px 0px" }}>Your current rank</div>
                                            {/* Rank in the leaderboard */}
                                            <div style={boldText(user.preferences.style)}> #{rankOfCurrentUser} </div>
                                        </div>
                                    </div>
                                    <div className="current-user">
                                        <div className="username">
                                            <h2>{user.username}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='Chat-container-leaderboard'>
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

                                        <div style={boldText(user.preferences.style)}>{users && users[1].username}</div>
                                        <div style={boldText(user.preferences.style)}>{users && users[0].username}</div>
                                        <div style={boldText(user.preferences.style)}>{users && users[2].username}</div>

                                        <div style={lightText(user.preferences.style)}>Level {users && users[1].level.level.level}</div>
                                        <div style={lightText(user.preferences.style)}>Level {users && users[0].level.level.level}</div>
                                        <div style={lightText(user.preferences.style)}>Level {users && users[2].level.level.level}</div>
                                    </div>
                                </div>

                                {/* My rank */}
                                <div style={myRank(user.preferences.style)} >
                                    <div style={containerLeftRight(user.preferences.style)}>
                                        <div>Your current rank</div>
                                        {/* Rank in the leaderboard */}
                                        <div style={boldText(user.preferences.style)}> #{rankOfCurrentUser} </div>
                                    </div>
                                </div>

                                {/* Leaderboard */}
                                <h1 style={title(user.preferences)}>Leaderboard</h1>

                                {
                                    users && users.slice(3).map((otherUser, index) => {
                                        return <div style={leaderboardContainer(user.preferences.style)} key={index} >
                                            <div style={leaderboardPFContainer(user.preferences.style)}>
                                                <div style={fakePfLeaderboard(user.preferences.style)}></div>
                                                <div style={rankingBubbleLeaderboard(user.preferences.style)}>
                                                    <span style={{ padding: 'auto' }}>{index + 4}</span>
                                                </div>
                                            </div>
                                            <div>{otherUser.username}</div>
                                            <div style={{ ...leaderboardLevel(user.preferences.style), ...boldText(user.preferences.style) }}>{otherUser.level.level.level}</div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <Navigation user={user} />
                </>
            }
        </>
    )
}