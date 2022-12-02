import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { register } from "../../services/auth-service.js";
import { Navigate } from "react-router-dom";

function ChallengeScreen() {

    return (
        <>
        <Navigation/>
        <div style={{ position: "fixed", top: "100px", bottom: "100px", left: "0px", right: "0px" }}>
            <div style={{ display:"inline-block", width: "100px", height: "100px", padding: "5px", border: "1px solid blue",}}>
                <h2>help me</h2>
                </div>

        </div>
        <Footer/>
        </>
    );
}

export default ChallengeScreen