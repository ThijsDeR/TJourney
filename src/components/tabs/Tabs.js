import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";
import { tabListItemContainer, tabList, tabContent, tabListItem, centerDiv } from "../../styling/StylingVariables.js"

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    };

    render() {
        const {
            onClickTabItem,
            props: { children },
            state: { activeTab },
        } = this;

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
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;