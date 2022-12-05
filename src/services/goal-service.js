import axios from "../api/axios.js";

export const makeGoals = (goals, challenges) => {
    return axios.post("/v1/goals", {
        goals,
        challenges,
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("goals", JSON.stringify(response.data));
        }
        return response.data;
    });
};

export const getGoals = async () => {
    const accessToken = JSON.parse(localStorage.getItem("user")).accessToken;

    const data = await axios.get("/v1/goals", {
        headers: { Authorization: `Bearer ${accessToken}` }
    });

    return data.data.data;
}

export const editGoal = (updateData, goalData, objectId) => {
    const accessToken = JSON.parse(localStorage.getItem("user")).accessToken

    return axios.put(`/v1/goals/${objectId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
        updateData,
        goalData
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("goals", JSON.stringify(response.data));
        }
        return response.data;
    });
}