import React, { Component } from 'react';
import { connect } from 'react-redux';

import GamePage from '../components/Gamepage';

class GameContainer extends Component {

  render() {
    return <GamePage />
  }
}


export default connect()(GameContainer);
