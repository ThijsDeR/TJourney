import React from "react";
import { paddingPage, rankingBarContainer, levelBubble, progressContainer, progress, black } from "../../styling/StylingVariables.js"

function RankingBar(props) {

    const { user, level } = props

    function rankingBarProgressPercentage() {
        return level.xp / level.neededXP * 100
    }

    return (
        <div style={{ padding: paddingPage }}>
            <h2 style={{ paddingLeft: "10px", color: "#121212", fontSize: "1.3rem", fontWeight: 'bold' }}>{user ? user.username : ""} </h2>
            <hr style={{ backgroundColor: "#121212", margin: '0px 10px 5px 10px' }}></hr>

            {/* TODO: refactor to component */}
            <div style={rankingBarContainer(user.preferences.style)}>
                <div style={levelBubble(user.preferences.style)}>{level ? `${level.level}` : ""}</div>
                <div style={progressContainer(user.preferences.style)}>
                    <div style={progress(user.preferences.style, rankingBarProgressPercentage())}>
                        <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                            <div style={{ margin: 'auto', color: black }}>{level.xp}/{level.neededXP}</div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RankingBar;