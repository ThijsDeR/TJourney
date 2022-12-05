import axios from "../api/axios.js";

export const createGoal = (name, description, startValue, endValue, startDate, endDate, category) => {
    return axios.post("/v1/goals", {
        name,
        description,
        startValue,
        endValue,
        startDate,
        endDate,
        category
    }).then((response) => {
        if (response.data.error) throw response.data.error

        return response.data.data;
    });
};

export const getAllGoals = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const data = await axios.get("/v1/goals", {
        headers: { Authorization: `Bearer ${localUser.accessToken}` }
    })

    return data.data.data;
}
