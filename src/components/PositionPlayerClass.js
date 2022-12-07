
export class PositionPlayerClass {
  placeOnTheBoard = 2;
  placeCharacter = [-6000, 2205, -3000];
  timerCount = 0;
  diceNumber;

  /**
   * Set the position of the character
   * 
   * @returns the future place of the character
   */
  SetPosition(ListofPositionPlaces) {
    this.resetThePosition(ListofPositionPlaces)
    this.placeCharacter = ListofPositionPlaces[this.placeOnTheBoard];
    let [cx, cy, cz] = this.placeCharacter;
    return (
      [cx, cy + 1, cz]
    );
  }

  /**
   * Ups the position by 1
   */
  positionUp(ListofPositionPlaces) {
    this.placeOnTheBoard = this.placeOnTheBoard + 1;
    this.SetPosition(ListofPositionPlaces)
  }

  /**
   * reset the position to the beginning of the board
   */
  resetThePosition(ListofPositionPlaces) {
    if (ListofPositionPlaces.length - 1 < this.placeOnTheBoard) {
      this.placeOnTheBoard = this.placeOnTheBoard % ListofPositionPlaces.length;
    }
  }

  /**
   * delays the action of the movement of the player ,so that the player character will move 1 position every 300 counts.
   */
  walkTimer(ListofPositionPlaces, steps) {
    if (steps === true) {
      if (this.diceNumber > 0) {
        if (this.timerCount > 200) {
          this.positionUp(ListofPositionPlaces)
          this.timerCount = 0;
          this.diceNumber--;
        }
        this.timerCount = this.timerCount + 1;
      }
    
    }

  }

/**
 * Set the Dice number ,so the player can walk
 * 
 * @param {number} diceInputNumber 
 */
setDiceNumber(diceInputNumber) {
    this.diceNumber = diceInputNumber;
}
 
}