import React, { Component, useState, children, setState } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";
import { tabListItemContainer, tabList, tabContent, tabListItem, centerDiv } from "../../styling/StylingVariables.js"

function Tabs() {
    // checks if the children are an array
    const propTypes = {
        // children is an array of objects of type Tab
        children: PropTypes.instanceOf(Array).isRequired,
    };

    // sets the active tab to the first tab
    const [activeTab, setActiveTab] = useState(props.children[0].props.label);

    // set active tab to the tab that was clicked
    const onClickTabItem = (tab) => {
        setActiveTab(tab);
    };

    const props = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    // returns the tabs
    return (
        <div className="tabs" style={tabListItemContainer}>
            <div className="item" style={tabList}>
                <div style={centerDiv}>
                    <ol className="tab-list" style={tabListItem}>
                        {/* returns all the tab items as a li */}
                        {children.map((child) => {
                            const { label } = child.props;

                            return (
                                <Tab
                                    activeTab={activeTab}
                                    key={label}
                                    label={label}
                                    onClick={onClickTabItem}
                                />
                            );
                        })}
                    </ol>
                </div>
            </div>
            <div className="tab-content" style={tabContent}>
                {children.map((child) => {
                    // if the tab is not active, return undefined (nothing)
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </div>
    );
}

export default Tabs;