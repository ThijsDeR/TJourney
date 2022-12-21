import axios from "../api/axios.js";

export const getUsers = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    if (localUser && localUser.accessToken) {
        const data = await axios.get("/v1/gameSessions/", {
            headers: { Authorization: `Bearer ${localUser.accessToken}` },
        })

        return data.data.data;
    }

    return null
}

export const updateStylePreference = async (style) => {
    const localUser = JSON.parse(localStorage.getItem("user"));

    if (localUser && localUser.accessToken) {
        const data = await axios.put("/v1/users/", {
            updateQuery: {
                $set: {
                    "preferences.style": style
                }
            }
        }, {
            headers: { Authorization: `Bearer ${localUser.accessToken}` }
        });

        return data
    }
}

export const getPreferencesColor = (style) => {
    return styles[style];
}

export const lightBackgroundColor = "#f0f0f0";
export const lightSecondaryColor = "#e0e0e0";
export const lightTertiaryColor = "#c0c0c0";
export const lightTextColor = "black";

export const darkBackgroundColor = "#121212";
export const darkSecondaryColor = "#323232";
export const darkTeriaryColor = "#505050";
export const darkTextColor = "#F7F7F7";

export const styles = {
    default: {
        backgroundColor: darkBackgroundColor,
        primaryColor: "#FF686B",
        secondaryColor: darkSecondaryColor,
        tertiaryColor: darkTeriaryColor,
        textColor: darkTextColor
    },
    darkRed: {
        backgroundColor: darkBackgroundColor,
        primaryColor: "#FF686B",
        secondaryColor: darkSecondaryColor,
        tertiaryColor: darkTeriaryColor,
        textColor: darkTextColor
    },
    lightRed: {
        backgroundColor: lightBackgroundColor,
        primaryColor: "#FF686B",
        secondaryColor: lightSecondaryColor,
        tertiaryColor: lightTertiaryColor,
        textColor: lightTextColor
    },
    darkBlue: {
        backgroundColor: darkBackgroundColor,
        primaryColor: "#57ADDD",
        secondaryColor: darkSecondaryColor,
        tertiaryColor: darkTeriaryColor,
        textColor: darkTextColor
    },
    lightBlue: {
        backgroundColor: lightBackgroundColor,
        primaryColor: "#57ADDD",
        secondaryColor: lightSecondaryColor,
        tertiaryColor: lightTertiaryColor,
        textColor: lightTextColor
    },
    darkGreen: {
        backgroundColor: darkBackgroundColor,
        primaryColor: "#61C688",
        secondaryColor: darkSecondaryColor,
        tertiaryColor: darkTeriaryColor,
        textColor: darkTextColor
    },
    lightGreen: {
        backgroundColor: lightBackgroundColor,
        primaryColor: "#61C688",
        secondaryColor: lightSecondaryColor,
        tertiaryColor: lightTertiaryColor,
        textColor: lightTextColor
    },
    darkYellow: {
        backgroundColor: darkBackgroundColor,
        primaryColor: "#FFBC6F",
        secondaryColor: darkSecondaryColor,
        tertiaryColor: darkTeriaryColor,
        textColor: darkTextColor,
    },
    lightYellow: {
        backgroundColor: lightBackgroundColor,
        primaryColor: "#FFBC6F",
        secondaryColor: lightSecondaryColor,
        tertiaryColor: lightTertiaryColor,
        textColor: lightTextColor
    },
    darkPurple: {
        backgroundColor: darkBackgroundColor,
        primaryColor: "#BB86FC",
        secondaryColor: darkSecondaryColor,
        tertiaryColor: darkTeriaryColor,
        textColor: darkTextColor
    },
    lightPurple: {
        backgroundColor: lightBackgroundColor,
        primaryColor: "#BB86FC",
        secondaryColor: lightSecondaryColor,
        tertiaryColor: lightTertiaryColor,
        textColor: lightTextColor
    },

};