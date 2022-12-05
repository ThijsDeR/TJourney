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
    const [categoryNutrition, ] = useState("Nutrition");
    const [categorySleep, ] = useState("Sleep");
    const [categoryScreentime, ] = useState("Screentime");
    const [categoryActivity, ] = useState("Activity");
    const [goals] = useState("");
    // There probably is a better way to do this buuuut eh
    const [challenge1 ] = useState("");
    const [challenge2 ] = useState("");
    const [challenge3 ] = useState("");
    const challenges = [challenge1, challenge2, challenge3];
    const category = [categoryNutrition, categorySleep, categoryScreentime, categoryActivity];
    const makeCategory = async (e, category) => {
        console.log(e)
        e.preventDefault();
        try {
            await makeGoals(goals, challenges, category).then(
                (data) => {
                    // navigate
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    

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
                    <h2 onClick={(e) => makeCategory(e, categoryNutrition)}>Nutrition</h2>
                    {/* <div style={{marginLeft:"auto"}}>
                <img src={ArrowRightpng} width="40" style={{maxHeight: "50px"}} alt="" />
                </div> */}
                </div>
                <div style={divStyle}>
                    <h2 onClick={(e) => makeCategory(e, categorySleep)}>Sleep</h2>

                </div>
                <div style={divStyle}>
                    <h2 onClick={(e) => makeCategory(e, categoryScreentime)}>Screentime</h2>

                </div>
                <div style={divStyle}>
                    <h2 onClick={(e) => makeCategory(e, categoryActivity)}>Activity</h2>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default ChallengeScreen