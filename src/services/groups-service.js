import axios from "../api/axios";
import { getCurrentUser } from "./auth-service";

export const getGroups = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const result = await getCurrentUser()
    if (result) {
        const promises = [];
        result.groups.forEach((group) => {
            promises.push(axios.get("/v1/gameSessions/user/" + group, {
                headers: { Authorization: `Bearer ${localUser.accessToken}` }
            }).then(async (response) => {
                if (response.data.error) throw response.data.error

                const user = await axios.get("/v1/users/" + group, {
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

export const addGroup = async (name, userId, groupImage) => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    return await axios.put("/v1/users", {
        updateQuery: {
            $push: {
                groups: {
                    groupName: name,
                    member: userId,
                    image: groupImage
                }
            }
        },
    }, {
        headers: { Authorization: `Bearer ${localUser.accessToken}` }
    }).then(async (response) => {
        if (response.data.error) throw response.data.error

        return response.data.data;
    })

}

export const removeGroup = async (userId, name, groupImage) => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    return await axios.put("/v1/users", {
        updateQuery: {
            $pull: {
                groupName: name,
                member: userId,
                image: groupImage
            }
        },
    }, {
        headers: { Authorization: `Bearer ${localUser.accessToken}` }
    }).then(async (response) => {
        if (response.data.error) throw response.data.error

        return response.data.data;
    })
}