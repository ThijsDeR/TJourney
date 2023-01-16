
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
            setIsLoading(false)
        });
    }

    useEffect(() => {
        reloadUserHandler()
    }, []);

    return (
        <>
            {isLoading ? <Loading /> :
                <div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: user?.preferences?.style?.backgroundColor ? user.preferences.style.backgroundColor : "#121212" }}>
                    <Routes>
                        <Route path="/" element={<Login user={user} reloadUserHandler={reloadUserHandler} />} />
                        <Route path="/login" element={<Login user={user} reloadUserHandler={reloadUserHandler} />} />
                        <Route path="/logout" element={<Logout reloadUserHandler={reloadUserHandler} />} />
                        <Route path="/register" element={<Register user={user} reloadUserHandler={reloadUserHandler} />} />
                        <Route path="/home" element={<Home user={user} />} />
                        <Route path="/game" element={<GameWrapper user={user} reloadUserHandler={reloadUserHandler} />} />
                        <Route path="/challenges" element={<Challenges user={user} />} />
                        <Route path="/goals/index" element={<GoalsIndex user={user} />} />
                        <Route path="/goals/create" element={<GoalsCreate user={user} />} />
                        <Route path="/tutorial" element={<Tutorial user={user} />} />
                        <Route path="/chat" element={<Chats user={user} />} />
                        <Route path="/account" element={<Account user={user} reloadUserHandler={reloadUserHandler} />} />
                        <Route path="/preferences" element={<Preferences user={user} />} />
                        <Route path="/chatFriends" element={<Chats user={user} />} />
                        <Route path="/chatGroups" element={<GroupChats user={user} />} />
                        <Route path="/add-group" element={<GroupCreate user={user} />} />
                        <Route path="/groupChat" element={<GroupChats user={user} />} />
                        <Route path="/avatarselect" element={<AvatarSelect user={user} />} />
                        <Route path="/add-friend" element={<AddFriends user={user} />} />
                        <Route path="/community" element={<CommunityScreen user={user} />} />
                        <Route path="/friendChat" element={<FriendChat user={user} />} />
                    </Routes>
                </div>
            }
        </>
    )
}

export default App;
