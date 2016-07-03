
let Game = (boardState, curPlayer) => {

  const possibleWinStates = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6],
    [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];

  return {
    // Get all the cells available for play
    getAvailableMoves() {
      return boardState.map((value, index) => {
        if (!value) {
          return index
        }
      }).filter(value => value !== undefined);
    },

    // Check if the player wins the game
    win(player) {
      let playerWin = false;
      possibleWinStates.forEach((value, index) => {
        let [x, y, z] = value;
        if ((boardState[x] === player) && (boardState[y] === player) && (boardState[z] === player)) {
          playerWin = true;
        }
      });
      return playerWin;
    },

    currentPlayer() {
      return curPlayer;
    },

    isGameOver() {
      if (this.win("x") || this.win("o") || boardState.indexOf(0) === -1) {
        return true;
      } else {
        return false;
      }
    },

    draw() {
      (boardState.indexOf(0) === -1) ? true : false;
    },

    returnNewState(move, nextPlayer) {
      let newBoardState = boardState.slice()

      newBoardState[move] = this.currentPlayer();
      return Game(newBoardState, nextPlayer)
    }
  }
}

export default Game;
