// color options
const purple = "#BB86FC";
const blue = "#57ADDD";
const yellow = "#FFBC6F";
const green = "#61C688";
const red = "#FF686B";

// when you change this color, you will change the primary color of the whole page
export const primaryColor = green;
export const secondaryColor = "#323232";
export const tertiaryColor = "#505050";
export const paddingPage = "10px 20px"
export const marginFinishedChallenges = "3px 0px 3px 30px"

export const pageStyle = {
    position: "fixed",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    backgroundColor: "#121212",
    color: "#F7F7F7",
}

export const title = {
    fontSize: "18px",
    fontWeight: "bold",
    padding: "15px 0px 0px 25px",
}

export const buttonStyle = {
    color: primaryColor,
    height: "35px",
}

export const tileStyle = {
    backgroundColor: primaryColor,
    borderRadius: "5px",
    padding: "3px 10px",
    margin: "10px 0px",
    height: "70px",
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
    margin: "15px 0px 0px 0px",
    // TODO: fix height
    padding: paddingPage
}

export const goalItem = {
    display: 'inline-block',
    margin: '10px 0px 10px 10px',
}
