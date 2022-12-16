import React, { useState } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";
import { tabListItemContainer, tabList, tabContent, tabListItem, centerDiv } from "../../styling/StylingVariables.js"

function Tabs(props, { children }) {

    const propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    };

    const [activeTab, setActiveTab] = useState(props.children[0].props.label);

    const onClickTabItem = (tab) => {
        // set props.activeTab to the label of the tab that was clicked
        setActiveTab(tab);
    };

    return (
        <div className="tabs" style={tabListItemContainer}>
            <div className="item" style={tabList}>
                <div style={centerDiv}>
                    <ol className="tab-list" style={tabListItem}>
                        {/* returns all the tab items as a li */}
                        {props.children.map((child) => {
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
                {props.children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </div>
    );
}

export default Tabs;