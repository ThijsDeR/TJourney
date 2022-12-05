import "../../App.css";

import { ListofPositionPlaces } from "../../assets/Environment/Environment";

let placeOnTheBoard = 2 ;
let PlaceCharacter = [-6000, 2205, -3000];
let timerCount = 0;
let diceNumber = 5;

/**
 * Set the position of the character
 * 
 * @returns the future place of the character
 */
export function SetPosition() {
  resetThePosition(ListofPositionPlaces)
  PlaceCharacter = ListofPositionPlaces[placeOnTheBoard];
  console.log(PlaceCharacter)
  return (
    PlaceCharacter
  );
}
/**
 * Ups the position by 1
 */
export function positionUp() {
  placeOnTheBoard = placeOnTheBoard + 1;
  SetPosition()
}

/**
 * reset the position to the beginning of the board
 */
export function resetThePosition() {
  if (ListofPositionPlaces.length - 1 < placeOnTheBoard) {
    placeOnTheBoard = placeOnTheBoard % ListofPositionPlaces.length;
  }
}

/**
 * delays the action of the movement of the player ,so that the player character will move 1 position every 300 counts.
 */
export function walkTimer() {
  if (diceNumber > 0) {
    if (timerCount > 300) {
      positionUp()
      timerCount = 0;
      diceNumber--;
    }
    timerCount = timerCount + 1
  }
}