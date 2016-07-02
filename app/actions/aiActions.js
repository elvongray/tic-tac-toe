import Game from '../game-logic/game_logic';
import AI from '../game-logic/ai_logic.js';

import {
  AI_PLAYS, AI_WINS
} from '../constants';


const HUMAN = 'o'
const Ai = 'x'

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