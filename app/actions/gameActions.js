import Game from '../game-logic/game_logic';
import AI from '../game-logic/ai_logic.js';

import {
  HUMAN_PLAYS, HUMAN_WINS, NEXT_PLAYER_TURN, GAME_OVER
} from '../constants';


// Human actions
export const humanPlays = (cellNo) => {
  return (dispatch, getState) => {
    let { gameState } = getState();
    let game = Game(gameState, 'o');

    if (game.isGameOver()) return;

    dispatch(humanPlayed(cellNo));

    if (game.win('o')) {
      dispatch(humanWins())
    } else {
      dispatch(nextPlayersTurn('x'));
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

const nextPlayersTurn = (nextPlayer) => {
  return {
    type: NEXT_PLAYER_TURN,
    payload: nextPlayer
  }
}
// End of human actions


// Ai actions
export const AIPlays = () => {
  return (dispatch, getState) => {
    let { gameState } = getState();
    let game = Game(gameState, 'x');

    // Initialize Ai and make decision
    let ai = AI(game);
    let cellNo = ai.play();

    if (game.isGameOver()) return;

    dispatch(humanPlayed(cellNo));

    if (game.win('o')) {
      dispatch(humanWins())
    } else {
      dispatch(nextPlayersTurn('x'));
    }
  }
}

export const checkGameOver = () => {
  return (dispatch, getState) => {
    let { gameState } = getState();
    let game = Game(gameState)

    if (game.isGameOver()) {
      dispatch(() => {
        type: GAME_OVER
      })
    }
  }
}
