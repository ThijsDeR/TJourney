/**
    * Generate a random amount of steps
    * @param {*} amount maximum amount of steps a player can throw
    * @returns a random amount of steps beneath the maximum amount which also > 0 
    */
export function RandomCount(amount) {
    const stepAmount = Math.floor(Math.random() * (amount - 1) + 1);
    return stepAmount;
}

export function viewRotation(playerPosition, endPosition) {
    const [cxPlayer, cyPlayer, czPlayer] = playerPosition;
    const [cxEnd, cyEnd, czEnd] = endPosition;
    let angleRad = 0;

    
    if ((czPlayer-czEnd) <= 0 && (cxPlayer-cxEnd) <= 0) {
        angleRad = Math.atan(-(czPlayer-czEnd)/-(cxPlayer-cxEnd))
    } else if ((czPlayer-czEnd) <= 0 ) {
        angleRad = Math.atan(-(czPlayer-czEnd)/(cxPlayer-cxEnd));
    } else if ((cxPlayer-cxEnd) <= 0) {
        angleRad = Math.atan((czPlayer-czEnd)/-(cxPlayer-cxEnd));
    } else {
        angleRad = Math.atan((czPlayer-czEnd)/(cxPlayer-cxEnd));
    }
    const angleDeg = angleRad * Math.PI / 180 * 100;

    return [0, angleDeg, 0]
}

export function calculatePlayerDirection(start, finish) {
    return finish - start;
}