import React, { useEffect, useState } from 'react';

import { getFriends } from '../../services/friends-service.js';
import { calculateLevel } from '../../services/level-service.js';

// styling
import 'bulma/css/bulma.min.css';
import { title, myRank, lightText, containerLeftRight, topThreeContainer, topThreePfOne, topThreePfTwoThree, leaderboardContainer, boldText, leaderboardLevel, fakePfLeaderboard, rankingBubbleLeaderboard } from '../../styling/StylingVariables.js';

function Leaderboard() {

    const [friends, setFriends] = useState(undefined);

    useEffect(() => {
        getFriends().then((friends) => {
            friends.forEach((friend) => {
                friend.user.level = calculateLevel(friend.user.level.amount)
            })
            setFriends(friends)
            console.log(friends)
        });
    }, [])

    return (
        <>
            <div style={{
                width: '100%', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                {
                    friends && friends.map((friend) => {
                        return (
                            <div key={friend.id}>
                                {friend.user.level.level}
                            </div>
                        )
                    })
                }

                {/* Top three */}
                <div style={topThreeContainer}>
                    <div style={topThreePfTwoThree}></div>
                    <div style={topThreePfOne}></div>
                    <div style={topThreePfTwoThree}></div>

                    <div style={boldText}>Name 2</div>
                    <div style={boldText}>Name 1</div>
                    <div style={boldText}>Name 3</div>

                    <div style={lightText}>Level x</div>
                    <div style={lightText}>Level x</div>
                    <div style={lightText}>Level x</div>
                </div>
            </div>

            {/* My rank */}
            <div style={myRank}>
                <div style={containerLeftRight}>
                    <div>Your current rank</div>
                    {/* Rank in the leaderboard */}
                    <div style={boldText}> #7 </div>
                </div>
            </div>

            {/* Leaderboard */}
            <h1 style={title}>Leaderboard</h1>
            <div style={leaderboardContainer}>
                <div>
                    <div style={fakePfLeaderboard}></div>
                    <div style={rankingBubbleLeaderboard}>4</div>
                </div>
                <div>Geert de Winter</div>
                <div style={leaderboardLevel}>40</div>

                <div>
                    <div style={fakePfLeaderboard}></div>
                    <div style={rankingBubbleLeaderboard}>5</div>
                </div>
                <div>Rosa de jong</div>
                <div style={leaderboardLevel}>35</div>
            </div>

        </>
    )
}
export default Leaderboard;