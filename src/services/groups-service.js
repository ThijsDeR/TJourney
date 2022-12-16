import axios from "../api/axios";
import { getCurrentUser } from "./auth-service";

export const getGroups = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const result = await getCurrentUser()
    if (result) {
        const groups = ["6396ff822a2de5672198ca3b", "6397a38def91995d96381a45"]
        const promises = [];
        groups.forEach((group) => {
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
    
                
                return {user: user, gameSession: response.data.data};
            }));
        })

        return await Promise.all(promises);
    }

    return null
}