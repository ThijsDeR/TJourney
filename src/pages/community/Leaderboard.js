import React from 'react';

// styling
import 'bulma/css/bulma.min.css';
import { title, myRank, lightText, containerLeftRight, topThreeContainer, topThreePfOne, topThreePfTwoThree, leaderboardContainer, boldText, leaderboardLevel, fakePfLeaderboard, rankingBubbleLeaderboard } from '../../styling/StylingVariables.js';

function Leaderboard(props) {

    return (
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

        </>
    )
}
export default Leaderboard;