// color options
const red = '#FF686B';
export const white = '#F7F7F7'; // high emphasis
export const black = '#121212';

// when you change this color, you will change the primary color of the whole page
export const primaryColor = red;
export const secondaryColor = '#323232';
export const tertiaryColor = '#505050';

export const mediumEmphasis = '#ABABAB';
export const disabledEmphasis = '#636363';

// standard padding and margin
export const paddingPage = '10px 20px'
export const marginFinishedChallenges = '3px 0px 3px 30px'

export const unsetLinkStyle = (style) => {
    return {
        textDecoration: 'none',
        color: 'unset',
    }
}

export const pageStyle = (style) => {
    return {
        position: 'fixed',
        top: '0px',
        bottom: '65px',
        left: '0px',
        right: '0px',
        backgroundColor: style.backgroundColor,
        color: style.textColor,
        overflow: 'auto'
    }
}

export const appContainer = (style) => {
    return {
        padding: paddingPage,
        width: '100%',
        height: "100%",
        display: "flex",
        flexDirection: "column",
    }
}

export const title = (style) => {
    return {
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '15px 0px 0px 0px',
        color: style.textColor,
    }
}

export const goBackIndicator = (style) => {
    return {
        margin: '10px 0px, 50px 0px',
        fontSize: '18px',
        color: style.primaryColor,
    }
}

