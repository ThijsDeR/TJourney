import axios from "../api/axios";
import { getCurrentUser } from "./auth-service";

export const getFriends = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const result = await getCurrentUser()
    if (result) {
        const friends = ["6396ff822a2de5672198ca3b", "6397a38def91995d96381a45"]
        const promises = [];
        friends.forEach((friend) => {
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
    
                
                return {user: user, gameSession: response.data.data};
            }));
        })

        return await Promise.all(promises);
    }

    return null
}