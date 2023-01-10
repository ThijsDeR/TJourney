
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
import { Chats } from "./pages/chats/Chats.js";
import AvatarSelect from "./pages/chooseAvatar/AvatarSelect";
// import CommunityScreen from "./pages/community/CommunityScreen.js";
import AddFriends from "./pages/community/AddFriends.js";
import { GroupCreate } from "./pages/groups/createGroup.js";
import { GroupChats } from "./pages/chats/GroupChat.js"
import Leaderboard from "./pages/community/Leaderboard.js";
import { Preferences } from "./pages/account/Preferences.js";
import { getPreferencesColor } from "./services/user-service.js";

import Tutorial from "./pages/tutorial/Tutorial.js";


function App({ timeElapsed }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getCurrentUser().then((data) => {
            const style = getPreferencesColor(data.preferences.style)
            data.preferences.style = style ? style : {
                backgroundColor: "#121212",
                primaryColor: "#FF686B",
                secondaryColor: "#323232",
                tertiaryColor: "#505050",
                textColor: "#F7F7F7"
            }
            setUser(data)
            console.log(data.preferences)
        });
    }, [currentUser]);
    return (
        <>
            <div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: user?.preferences?.style?.backgroundColor ? user.preferences.style.backgroundColor : "#121212" }}>
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
                    <Route path="/tutorial" element={<Tutorial user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                    <Route path="/chat" element={<Chats user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                    <Route path="/account" element={<Account user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                    <Route path="/preferences" element={<Preferences user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                    <Route path="/chatFriends" element={<Chats user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                    <Route path="/chatGroups" element={<GroupChats user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                    {/* <Route path="/community" element={<CommunityScreen user={user} isLoading={isLoading} setIsLoading={setIsLoading}/>} /> */}
                    <Route path="/add-group" element={<GroupCreate user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                    <Route path="/groupChat" element={<GroupChats user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                    <Route path="/leaderboard" element={<Leaderboard user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                    <Route path="/avatarselect" element={<AvatarSelect user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                    <Route path="/add-friend" element={<AddFriends user={user} isLoading={isLoading} setIsLoading={setIsLoading} />} />
                </Routes>
            </div>
        </>
    )
}

export default App;
