
import { useState, useEffect } from "react";
import { getCurrentUser } from "./services/auth-service.js";
import 'bulma/css/bulma.min.css';
import "./App.css";
// for routing
import {
    Routes,
    Route,
} from "react-router-dom";

import Login from "./pages/login/LoginScreen.js";
import Register from "./pages/register/RegisterScreen.js";
import Logout from "./pages/logout/Logout";
import Home from "./pages/home/HomeScreen.js";
import Account from "./pages/account/Account.js";

import { GoalsIndex } from "./pages/goals/index/GoalsIndex.js";
import { GoalsCreate } from "./pages/goals/create/GoalsCreate.js";
import { Challenges } from "./pages/challenges/ChallengesScreen.js";
import GameScreen from "./pages/game/GameScreen.js";
import {Chats} from "./pages/chats/Chats.js";
import AvatarSelect from "./pages/chooseAvatar/AvatarSelect";
import CommunityScreen from "./pages/community/CommunityScreen.js";
import AddFriends from "./pages/community/AddFriends.js";



function App({ timeElapsed }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser().then((data) => {
            setUser(data)
        });
    }, [currentUser]);
    return (
        <>
            <Routes>
                <Route path="/" element={<Login user={currentUser} setCurrentUser={setCurrentUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/login" element={<Login user={currentUser} setCurrentUser={setCurrentUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/logout" element={<Logout setCurrentUser={setCurrentUser} setIsLoading={setIsLoading} />} />
                <Route path="/register" element={<Register user={currentUser} setCurrentUser={setCurrentUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/home" element={<Home user={user} setCurrentUser={setCurrentUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/game" element={<GameScreen user={user} setUser={setUser} isLoading={isLoading} timeElapsed={timeElapsed} setIsLoading={setIsLoading} />} />
                <Route path="/challenges" element={<Challenges user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/goals/index" element={<GoalsIndex user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/goals/create" element={<GoalsCreate user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/chat" element={<Chats user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/account" element={<Account user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/avatarselect" element={<AvatarSelect user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                <Route path="/community" element={<CommunityScreen user={user} />} />
                <Route path="/add-friend" element={<AddFriends user={user} />} />
            </Routes>
        </>
    )
}

export default App;
