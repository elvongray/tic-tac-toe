
const AI = (game) => {
  let ai = 'x';
  let human = 'o';
  let choice = undefined;

  return {
    play() {
      this.minimax(game);
      return choice;
    },

    minimax(game) {
      if(game.isGameOver()) return this.score(game);
      let scores = [];
      let moves = [];

      game.getAvailableMoves().forEach((move) => {
        let newPlayer = game.currentPlayer() === 'x' ? 'o' : 'x';
        let possibleGame = game.returnNewState(move, newPlayer);
        scores.push(this.minimax(possibleGame));
        moves.push(move)
      });

      if (game.currentPlayer() === ai) {
        let maxScoreIndex = scores.indexOf(Math.max.apply(Math, scores))
        choice = moves[maxScoreIndex]
        return scores[maxScoreIndex]
      } else {
        let minScoreIndex = scores.indexOf(Math.min.apply(Math, scores))
        choice = moves[minScoreIndex]
        return scores[minScoreIndex]
      }
    },

    score(game) {
      if (game.win(ai)) {
        return 10;
      } else if (game.win(human)) {
        return -10;
      } else {
        return 0;
      }
    }
  }
}

export default AI;
