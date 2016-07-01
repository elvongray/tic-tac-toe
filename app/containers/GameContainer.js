import React, { Component } from 'react';
import { connect } from 'react-redux';

import GamePage from '../components/Gamepage';

class GameContainer extends Component {

  render() {
    return <GamePage {...this.props}/>
  }
}

let mapStateToProps = (state) => {
  let { gameState } = state;

  return {
    gameState
  }
}


export default connect(mapStateToProps)(GameContainer);
