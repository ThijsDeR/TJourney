import { getCurrentUser } from "./auth-service";
import axios from "../api/axios.js";

export const updateLevel = async (amount) => {
    const user = await getCurrentUser()
    const localUser = JSON.parse(localStorage.getItem("user"))

    if (localUser && localUser.accessToken) {
        const data = await axios.put(
            `/v1/users/`,
            {
                updateQuery: {
                    $set: {
                        "level.amount": amount
                    }
                }
            },
            {
                headers: { Authorization: `Bearer ${localUser.accessToken}` }
            }
        )

        return data.data.data;
    }

    return null
};

export const addLevelAmount = async (amount) => {
    const user = await getCurrentUser();
    return await updateLevel(user.level.amount + amount);
}

export const calculateLevel = (xp) => {
    const getNeededXP = (level) => {
        return level * 100
    }
    let calculateXP = xp
    let level = 0
    while (calculateXP >= getNeededXP(level + 1)) {
        calculateXP -= getNeededXP(level + 1)
        level++
    }

    return {level: level, xp: calculateXP, neededXP: getNeededXP(level + 1)}
}
