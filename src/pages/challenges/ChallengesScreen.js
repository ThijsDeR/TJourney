import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation.js";
import './challenges.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { register } from "../../services/auth-service.js";
import { Navigate } from "react-router-dom";
import { Center } from "@react-three/drei";

const divStyle = {
    margin: "10px",
    display:"inline-block", 
    width: "200px", height: "100px", 
    padding: "5px", border: "1px ",
    borderRadius: "5px",backgroundColor:"silver",
    textAlign: "center",
};

function ChallengeScreen() {

    return (
        <>
        <Navigation/>
        <div style={{ position: "fixed", top: "100px", bottom: "100px", left: "0px", right: "0px" }}>
            <div style={divStyle}>
                <h2>Live</h2>
            </div>
            <div style={divStyle}>
                <h2>life</h2>
            </div>
            <div style={divStyle}>
                <h2>help me</h2>
            </div>

        </div>
        <Footer/>
        </>
    );
}

export default ChallengeScreen