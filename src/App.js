import React from "react";

// for routing
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

// Screens
import Home from "./screens/HomeScreen";
import Journey from "./screens/JourneyScreen";

function App() {
    return (
        <>
            <Routes>
            // Routes for the application
                <Route path="/" element={<Home />} />
                <Route path="/journey" element={<Journey />} />
            </Routes>

            // Navigation
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/journey">Journey</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default App;