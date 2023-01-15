import React, { useState } from "react";
import Tab from "./Tab";
import { tabListItemContainer, tabList, tabContent, tabListItem, centerDiv } from "../../styling/StylingVariables.js"

function Tabs(props) {
    const [activeTab, setActiveTab] = useState(props.children[0].props.label);

    const onClickTabItem = (tab) => {
        // set props.activeTab to the label of the tab that was clicked
        setActiveTab(tab);
    };

    return (
        <div className="tabs" style={tabListItemContainer(props.style)}>
            <div className="item" style={tabList(props.style)}>
                <div style={centerDiv(props.style)}>
                    <ol className="tab-list" style={tabListItem(props.style)}>
                        {/* returns all the tab items as a li */}
                        {props.children.map((child) => {
                            const { label } = child.props;

                            return (
                                <Tab
                                    activeTab={activeTab}
                                    key={label}
                                    label={label}
                                    onClick={onClickTabItem}
                                    style={props.style}
                                />
                            );
                        })}
                    </ol>
                </div>
            </div>
            <div className="tab-content" style={tabContent(props.style)}>
                {props.children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </div>
    );
}

export default Tabs;