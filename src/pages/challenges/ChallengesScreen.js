import React, { Text } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import 'bulma/css/bulma.min.css';

function Challenges() {
    // when you change this color, you will change the primary color of the whole page
    const primaryColor = "#BB86FC";

    const pageStyle = {
        position: "fixed",
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px",
        backgroundColor: "#121212",
        color: "#F7F7F7",
    }

    const challengeStyle = {
        margin: "8px 25px",
        height: "75px",
        padding: "5px",
        borderRadius: "5px",
        backgroundColor: primaryColor,

        display: 'flex',
        alignItems: 'center',
    };

    const title = {
        fontSize: "18px",
        fontWeight: "bold",
        padding: "15px 0px 0px 25px",
    }

    const finishedChallenge = {
        backgroundColor: "#323232",
        alignItems: 'vertical',
    }

    const yourGoalsStyle = {
        margin: "15px 0px 0px 0px",
        // TODO: fix deze height
        height: "75%",
        backgroundColor: "#323232",
    }

    const goalItemsStyle = {
        backgroundColor: "#505050",
    }

    const buttonStyle = {
        color: primaryColor,
        height: "40px",
    }

    const wrapper = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '20px',
    }

    return (
        <div style={pageStyle}>
            {/* TODO: current date */}
            <h1 style={{ ...title, ...{ textAlign: 'center' } }}>Today 06 December</h1>
            <div style={{ textAlign: 'center' }}> <FontAwesomeIcon icon={faCaretDown} size='2x' /> </div>

            <h1 style={title}>Challenges</h1>
            {/* TODO: for loop met alle challenges from db */}
            <div style={challengeStyle}>
                <div style={{ display: 'inline-block', float: 'left' }}>Drink 200 mL water</div>
                {/* TODO: when clicked, in finished list + add extra gooi */}
                <div style={{ display: 'inline-block', float: 'right' }}>+</div>
            </div>


            <div style={challengeStyle}> Drink 200 mL water</div>
            <div style={challengeStyle}> Drink 200 mL water</div>


            <div style={{ ...challengeStyle, ...finishedChallenge }}>
                <div style={{ fontWeight: 'bold' }}> Finished</div>
                <div style={{ fontWeight: 'bold' }}> Finished</div>
                <h2 >Finished</h2>
                {/* TODO: for loop all finished challenges for the day */}
                <p>Drink 200 mL water</p>
            </div>

            <div style={yourGoalsStyle}>
                <h1 style={title}>Your goals</h1>
                {/* TODO: add link to edit page */}
                <Link><span style={{ color: primaryColor }}>Edit</span></Link>
                <div style={{ ...challengeStyle, ...goalItemsStyle }}>
                    <h2 style={{ fontWeight: 'bold' }}>Drink more water</h2>
                </div>

                <div style={{ ...challengeStyle, ...goalItemsStyle, ...buttonStyle }}>
                    <span>Add goal</span>
                </div>
            </div>



        </div>
    );
}

export default Challenges;