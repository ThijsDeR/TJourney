import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation"
import ArrowRightpng from "../assets/Icons/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.png"
import React from 'react';
import { useState } from "react";
import { makeGoals } from "../services/goal-service"


const divStyle = {
    margin: "10px",
    display: "inline-block",
    width: "340px", height: "75px",
    padding: "5px", border: "1px ",
    borderRadius: "5px", backgroundColor: "plum",
    textAlign: "center",
    color: "white",
    top: "50%",
    position: "center"


};

function ChallengeScreen() {

    

    return (
        <>
            <Navigation />
            <div style={{ textAlign: "center", display:"flex",justifyContent: "center", fontSize: "20px" }}>
                    <b>Choose Category</b>
                </div>
            <div style={{ margin:"100px", position:"absolute",justifyContent: "center", top: "100px", bottom: "100px",  }}>
            <div style={{ textAlign: "center", display:"flex",justifyContent: "center", fontSize: "20px" }}>
                    <b>Choose Category</b>
                </div>
                <div style={divStyle}>
                    <h2 >Nutrition</h2>
                    {/* <div style={{marginLeft:"auto"}}>
                <img src={ArrowRightpng} width="40" style={{maxHeight: "50px"}} alt="" />
                </div> */}
                </div>
                <div style={divStyle}>
                    <h2>Sleep</h2>

                </div>
                <div style={divStyle}>
                    <h2>Screentime</h2>

                </div>
                <div style={divStyle}>
                    <h2>Activity</h2>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default ChallengeScreen