import axios from "../api/axios.js";

export const goals = (goals) => {
    return axios.post("/v1/goals", {
        goals,
        
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("goals", JSON.stringify(response.data));
        }
        return response.data;
    });
};