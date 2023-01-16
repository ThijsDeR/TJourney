import { getGameSession } from "./game-service"

const diceEyesCountConfigs = [
    [0, 20],
    [0, 12, 20],
    [0, 10, 16, 20],
    [0, 8, 14, 18, 20],
    [0, 6, 12, 16, 18, 20],
    [0, 6, 10, 14, 16, 18, 20],
]

let amountOfThrows

export const calculateDiceEyesCount = async (challenges) => {
    const gameSession = await getGameSession()
    const total = challenges.length
    let finished = 0
    const msInDay = 1000 * 60 * 60 * 24
    challenges.forEach((challenge) => {
        if (challenge.finished) {
            const entry = gameSession.entries.find((entry) => {

                return Date.parse(entry.date)
                    >= (
                        Math.floor(
                            Date.parse(challenge.date) / msInDay
                        ) * msInDay
                    )
                    &&
                    Date.parse(entry.date)
                    <= (
                        Math.ceil(
                            Date.parse(challenge.date) / msInDay
                        ) * msInDay
                    )
            })
            if (!entry) {
                finished++
            }
        }
    })

    return diceEyesCountConfigs[Math.max(0, total - 1)][finished]
}

export const calculateThrowCount = async (challenges) => {
    const gameSession = await getGameSession()
    const total = challenges.length
    const msInDay = 1000 * 60 * 60 * 24
    challenges.forEach((challenge) => {
        if (challenge.finished) {
            const entry = gameSession.entries.find((entry) => {

                return Date.parse(entry.date)
                    >= (
                        Math.floor(
                            Date.parse(challenge.date) / msInDay
                        ) * msInDay
                    )
                    &&
                    Date.parse(entry.date)
                    <= (
                        Math.ceil(
                            Date.parse(challenge.date) / msInDay
                        ) * msInDay
                    )
            })
        }
    })

    const amount = diceEyesCountConfigs[Math.max(0, total - 1)].length - 1

    setThrowAmount(amount)
    return amount;
}

export function getdiceAmount() {
    return amountOfThrows;
}

export function setThrowAmount(amount) {
    amountOfThrows = amount;
}

export function removeOneThrow() {
    amountOfThrows--;
}