import {
  HUMAN_PLAYS, HUMAN_WINS, NEXT_PLAYER_TURN,
  GAME_OVER, AI_PLAYS, AI_WINS, RESTART_GAME
} from '../constants';

const initialState = {
  gameState: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  nextPlayer: 'o',
  gameStatus: {status: '', player: ''},
  gameOver: false
}

export default (state = initialState, action)  => {
  let { gameState } = state;
  let { payload } = action;

  switch(action.type) {
    case HUMAN_PLAYS:
    case AI_PLAYS:
      let { type } = action;
      let nextPlayer = type === HUMAN_PLAYS ? 'x' : 'o';
      let finalGameState = gameState.slice();
      finalGameState[payload] = type === HUMAN_PLAYS ? 'o' : 'x';
      return { ...state, gameState: finalGameState, nextPlayer};

    case HUMAN_WINS:
      return { ...state, gameStatus: { status: 'win', player: 'o' }, gameOver: true };

    case AI_WINS:
      return { ...state, gameStatus: { status: 'win', player: 'x' }, gameOver: true };

    case GAME_OVER:
      return { ...state, gameOver: true, gameStatus: { status: 'draw', player: '' } }

    case RESTART_GAME:
      return initialState;

    default:
      return initialState;
  }
}
