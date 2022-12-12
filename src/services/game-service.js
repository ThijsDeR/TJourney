import axios from "../api/axios.js";
import { getCurrentUser } from "./auth-service.js";

export const getGameSession = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const result = await getCurrentUser()
    if (result) {
        return axios.post("/v1/gameSessions/find", {
            findQuery: {
                "user_id": result._id
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