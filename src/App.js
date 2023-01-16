
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
import { setActiveCharacter } from "./services/playerCharacter-service.js";
import Friends from "./pages/community/Friends.js";
import Loading from "./components/loading/Loading.js";
import CommunityScreen from "./pages/community/Community.js";
import FriendChat from "./pages/community/FriendChat.js";
import GameWrapper from "./pages/game/GameWrapper.js";
import ProtectedRoute from "./components/ProtectedRoute.js";

function App() {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const reloadUserHandler = () => {
        getCurrentUser().then((data) => {
            if (data) {
                const style = getPreferencesColor(data.preferences?.style ? data.preferences.style : "default")
                data.preferences.style = style;
            }
            setUser(data)
        });
    }

    useEffect(() => {
        reloadUserHandler()
    }, []);

    useEffect(() => {
        if (user || user === null) setIsLoading(false);
    }, [user])

    return (
        <>
            {isLoading ? <Loading /> :
                <div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: user?.preferences?.style?.backgroundColor ? user.preferences.style.backgroundColor : "#121212" }}>
                    <Routes>
                        <Route path="/" element={
                            <Login user={user} reloadUserHandler={reloadUserHandler} />
                        } />
                        <Route path="/login" element={
                            <Login user={user} reloadUserHandler={reloadUserHandler} />
                        } />
                        <Route path="/logout" element={
                            <Logout reloadUserHandler={reloadUserHandler} />
                        } />
                        <Route path="/register" element={
                            <Register user={user} reloadUserHandler={reloadUserHandler} />
                        } />
                        <Route path="/home" element={
                            <ProtectedRoute user={user}>
                                <Home user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/game" element={
                            <ProtectedRoute user={user}>
                                <GameWrapper user={user} reloadUserHandler={reloadUserHandler} />
                            </ProtectedRoute>
                        } />
                        <Route path="/challenges" element={
                            <ProtectedRoute user={user}>
                                <Challenges user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/goals/index" element={
                            <ProtectedRoute user={user}>
                                <GoalsIndex user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/goals/create" element={
                            <ProtectedRoute user={user}>
                                <GoalsCreate user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/tutorial" element={
                            <ProtectedRoute user={user}>
                                <Tutorial user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/chat" element={
                            <ProtectedRoute user={user}>
                                <Chats user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/account" element={
                            <ProtectedRoute user={user}>
                                <Account user={user} reloadUserHandler={reloadUserHandler} />
                            </ProtectedRoute>
                        } />
                        <Route path="/preferences" element={
                            <ProtectedRoute user={user}>
                                <Preferences user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/chatFriends" element={
                            <ProtectedRoute user={user}>
                                <Chats user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/chatGroups" element={
                            <ProtectedRoute user={user}>
                                <GroupChats user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/add-group" element={
                            <ProtectedRoute user={user}>
                                <GroupCreate user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/groupChat" element={
                            <ProtectedRoute user={user}>
                                <GroupChats user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/avatarselect" element={
                            <ProtectedRoute user={user}>
                                <AvatarSelect user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/add-friend" element={
                            <ProtectedRoute user={user}>
                                <AddFriends user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/community" element={
                            <ProtectedRoute user={user}>
                                <CommunityScreen user={user} />
                            </ProtectedRoute>
                        } />
                        <Route path="/friendChat" element={
                            <ProtectedRoute user={user}>
                                <FriendChat user={user} />
                            </ProtectedRoute>
                        } />
                    </Routes>
                </div>
            }
        </>
    )
}

export default App;
