import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCircle, faAngleRight, faSquare } from '@fortawesome/free-solid-svg-icons'

import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import 'bulma/css/bulma.min.css';

function Challenges() {
    // color options
    const purple = "#BB86FC";
    const blue = "#57ADDD";
    const yellow = "#FFBC6F";
    const green = "#61C688";
    const red = "#FF686B";

    // when you change this color, you will change the primary color of the whole page
    const primaryColor = green;
    const secondaryColor = "#323232";
    const tertiaryColor = "#505050";
    const paddingPage = "10px 20px"
    const marginFinishedChallenges = "3px 0px 3px 30px"

    const pageStyle = {
        position: "fixed",
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        backgroundColor: "#121212",
        color: "#F7F7F7",
    }

    const title = {
        fontSize: "18px",
        fontWeight: "bold",
        padding: "15px 0px 0px 25px",
    }

    const buttonStyle = {
        color: primaryColor,
        height: "35px",
    }

    const tileStyle = {
        backgroundColor: primaryColor,
        borderRadius: "5px",
        padding: "3px 10px",
        margin: "10px 0px",
        height: "70px",
        alignItems: 'center',
        justifyContent: 'center',
    }

    const containerLeftRight = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
    }

    const goals = {
        backgroundColor: secondaryColor,
        margin: "15px 0px 0px 0px",
        // TODO: fix height
        padding: paddingPage
    }

    return (
        <div style={pageStyle}>
            <div style={{ padding: paddingPage }}>
                {/* TODO: current date */}
                <h1 h1 style={{ ...title, ...{ textAlign: 'center' } }}> Today 06 December</h1 >
                <div style={{ textAlign: 'center' }}> <FontAwesomeIcon icon={faCaretDown} size='2x' /> </div>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}> <FontAwesomeIcon icon={faCircle} size='2x' /> </div>

                {/* Challenges */}
                <div>
                    <h2 style={{ fontWeight: 'bold' }} >Challenges</h2>

                    {/* TODO: for loop met alle unfinished challenges uit db */}
                    <div style={{ ...tileStyle, ...containerLeftRight }}>
                        <div>Drink 1760 mL water</div>
                        <div><FontAwesomeIcon icon={faAngleRight} size='lg' /><div />
                        </div>
                    </div>


                    <div style={{ ...tileStyle, ...{ backgroundColor: secondaryColor, height: "unset" } }}>
                        <h2 style={{ fontWeight: 'bold' }} >Finished</h2>
                        <hr style={{ borderTop: `2px solid ${tertiaryColor}`, margin: 'unset' }}></hr>

                        {/* TODO: for loop met alle finished challenges uit db */}
                        <div style={containerLeftRight}>
                            <div style={{ margin: marginFinishedChallenges }}> Walk 200 steps </div>
                            {/* TODO: click on dice and get a dice throw */}
                            <div style={{ paddingTop: '5px' }}><FontAwesomeIcon icon={faSquare} size='lg' /></div>
                        </div>

                        <hr style={{ borderTop: `1px solid ${tertiaryColor}`, margin: marginFinishedChallenges }}></hr>

                        {/* TODO: haal weg ! */}
                        <div style={containerLeftRight}>
                            <div style={{ margin: marginFinishedChallenges }}> Walk 200 steps </div>
                            {/* TODO: click on dice and get a dice throw */}
                            <div style={{ paddingTop: '5px' }}><FontAwesomeIcon icon={faSquare} size='lg' /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Goals */}
            <div div style={goals} >
                <div style={containerLeftRight}>
                    <div><h2 style={{ fontWeight: 'bold' }} >Goals</h2></div>
                    {/* TODO: link to edit goals page */}
                    <Link><div style={{ color: primaryColor }} >Edit</div></Link>
                </div>

                {/* List of goals TODO: for loop db all goals */}
                <div style={{ ...tileStyle, ...containerLeftRight, ...{ backgroundColor: tertiaryColor } }}>
                    <div>Drink more water</div>
                    <div><FontAwesomeIcon icon={faAngleRight} size='lg' /><div />
                    </div>
                </div>

                {/* TODO: haal weg ! */}
                <div style={{ ...tileStyle, ...containerLeftRight, ...{ backgroundColor: tertiaryColor } }}>
                    <div>Walk more often</div>
                    <div><FontAwesomeIcon icon={faAngleRight} size='lg' /><div />
                    </div>
                </div>
                <div style={{ ...tileStyle, ...containerLeftRight, ...{ backgroundColor: tertiaryColor } }}>
                    <div>Max 5 hours screentime</div>
                    <div><FontAwesomeIcon icon={faAngleRight} size='lg' /><div />
                    </div>
                </div>

                {/* TODO: link to create new goal page */}
                <Link><div style={{ ...tileStyle, ...buttonStyle, ...{ backgroundColor: tertiaryColor } }}>
                    Add goal
                </div></Link>
            </div>
        </div >
    );
}

export default Challenges;