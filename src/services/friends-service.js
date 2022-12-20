import axios from "../api/axios";
import { getCurrentUser } from "./auth-service";

export const getFriends = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const result = await getCurrentUser()
    if (result) {
        const promises = [];
        result.friends.forEach((friend) => {
            promises.push(axios.get("/v1/gameSessions/user/" + friend, {
                headers: { Authorization: `Bearer ${localUser.accessToken}` }
            }).then(async (response) => {
                if (response.data.error) throw response.data.error

                const user = await axios.get("/v1/users/" + friend, {
                    headers: { Authorization: `Bearer ${localUser.accessToken}` }
                }).then((response) => {
                    if (response.data.error) throw response.data.error

                    return response.data.data;
                })


                return { user: user, gameSession: response.data.data };
            }));
        })

        return await Promise.all(promises);
    }

    return null
}

export const getNonFriends = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const result = await getCurrentUser()
    if (result) {
        const usersResponse = await axios.get("/v1/users", {
            headers: { Authorization: `Bearer ${localUser.accessToken}` }
        })

        const users = usersResponse.data.data.filter((user) => !result.friends.includes(user._id))

        return users;

        // users = users.filter((user) => user)
    }

    return null
}

export const addFriend = async (userId) => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    return await axios.put("/v1/users", {
        updateQuery: {
            $push: {
                friends: userId
            }
        },
    }, {
        headers: { Authorization: `Bearer ${localUser.accessToken}` }
    }).then(async (response) => {
        if (response.data.error) throw response.data.error

        return response.data.data;
    })

}

export const removeFriend = async (userId) => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    return await axios.put("/v1/users", {
        updateQuery: {
            $pull: {
                friends: userId
            }
        },
    }, {
        headers: { Authorization: `Bearer ${localUser.accessToken}` }
    }).then(async (response) => {
        if (response.data.error) throw response.data.error

        return response.data.data;
    })
}