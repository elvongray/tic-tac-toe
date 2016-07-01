
const initialState = {
  gameState: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  nextPlayer: 'o',
  gameStatus: {status: '', player: ''}
}

export default (state = initialState, action)  => {
  switch(action.type) {
    default:
      return initialState;
  }
}
