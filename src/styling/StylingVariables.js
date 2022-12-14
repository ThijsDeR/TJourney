// color options
const purple = '#BB86FC';
const blue = '#57ADDD';
const yellow = '#FFBC6F';
const green = '#61C688';
const red = '#FF686B';
export const white = '#F7F7F7'; // high emphasis
const backgroundColor = '#121212';

// when you change this color, you will change the primary color of the whole page
export const primaryColor = blue;
export const secondaryColor = '#323232';
export const tertiaryColor = '#505050';

export const mediumEmphasis = '#ABABAB';
export const disabledEmphasis = '#636363';

// standard padding and margin
export const paddingPage = '10px 20px'
export const marginFinishedChallenges = '3px 0px 3px 30px'

export const pageStyle = {
    position: 'fixed',
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    backgroundColor: backgroundColor,
    color: white,
}

export const appContainer = {
    padding: paddingPage,
    width: '100%',
}

export const title = {
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '15px 0px 0px 0px',
}

export const boldText = {
    fontWeight: 'bold',
}

export const lightText = {
    fontWeight: 'lighter',
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

export const friendsTile = {
    backgroundColor: secondaryColor,
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

export const messageButton = {
    backgroundColor: primaryColor,
    justifySelf: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    height: '30px',
    padding: '0px 10px',
}

export const fakePF = {
    backgroundColor: white,
    borderRadius: '50%',
    height: '50px',
    width: '50px',
    margin: '5px 10px 5px 5px',
}

export const friendsContainer = {
    display: 'block'
}

export const suggestedFriendsBox = {
    display: 'table',
    width: '100%',
    margin: '20px 0px',
    borderCollapse: 'separate',
    borderSpacing: '5px 0',
}

export const suggestedFriendsTile = {
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

