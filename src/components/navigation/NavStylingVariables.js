export const selectedStyling = (style) => {
    return {
        transition: "width 3s",
        backgroundColor: style.primaryColor,
        color: style.textColor,
        paddingLeft: "5%",
        paddingRight: "5%"
    }
}

export const buttonStyling = (style) => {
    return {
        backgroundColor: style.secondaryColor,
        border: `2px solid ${style.textColor}`,
        color: style.textColor,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95%",
        width: "100%",
        minWidth: "5px",
        textDecoration: "none",
        fontSize: "10px",
        borderRadius: "5px",
        transition: "1s",
    }
}

export const navButtonContainer = (style) => {
    return {
        display: "flex",
        width: "95%",
        height: "100%",
        margin: "0 2.5%",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2px",
    }
}