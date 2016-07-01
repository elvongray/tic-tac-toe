import React, { Component } from 'react';
import { connect } from 'react-redux';

import GamePage from '../components/Gamepage';

import { humanPlays, checkGameOver } from '../actions/gameActions';

class GameContainer extends Component {

  render() {
    let { isGameOver } = this.props
    { isGameOver() }
    return (
      <GamePage {...this.props}/>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    userClicked: (cellNo) => dispatch(humanPlays(cellNo)),
    isGameOver: () => dispatch(checkGameOver())
  }
}

let mapStateToProps = (state) => {
  let { gameState , gameStatus, nextPlayer } = state;

  return {
    gameState,
    gameStatus,
    nextPlayer
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
