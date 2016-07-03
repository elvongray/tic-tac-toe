
const AI = (game) => {
  let ai = 'x';
  let human = 'o';
  let choice = undefined;

  return {
    play() {
      this.minimax(game);
      return choice;
    },

    // Implement the minimax algorithm to decided which move to play
    // Note: still kind of buggy, AI does not try to prevent the player
    // from winning.
    minimax(game) {
      if(game.isGameOver()) return this.score(game);

      let moves = [];
      let scores = [];
      let player = game.currentPlayer()
      let nextPlayer = game.currentPlayer() === 'x' ? 'o' : 'x';

      game.getAvailableMoves().forEach((move) => {
        let possibleGame = game.returnNewState(move, nextPlayer);
        scores.push(this.minimax(possibleGame));
        moves.push(move)
      });

      if (game.currentPlayer() === ai) {
        let maxScoreIndex = scores.indexOf(Math.max(...scores))
        choice = moves[maxScoreIndex]
        return scores[maxScoreIndex]
      } else {
        let minScoreIndex = scores.indexOf(Math.min(...scores))
        choice = moves[minScoreIndex]
        return scores[minScoreIndex]
      }
    },

    score(game) {
      if (game.win(ai)) {
        return 10;
      } else if (game.win(human)){
        return -10;
      } else {
        return 0;
      }
    }
  }
}

export default AI;
