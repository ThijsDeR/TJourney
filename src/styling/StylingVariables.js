// color options
const purple = '#BB86FC';
const blue = '#57ADDD';
const yellow = '#FFBC6F';
const green = '#61C688';
const red = '#FF686B';
export const white = '#F7F7F7'; // high emphasis
const backgroundColor = '#121212';

// when you change this color, you will change the primary color of the whole page
export const primaryColor = red;
export const secondaryColor = '#323232';
export const tertiaryColor = '#505050';

export const mediumEmphasis = '#ABABAB';
export const disabledEmphasis = '#636363';

// standard padding and margin
export const paddingPage = '10px 20px'
export const marginFinishedChallenges = '3px 0px 3px 30px'

export const unsetLinkStyle = {
    textDecoration: 'none',
    color: 'unset',
}

export const pageStyle = {
    position: 'fixed',
    top: '0px',
    bottom: '50px',
    left: '0px',
    right: '0px',
    backgroundColor: backgroundColor,
    color: white,
    overflowY: 'auto',
}

export const appContainer = {
    padding: paddingPage,
    width: '100%',
    height: "100%",
    display: "flex",
    flexDirection: "column",
}

export const title = {
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '15px 0px 0px 0px',
}

export const goBackIndicator = {
    color: primaryColor,
    margin: '10px 0px, 50px 0px',
    fontSize: '18px',
}

export const boldText = {
    fontWeight: 'bold',
}

export const bolderText = {
    fontWeight: 'bolder',
}

export const lightText = {
    fontWeight: 'lighter',
}

export const bigTitle = {
    fontSize: '25px',
    fontWeight: 'bold',
}

export const buttonStyle = {
    color: primaryColor,
    height: '35px',
}

export const tileStyle = {
    backgroundColor: primaryColor,
    borderRadius: '5px',
    padding: '3px 10px',
    margin: '10px 0px',
    height: '70px',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
}

// content to the left and right side of the page
export const containerLeftRight = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
}

export const containerCenteredBetween = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}

export const containerCenteredLeftItem = {
    margin: '0px 10px 0px 0px',
}

export const goals = {
    backgroundColor: secondaryColor,
    margin: '15px 0px 0px 0px',
    // TODO: fix height
    padding: paddingPage
}

export const goalItem = {
    display: 'inline-block',
    margin: '10px 0px 10px 10px',
}

export const tabListItemContainer = {
    display: 'table',
    width: '100%',
}

export const tabList = {
    display: 'inline block',
    display: 'inline',
    padding: '6px 10px',
    width: '100%',
    margin: '10px auto'
}

export const tabListItem = {
    color: mediumEmphasis,
}

export const tabListItemActive = {
    backgroundColor: primaryColor,
    color: white,
    borderRadius: '5px',
}

export const tabContent = {
    padding: '0px 0px 0px 10px',
}

export const centerDiv = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const smallButton = {
    borderRadius: '5px',
    backgroundColor: primaryColor,
    padding: '2px 8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export const fakePF = {
    backgroundColor: white,
    borderRadius: '50%',
    height: '50px',
    width: '50px',
    margin: '5px 10px 5px 5px',
}

export const friendsTile = {
    color: white,
    borderRadius: '5px',
    padding: '3px 10px',
    margin: '10px 0px',
    height: '70px',
    width: '100%',
    display: 'inline-grid',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'start',
    alignItems: 'center',
}

export const friendItems = {
    display: 'flex',
    alignItems: 'center',
}

export const notifacationBubble = {
    backgroundColor: primaryColor,
    justifySelf: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50px',
    height: '30px',
    width: '30px',
    padding: '0px 10px',
}


export const chatContainer = {
    display: 'block',
}
export const chatDivider = {
    backgroundColor: secondaryColor,
    margin: '0px 0px 0px 75px',
}

export const suggestedBox = {
    display: 'table',
    width: '100%',
    margin: '20px 0px',
    borderCollapse: 'separate',
    borderSpacing: '5px 0',
}

export const suggestedTile = {
    backgroundColor: secondaryColor,
    borderRadius: '5px',
    height: '125px',
    display: 'table-cell',
    textAlign: 'center',
    verticalAlign: 'middle',
}

export const pfBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

export const myRank = {
    backgroundColor: primaryColor,
    padding: '5px 10px',
    borderRadius: '5px',
}

export const topThreeContainer = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyItems: 'center',
    margin: '20px 0px',
}

export const topThreePfOne = {
    backgroundColor: white,
    height: '120px',
    width: '120px',
    borderRadius: '50%',
    display: 'inline-block',
    alignSelf: 'flex-end'
}

export const topThreePfTwoThree = {
    backgroundColor: white,
    height: '70px',
    width: '70px',
    borderRadius: '50%',
    bottom: '0',
    display: 'inline-block',
    alignSelf: 'flex-end'
}

export const leaderboardContainer = {
    backgroundColor: secondaryColor,
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

export const leaderboardLevel = {
    marginLeft: 'auto'

}

export const fakePfLeaderboard = {
    backgroundColor: white,
    borderRadius: '50%',
    height: '40px',
    width: '40px',
    margin: '5px 10px 5px 5px',
}

export const rankingBubbleLeaderboard = {
    backgroundColor: primaryColor,
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

export const leaderboardPFContainer = {
    transform: 'translateY(18%)',
}

export const searchBar = {
    backgroundColor: secondaryColor,
    borderRadius: '5px',
    padding: '5px 10px',
    margin: '20px 0px',
    width: '100%',
    display: 'flex',
    color: white,
    border: '1px solid' + mediumEmphasis,
    fontSize: '18px'
}




