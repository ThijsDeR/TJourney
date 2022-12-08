import axios from "../api/axios.js";
import { getCurrentUser } from "./auth-service.js";

export const getGameSession = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const result = await getCurrentUser()
    console.log(result)
    console.log(localUser.accessToken)
    if (result) {
        console.log(result._id)
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