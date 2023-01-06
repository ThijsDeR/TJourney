import React from 'react';
import { useState, useEffect, useRef } from 'react'
import Loading from '../../components/loading/Loading.js';
import Contacts from "../../components/chat/Contacts.js";
import { getAllUsers } from "../../services/auth-service.js";
import { Link } from 'react-router-dom';
import Navigation from "../../components/navigation/Navigation";

// styling
import 'bulma/css/bulma.min.css';
import { title, myRank, lightText, containerLeftRight, topThreeContainer, topThreePfOne, topThreePfTwoThree, leaderboardContainer, tabList, centerDiv, boldText, tabListItemContainer, communityTileStyle, tabContent, leaderboardLevel, fakePfLeaderboard, rankingBubbleLeaderboard } from '../../styling/StylingVariables.js';

function Leaderboard(user, isLoading) {
    const currentUser = user;

    return (
        <>
            <div className="Chats">

                <div className="containerChat">
                <div className="Contacts">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <div className="tabs" style={tabListItemContainer}>
              <div className="item" style={tabList}>
                <div style={centerDiv}>
                  <ol className="tab-list" style={{display: 'flex'}}>
                    <li style={tabContent}><Link style={{textDecoration: 'none'}} to={'/chatFriends'}>Friends</Link></li>
                    <li style={tabContent}><Link style={{textDecoration: 'none'}} to={'/chatGroups'}>Groups</Link></li>
                    <li style={communityTileStyle}><Link style={{textDecoration: 'none'}} to={'/leaderboard'}>Leaderboard</Link></li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="contacts">

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
                    </div>
                </div>
            </div>

            <Navigation user={user} />
        </>
    )
}
export default Leaderboard;