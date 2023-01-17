import axios from "../api/axios.js";
import { getCurrentUser } from "./auth-service.js";

export const getGameSession = async () => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const result = await getCurrentUser()
    if (result) {
        return axios.get("/v1/gameSessions/", {
            headers: { Authorization: `Bearer ${localUser.accessToken}` }
        }).then((response) => {
            if (response.data.error) throw response.data.error

            return response.data.data;
        });
    }

    return null
}


export const setSteps = async (steps) => {
    const localUser = JSON.parse(localStorage.getItem("user"))

    const result = await getCurrentUser()
    if (result) {
        return axios.put("/v1/gameSessions/", {
            updateQuery: {
                $set: {
                    steps: steps
                },
                $push: {
                    entries: {
                        date: Date.now()
                    }
                }
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

export const calculateDiceEyesCount = async (challenges) => {
    const gameSession = await getGameSession()
    const total = challenges.length
    let finished = 0
    const msInDay = 1000 * 60 * 60 * 24
    const gameEntriesOnToday = gameSession.entries.filter(
        (entry) => {
            return entry.date / msInDay > (Math.floor(Date.now() / msInDay)) 
            && entry.date / msInDay < (Math.ceil(Date.now() / msInDay))
        })

    if (gameEntriesOnToday.length > 0) return 0

    challenges.forEach((challenge) => {
        if (challenge.finished) finished++
    })

    const diceEyesCountConfigs = [
        [0, 20],
        [0, 12, 20],
        [0, 10, 16, 20],
        [0, 8, 14, 18, 20],
        [0, 6, 12, 16, 18, 20],
        [0, 6, 10, 14, 16, 18, 20],
    ]

    return diceEyesCountConfigs[Math.max(0, total - 1)][finished]
}
