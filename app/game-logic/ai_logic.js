
const AI = (game) => {
  let ai = 'x';
  let human = 'o';
  let choice = undefined;
  let moves = [];
  let scores = [];

  return {
    play() {
      this.minimax(game);
      return choice;
    },

    minimax(game, depth = 0) {
      let player = game.currentPlayer()
      let nextPlayer = game.currentPlayer() === 'x' ? 'o' : 'x';
      depth += 1
      if(game.isGameOver()) return this.score(game);

      game.getAvailableMoves().forEach((move) => {
        let possibleGame = game.returnNewState(move, nextPlayer);
        scores.push(this.minimax(possibleGame, depth));
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

    score(game, depth) {
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
