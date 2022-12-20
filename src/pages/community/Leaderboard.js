import React, { useEffect, useState } from 'react';

import { getFriends } from '../../services/friends-service.js';
import { calculateLevel } from '../../services/level-service.js';

// styling
import 'bulma/css/bulma.min.css';
import { title, myRank, lightText, containerLeftRight, topThreeContainer, topThreePfOne, topThreePfTwoThree, leaderboardContainer, boldText, leaderboardLevel, fakePfLeaderboard, rankingBubbleLeaderboard, leaderboardPFContainer } from '../../styling/StylingVariables.js';

function Leaderboard(user) {

    const [friends, setFriends] = useState(undefined);

    useEffect(() => {
        getFriends().then((friends) => {
            friends.forEach((friend) => {
                friend.user.level = calculateLevel(friend.user.level.amount)
            })
            setFriends(friends)
        });
    }, [])

    // check if friend if undefined if not - sort by level
    friends && friends.sort((a, b) => {
        return b.user.level.level - a.user.level.level
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

                    <div style={boldText}>{friends && friends[1].user.username}</div>
                    <div style={boldText}>{friends && friends[0].user.username}</div>
                    <div style={boldText}>{friends && friends[2].user.username}</div>

                    <div style={lightText}>Level {friends && friends[1].user.level.level}</div>
                    <div style={lightText}>Level {friends && friends[0].user.level.level}</div>
                    <div style={lightText}>Level {friends && friends[2].user.level.level}</div>
                </div>
            </div>

            {/* My rank */}
            <div style={myRank} >
                <div style={containerLeftRight}>
                    <div>Your current rank</div>
                    {/* Rank in the leaderboard */}
                    <div style={boldText}> # {calculateLevel(user.user.level.amount).level} </div>
                </div>
            </div>

            {/* Leaderboard */}
            <h1 style={title}>Leaderboard</h1>

            {
                friends && friends.map((friend, index) => {
                    return <div style={leaderboardContainer} key={index} >
                        <div style={leaderboardPFContainer}>
                            <div style={fakePfLeaderboard}></div>
                            <div style={rankingBubbleLeaderboard}>{index + 1}</div>
                        </div>
                        <div>{friend.user.username}</div>
                        <div style={{ ...leaderboardLevel, ...boldText }}># {friend.user.level.level}</div>
                    </div>
                })
            }


        </>
    )
}
export default Leaderboard;