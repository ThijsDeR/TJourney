import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navigation from "../../components/navigation/Navigation";


// styling
import 'bulma/css/bulma.min.css';
import { title, myRank, lightText, containerLeftRight, topThreeContainer, topThreePfOne, topThreePfTwoThree, leaderboardContainer, tabList, centerDiv, boldText, tabListItemContainer, communityTileStyle, tabContent, leaderboardLevel, fakePfLeaderboard, rankingBubbleLeaderboard } from '../../styling/StylingVariables.js';
import Loading from '../../components/loading/Loading';

export default function Leaderboard({ user, isLoading, setIsLoading }) {
    const [users, setUsers] = useState();
    
    useEffect(() => {
        if (user) {
            setIsLoading(false)
            console.log(user)
        }
    }, [user, setIsLoading])
    
    useEffect(() => {
        getAllTheUsers().then((users) => {
            users.forEach((user) => {
                user.level.level = calculateLevel(user.level.amount)
            })
            setUsers(users)
            console.log(users)
        })
    }, [])


    // check if friend if undefined if not - sort by level
    users && users.sort((a, b) => {
        return b.level.amount - a.level.amount
    })

    let rankOfCurrentUser = 0;

    // find index of current user in user array
    users && users.forEach((user, index) => {
        if (user._id === currentUser.user._id) {
            rankOfCurrentUser = index + 1;
        }
    })


    return (
        <>
            {isLoading ? <Loading /> :
                <>
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

                            <div style={boldText}>{users && users[1].username}</div>
                            <div style={boldText}>{users && users[0].username}</div>
                            <div style={boldText}>{users && users[2].username}</div>

                            <div style={lightText}>Level {users && users[1].level.level.level}</div>
                            <div style={lightText}>Level {users && users[0].level.level.level}</div>
                            <div style={lightText}>Level {users && users[2].level.level.level}</div>
                        </div>
                  </div>

            {/* My rank */}
            <div style={myRank} >
                <div style={containerLeftRight}>
                    <div>Your current rank</div>
                    {/* Rank in the leaderboard */}
                    <div style={boldText}> {rankOfCurrentUser} </div>
                </div>
            </div>

            {/* Leaderboard */}
            <h1 style={title}>Leaderboard</h1>

            {
                users && users.slice(3).map((user, index) => {
                    return <div style={leaderboardContainer} key={index} >
                        <div style={leaderboardPFContainer}>
                            <div style={fakePfLeaderboard}></div>
                            <div style={rankingBubbleLeaderboard}>
                                <span style={{ padding: 'auto' }}>{index + 4}</span>
                            </div>
                        </div>
                        <div>{user.username}</div>
                        <div style={{ ...leaderboardLevel, ...boldText }}>{user.level.level.level}</div>
                    </div>
                })
            }
                    <Navigation user={user.preferences.user} />
                </>
            }
        </>
    )
}