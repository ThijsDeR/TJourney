import axios from "../api/axios.js";
import { getCurrentUser } from "./auth-service.js";

export const createMessage = (messages, user, sender) => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    return axios.post("/v1/goals", {
        messages,
        user,
        sender

  
    }, {
        headers: { Authorization: `Bearer ${localUser.accessToken}` }
    }).then((response) => {
        if (response.data.error) throw response.data.error

        return response.data.data;
    });
};