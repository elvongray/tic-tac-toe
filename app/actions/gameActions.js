import Game from '../game-logic/game_logic';

import {
  GAME_OVER, RESTART_GAME
} from '../constants';


export const checkGameOver = () => {
  return (dispatch, getState) => {
    let { gameState } = getState();
    let game = Game(gameState)

    if (game.isGameOver()) {

      if (game.draw()) {
        dispatch({
          type: GAME_OVER,
          payload: 'draw'
        });
        return;
      }

      dispatch({
        type: GAME_OVER
      })
    }
  }
}

export const restartGame = () => {
  return {
    type: RESTART_GAME
  }
}
