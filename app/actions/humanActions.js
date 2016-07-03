import Game from '../game-logic/game_logic';

import {
  HUMAN_PLAYS, HUMAN_WINS
} from '../constants';

const HUMAN = 'o'
const Ai = 'x'

// Human actions
export const humanPlays = (cellNo) => {
  return (dispatch, getState) => {
    let { gameState, gameOver } = getState();

    if (gameOver) return;

    // check if the player's move is a winning move.
    let newGameState = gameState.slice();
    newGameState[cellNo] = HUMAN
    let game = Game(newGameState, HUMAN);

    dispatch(humanPlayed(cellNo));

    if (game.win(HUMAN)) {
      dispatch(humanWins())
    }
  }
}

const humanPlayed = (cellNo) => {
  return {
    type: HUMAN_PLAYS,
    payload: cellNo
  }
}

const humanWins = () => {
  return {
    type: HUMAN_WINS
  }
}