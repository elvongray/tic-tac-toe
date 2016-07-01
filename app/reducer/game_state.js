
const initialState = {
  gameState: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  nextPlayer: 'o',
  gameStatus: ''
}

export default (state = initialState, action)  => {
  switch(action.type) {
    default:
      return initialState;
  }
}
