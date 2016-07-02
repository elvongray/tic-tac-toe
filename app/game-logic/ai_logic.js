
const AI = (game) => {
  let ai = 'x';
  let human = 'o';
  let choice = undefined;

  return {

    moves: [],

    scores: [],

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
        this.scores.push(this.minimax(possibleGame, depth));
        this.moves.push(move)
      });

      if (game.currentPlayer() === ai) {
        let maxScoreIndex = this.scores.indexOf(Math.max.apply(Math, this.scores))
        choice = this.moves[maxScoreIndex]
        return this.scores[maxScoreIndex]
      } else {
        let minScoreIndex = this.scores.indexOf(Math.min.apply(Math, this.scores))
        choice = this.moves[minScoreIndex]
        return this.scores[minScoreIndex]
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
