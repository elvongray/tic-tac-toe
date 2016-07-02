import React, { Component } from 'react';
import { connect } from 'react-redux';

import GamePage from '../components/Gamepage';

import { humanPlays, checkGameOver, AIPlays } from '../actions/gameActions';

class GameContainer extends Component {

  componentWillReceiveProps(newProps) {
    let { isGameOver, AIPlays, nextPlayer, gameOver } = newProps;

    if (!gameOver) {
      { this.checkIfAITurn(AIPlays, nextPlayer) };
      { isGameOver() };
    }
  }

  checkIfAITurn(AIPlays, nextPlayer) {
    if (nextPlayer !== 'x') return;
    AIPlays()
  }

  render() {

    return (
      <GamePage {...this.props}/>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    userClicked: (cellNo) => dispatch(humanPlays(cellNo)),
    AIPlays: () => dispatch(AIPlays()),
    isGameOver: () => dispatch(checkGameOver())
  }
}

let mapStateToProps = (state) => {
  let { gameState , gameStatus, nextPlayer, gameOver } = state;

  return {
    gameState,
    gameStatus,
    nextPlayer,
    gameOver
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