export const communityTileStyle = (style) => {
    return {
        backgroundColor: style.primaryColor,
        borderRadius: '5px',
        margin: '0px 0px 0px 10px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
}

export const boldText = (style) => {
    return {
        fontWeight: 'bold',
    }
}

export const bolderText = (style) => {
    return {
        fontWeight: 'bolder',
    }
}

export const lightText = (style) => {
    return {
        fontWeight: 'lighter',
    }
}

export const bigTitle = (style) => {
    return {
        fontSize: '25px',
        fontWeight: 'bold',
        color: style.textColor,
    }
}
export const buttonStyle = (style) => {
    return {
        color: style.primaryColor,
        height: '35px',
    }
}

export const overflow = (style) => {
    return {
        overflow: "auto"
    }
}

export const tileStyle = (style) => {
    return {
        backgroundColor: style.primaryColor,
        borderRadius: '5px',
        padding: '3px 10px',
        margin: '10px 0px',
        height: '70px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
}

// content to the left and right side of the page
export const containerLeftRight = (style) => {
    return {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
    }
}
export const containerCenteredBetween = (style) => {
    return {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}
export const containerCenteredLeftItem = (style) => {
    return {
        margin: '0px 10px 0px 0px',
    }
}
export const goals = (style) => {
    return {
        backgroundColor: style.secondaryColor,
        margin: '15px 0px 0px 0px',
        // TODO: fix height
        padding: paddingPage
    }
}

export const goalItem = (style) => {
    return {
        display: 'inline-block',
        margin: '10px 0px 10px 10px',
    }
}
export const tabListItemContainer = (style) => {
    return {
        display: 'table',
        width: '100%',
    }
}
export const tabList = (style) => {
    return {
        display: 'inline block',
        display: 'inline',
        padding: '6px 10px',
        width: '100%',
        margin: '10px auto'
    }
}
export const tabListItem = (style) => {
    return {
        color: mediumEmphasis,
    }
}
export const tabListItemActive = (style) => {
    return {
        backgroundColor: style.primaryColor,
        color: style.textColor,
        borderRadius: '5px',
    }
}


export const tabContent = (style) => {
    return {
        padding: '0px 0px 0px 10px',
    }
}
export const centerDiv = (style) => {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}
export const smallButton = (style) => {
    return {
        borderRadius: '5px',
        backgroundColor: style.primaryColor,
        padding: '2px 8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}



export const fakePF = (style) => {
    return {
        backgroundColor: style.textColor,
        borderRadius: '50%',
        height: '50px',
        width: '50px',
        margin: '5px 10px 5px 5px',
    }
}


export const friendsTile = (style) => {
    return {
        color: style.textColor,
        borderRadius: '5px',
        padding: '3px 10px',
        margin: '10px 0px',
        height: '70px',
        width: '100%',
        display: 'inline-grid',
        gridTemplateColumns: '1.5fr 0.5fr',
        justifyContent: 'start',
        alignItems: 'center',
    }

}

export const friendItems = (style) => {
    return {
        display: 'flex',
        alignItems: 'center',
    }
}

export const notifacationBubble = (style) => {
    return {
        backgroundColor: style.primaryColor,
        justifySelf: 'flex-end',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50px',
        height: '30px',
        width: '30px',
        padding: '0px 10px',
    }
}


export const chatContainer = (style) => {
    return {
        display: 'block',
    }
}
export const chatDivider = (style) => {
    return {
        backgroundColor: style.secondaryColor,
        margin: '0px 0px 0px 75px',
    }
}


export const suggestedBox = (style) => {
    return {
        display: 'table',
        width: '100%',
        margin: '20px 0px',
        borderCollapse: 'separate',
        borderSpacing: '5px 0',
    }
}
export const suggestedTile = (style) => {
    return {
        backgroundColor: style.secondaryColor,
        borderRadius: '5px',
        height: '125px',
        display: 'table-cell',
        textAlign: 'center',
        verticalAlign: 'middle',
    }
}


export const pfBox = (style) => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}
export const myRank = (style) => {
    return {
        backgroundColor: style.primaryColor,
        padding: '5px 10px',
        borderRadius: '5px',
    }
}


export const topThreeContainer = (style) => {
    return {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        justifyItems: 'center',
        margin: '20px 0px',
    }
}

export const topThreePfOne = (style) => {
    return {
        backgroundColor: style.textColor,
        height: '120px',
        width: '120px',
        borderRadius: '50%',
        display: 'inline-block',
        alignSelf: 'flex-end'
    }
}


export const topThreePfTwoThree = (style) => {
    return {
        backgroundColor: style.textColor,
        height: '70px',
        width: '70px',
        borderRadius: '50%',
        bottom: '0',
        display: 'inline-block',
        alignSelf: 'flex-end',
        alignItems: 'center',
    }
}


export const leaderboardContainer = (style) => {
    return {
        backgroundColor: style.secondaryColor,
        padding: '10px 10px',
        borderRadius: '5px',
        margin: '10px 0px',
        width: '100%',
        display: 'flex',
        // gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'center',
        height: '70px',
        alignItems: 'center'
    }
}

export const leaderboardLevel = (style) => {
    return {
        marginLeft: 'auto'
    }

}

export const fakePfLeaderboard = (style) => {
    return {
        backgroundColor: style.textColor,
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        margin: '5px 10px 5px 5px',
    }
}

export const rankingBubbleLeaderboard = (style) => {
    return {
        backgroundColor: style.primaryColor,
        height: '25px',
        width: '25px',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        display: 'flex',

        // put div above the pf
        zIndex: '1',
        position: 'relative',
        top: '-55px',
        left: '0px',
    }
}

export const rankingBubbleLeaderboardOneTwoThree = (style) => {
    return {
        backgroundColor: style.primaryColor,
        height: '30px',
        width: '30px',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        display: 'flex',
        marginLeft: '20px',
        transform: 'translateY(-45%)',
    }
}

export const leaderboardPFContainer = (style) => {
    return {
        transform: 'translateY(18%)',
    }
}

export const searchBar = (style) => {
    return {
        backgroundColor: style.secondaryColor,
        borderRadius: '5px',
        padding: '5px 10px',
        margin: '20px 0px',
        width: '100%',
        display: 'flex',
        color: style.textColor,
        border: '1px solid' + mediumEmphasis,
        fontSize: '18px'
    }
}

export const tileGoalsCreate = (style) => {
    return {
        backgroundColor: style.primaryColor,
        borderRadius: '5px',
        padding: '3px 10px',
        margin: '10px 0px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    }
}

export const rankingBarContainer = (style) => {
    return {
        width: '100%',
        display: 'flex',
        padding: '0px 0px 0px 10px'
    }

}

export const levelBubble = (style) => {
    return {
        backgroundColor: style.primaryColor,
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        display: 'flex',
        color: black,
        zIndex: '1',
        position: 'relative',
    }

}

export const progressContainer = (style) => {
    return {
        backgroundColor: white,
        borderRadius: '0px 15px 15px 0px',
        margin: '10px 0px',
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        transform: 'translateX(-5%)',

    }

}

export const progress = (style, progressPercentage) => {
    return {
        height: '100%',
        backgroundColor: style.primaryColor,
        width: progressPercentage + '%',
        opacity: '0.85',
    }
}
