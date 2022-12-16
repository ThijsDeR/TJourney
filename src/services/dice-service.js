let amountOfDices = 0;

export function dice() {
    const diceEyesCountConfigs = [
        [0, 20],
        [0, 12, 20],
        [0, 10, 16, 20],
        [0, 8, 14, 18, 20],
        [0, 6, 12, 16, 18, 20],
        [0, 6, 10, 14, 16, 18, 20],
    ]

    return diceEyesCountConfigs
}

export function diceAmountUp() {
    amountOfDices++;
    return amountOfDices;
}

export function diceAmountDown() {
    amountOfDices--;
    return amountOfDices;
}

export function diceAmountToZero() {
    amountOfDices = 0;
    return amountOfDices;
}

export function getDiceAmount() {
    return amountOfDices;
}

export function setDiceAmount(setDice) {
    amountOfDices = setDice;
}