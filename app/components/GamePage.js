import React, { Component, PropTypes } from 'react';

import GameCells from './GameCells';
import GameInfo from './GameInfo'

import './GamePage.scss';

export default class GamePage extends Component {

  render() {

    return (
      <div className="container-fluid">
        <div className="row">
           <div className="header">
             <h1>Tic Tac Toe</h1>
           </div>
        </div>
        <GameCells { ...this.props } />
        <GameInfo { ...this.props } />
      </div>
    )
  }
}

