import axios from "../api/axios.js";
import { getCurrentUser } from "./auth-service.js";

export const getGameSession = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const result = await getCurrentUser()
    if (result) {
        return axios.get("/v1/gameSessions/", {
            headers: { Authorization: `Bearer ${localUser.accessToken}` }
        }).then((response) => {
            if (response.data.error) throw response.data.error

            return response.data.data;
        });
    }

    return null
}

export const getFriendsGameSessions = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const result = await getCurrentUser()
    if (result) {
        const friends = ["6396ff822a2de5672198ca3b", "6396ffa9f368596caa05fe5a"]
        const promises = [];
        friends.forEach((friend) => {
            promises.push(axios.get("/v1/gameSessions/user/" + friend, {
                headers: { Authorization: `Bearer ${localUser.accessToken}` }
            }).then((response) => {
                if (response.data.error) throw response.data.error
    
                return response.data.data;
            }));
        })

        return await Promise.all(promises);
    }

    return null
}

export const setSteps = async (steps) => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const result = await getCurrentUser()
    if (result) {
        return axios.put("/v1/gameSessions/", {
            updateQuery: {
                $set: {
                    steps: steps
                }
            },
        }, {
            headers: { Authorization: `Bearer ${localUser.accessToken}` }
        }).then((response) => {
            if (response.data.error) throw response.data.error

            return response.data.data;
        });
    }

    return null
}