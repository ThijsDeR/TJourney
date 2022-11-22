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
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
        </Routes>
    );
}

export default App;