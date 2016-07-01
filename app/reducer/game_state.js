import {
  HUMAN_PLAYS, HUMAN_WINS, NEXT_PLAYER_TURN, GAME_OVER
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
      let finalGameState = gameState.slice();
      finalGameState[payload] = 'o'
      console.log(finalGameState)
      return { ...state, gameState: finalGameState };

    case HUMAN_WINS:
      return { ...state, gameStatus: { status: 'win', player: 'o' } };

    case NEXT_PLAYER_TURN:
      return { ...state, nextPlayer:  payload };

    case GAME_OVER:
      return { ...state, gameOver: true }

    default:
      return initialState;
  }
}
