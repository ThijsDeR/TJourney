import React, { useEffect, useState } from 'react';

import { getFriends } from '../../services/friends-service.js';
import { calculateLevel } from '../../services/level-service.js';
import { getAllUsers } from '../../services/auth-service.js';

// styling
import 'bulma/css/bulma.min.css';
import { title, myRank, lightText, containerLeftRight, topThreeContainer, topThreePfOne, topThreePfTwoThree, leaderboardContainer, boldText, leaderboardLevel, fakePfLeaderboard, rankingBubbleLeaderboard, leaderboardPFContainer } from '../../styling/StylingVariables.js';

function Leaderboard(currentUser) {

    const [users, setUsers] = useState();

    useEffect(() => {
        getAllUsers().then((users) => {
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
            <div style={{
                width: '100%', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                {/* Top three */}
                <div style={topThreeContainer}>
                    <div style={topThreePfTwoThree}></div>
                    <div style={topThreePfOne}></div>
                    <div style={topThreePfTwoThree}></div>

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


        </>
    )
}
export default Leaderboard;