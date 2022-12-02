import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { register } from "../../services/auth-service.js";
import { Navigate } from "react-router-dom";

function challengeScreen() {

    return (
        <>
            <Navigation />
            <text>Helpp</text>
            <Footer />
        </>
    );
}

export default challengeScreen