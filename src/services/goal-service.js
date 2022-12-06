import axios from "../api/axios.js";
import { getCurrentUser } from "./auth-service.js";

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

    const result = await getCurrentUser()

    if (result) {
        const promises = []
        result.goals.forEach((goal) => {
            promises.push(axios.get("/v1/goals/" + goal, {
                headers: { Authorization: `Bearer ${localUser.accessToken}` }
            }))
        })
    
        const results = await Promise.all(promises)
        const goals = [];

        results.forEach((result) => {
            if (result && result.data && result.data.data) goals.push(result.data.data)
        })

        return goals
    }

    return null
}

export const getAllChallenges = async (date) => {
    const goals = await getAllGoals()
    const challenges = []
    const msInDay = 1000 * 60 * 60 * 24
    goals.forEach((goal) => {
        goal.challenges.forEach((challenge) => {
            if (Date.parse(challenge.date) >= (Math.floor(date / msInDay) * msInDay) && Date.parse(challenge.date) <= (Math.ceil(date / msInDay) * msInDay)) {
                challenge["goal_id"] = goal._id
                challenges.push(challenge)
            }
        })
    })

    return challenges
}

export const checkChallenge = async (goalId, challengeId, finished) => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    return axios.put("/v1/goals/" + goalId, {
        findQuery: {
            "challenges.id": challengeId 
        },
        updateQuery: {
            $set: { "challenges.$.finished": finished}
        }
    }, {
        headers: { Authorization: `Bearer ${localUser.accessToken}` }
    }).then((response) => {
        if (response.data.error) throw response.data.error
        
        return response.data.data;
    });
}