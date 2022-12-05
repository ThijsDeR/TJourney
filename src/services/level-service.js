import { getCurrentUser } from "./auth-service";
import axios from "../api/axios.js";

export const updateLevel = async (amount) => {
    const user = await getCurrentUser()
    const localUser = JSON.parse(localStorage.getItem("user"))

    if (localUser && localUser.accessToken) {
        const data = await axios.put(`/v1/users/${user._id}`, {level: amount}, {
            headers: { Authorization: `Bearer ${localUser.accessToken}` }
        })
        
        return data.data.data;
    }

    return null
};