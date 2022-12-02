/**
    * Generate a random amount of steps
    * @param {*} amount maximum amount of steps a player can throw
    * @returns a random amount of steps beneath the maximum amount which also > 0 
    */
export function RandomCount(amount) {
    const stepAmount = Math.floor(Math.random() * (amount - 1) + 1);
    return stepAmount;
}