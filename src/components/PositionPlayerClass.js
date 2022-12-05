export class PositionPlayerClass{
   placeOnTheBoard = 0 ;
    PlaceCharacter = [-6000, 2205, -3000];
     timerCount = 0;
     diceNumber = 5;
    
    /**
     * Set the position of the character
     * 
     * @returns the future place of the character
     */
     SetPosition(ListofPositionPlaces) {
        this.resetThePosition(ListofPositionPlaces)
      this.PlaceCharacter = ListofPositionPlaces[ this.placeOnTheBoard];
      let [cx,cy,cz]= this.PlaceCharacter;
      return (
        [cx,cy+1,cz]
      );
    }
    /**
     * Ups the position by 1
     */
     positionUp(ListofPositionPlaces) {
        this.placeOnTheBoard =  this.placeOnTheBoard + 1;
        this.SetPosition(ListofPositionPlaces)
    }
    
    /**
     * reset the position to the beginning of the board
     */
  resetThePosition(ListofPositionPlaces) {
      if ( ListofPositionPlaces.length - 1 <  this.placeOnTheBoard) {
        this.placeOnTheBoard =  this.placeOnTheBoard %  ListofPositionPlaces.length;
      }
    }
    
    /**
     * delays the action of the movement of the player ,so that the player character will move 1 position every 300 counts.
     */
    walkTimer() {
      if ( this.diceNumber > 0) {
        if ( this.timerCount > 300) {
            this.positionUp()
            this.timerCount = 0;
            this.diceNumber--;
        }
        this.timerCount =  this.timerCount + 1
      }


    }
}