// color options
const purple = '#BB86FC';
const blue = '#57ADDD';
const yellow = '#FFBC6F';
const green = '#61C688';
const red = '#FF686B';
const white = '#F7F7F7'; // high emphasis
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
}

export const containerLeftRight = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
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
    padding: '3px 10px',
    alignItems: 'center',
    justifyContent: 'center',
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

