import React from 'react';
import { Link } from "react-router-dom";

import Navigation from "../../components/navigation/Navigation";

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, title, primaryColor, tabs, tabPanel, tab, myRank, bigTitle, lightText, myRankItemLeft, myRankItemRight, containerLeftRight, topThreeContainer, topThreePfOne, topThreePfTwoThree, topThreeTileThree, leaderboardContainer, boldText, leaderboardLevel, fakePfLeaderboard, rankingBubbleLeaderboard } from '../../styling/StylingVariables.js';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCircle, faAngleRight, faSquare } from '@fortawesome/free-solid-svg-icons'


function Leaderboard({ user, setUser, timeElapsed, isLoading, setIsLoading }) {

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