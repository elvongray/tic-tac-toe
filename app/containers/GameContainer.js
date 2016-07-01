import React, { Component } from 'react';
import { connect } from 'react-redux';

import GamePage from '../components/Gamepage';

import { humanPlays } from '../actions/gameActions';

class GameContainer extends Component {

  render() {
    return <GamePage {...this.props}/>
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    UserClicked: (cellNo) => dispatch(humanPlays(cellNo))
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
