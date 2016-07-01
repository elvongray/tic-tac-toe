import Game from '../game-logic/game_logic';

import {
  HUMAN_PLAYS, HUMAN_WINS, NEXT_PLAYER_TURN, GAME_OVER
} from '../constants';

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
