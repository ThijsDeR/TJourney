import axios from "../api/axios.js";

export const makeGoals = (goals, challenges) => {
    return axios.post("/v1/goals", {
        goals,
        challenges
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("goals", JSON.stringify(response.data));
        }
        return response.data;
    });
};

export const getGoals = async () => {
    const accessToken = JSON.parse(localStorage.getItem("user")).accessToken

    const data = await axios.get("/v1/goals", {
        headers: { Authorization: `Bearer ${accessToken}` }
    })

    return data.data.data;
}

export const editGoal = (updateData, goalData) => {
    return axios.put(`/v1/goals/6389c5d6733623e7ef8352f5`, {
        headers: { Authorization: "k4jewkDikhdZhpHQmyESX8L3uAz7uZXwyCDYPpwbehcTtg6jcytw7T9ZZUGfEcMK"},
        updateData,
        goalData
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("goals", JSON.stringify(response.data));
        }
        return response.data;
    });
}