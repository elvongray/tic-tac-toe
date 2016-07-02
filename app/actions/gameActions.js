import Game from '../game-logic/game_logic';
import AI from '../game-logic/ai_logic.js';

import {
  HUMAN_PLAYS, HUMAN_WINS, NEXT_PLAYER_TURN,
  GAME_OVER, AI_PLAYS, AI_WINS, RESTART_GAME
} from '../constants';

const HUMAN = 'o'
const Ai = 'x'

// Human actions
export const humanPlays = (cellNo) => {
  return (dispatch, getState) => {
    let { gameState } = getState();

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
// End of human actions


// Ai actions
export const AIPlays = () => {
  return (dispatch, getState) => {
    let { gameState } = getState();
    // initialize game for ai decision making
    let game = Game(gameState, Ai);
    if (game.isGameOver()) return;

    // Initialize Ai and make decision
    let ai = AI(game);
    let cellNo = undefined

    // Make the AI decision non blocking
    setTimeout(() => {
      cellNo = ai.play();

      if (cellNo !== undefined) {
        dispatch({ type: AI_PLAYS, payload: cellNo});

        if (AIWins(cellNo, gameState)) {
          dispatch({ type: AI_WINS });
        }
      }
    }, 0)
  }
}

const AIWins = (cellNo, gameState) => {
  let newGameState = gameState.slice();
  newGameState[cellNo] = Ai;

  let game = Game(newGameState);

  if (game.win(Ai)) return true;

  return false
}
// End of AI actions

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
