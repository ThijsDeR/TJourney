import React, { useState } from "react";
import PropTypes from "prop-types";
import { tabList, tabListItemActive } from "../../styling/StylingVariables.js"

function Tab(props) {
    const propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    console.log(props);

    const activeTab = props.activeTab;

    const label = props.label;

    const onClick = () => {
        const { label, onClick } = props;
        onClick(label);
    };


    let isActive = false;

    let className = "tab-list-item";

    if (activeTab === label) {
        className += " tab-list-active";
        isActive = true;
    }


    // render() {
    //     const {
    //         onClick,
    //         props: { activeTab, label },
    //     } = this;

    //     let isActive = false;

    //     let className = "tab-list-item";

    //     if (activeTab === label) {
    //         className += " tab-list-active";
    //         isActive = true;
    //     }

    return (
        // tab item
        <li className={className}
            onClick={onClick}
            // if the tab is active, change the color to red
            style={{ ...tabList, ...isActive ? { ...tabListItemActive } : {} }
            } >
            {label}
        </li >
    );
}

export default Tab;