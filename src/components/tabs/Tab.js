import React, { Component } from "react";
import PropTypes from "prop-types";
import { tabList, tabListItemActive } from "../../styling/StylingVariables.js"

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    };

    render() {
        const {
            onClick,
            props: { activeTab, label },
        } = this;

        let isActive = false;

        let className = "tab-list-item";

        if (activeTab === label) {
            className += " tab-list-active";
            isActive = true;
        }

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
}

export default Tab;