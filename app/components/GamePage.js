import React, { Component, PropTypes } from 'react';

import GameCells from './GameCells';

import './GamePage.scss';

export default class GamePage extends Component {

  constructor(props) {
    super(props)

    this.diplayGameStatus = this.diplayGameStatus.bind(this);
  }

  diplayGameStatus(gameStatus, nextPlayer) {
    let {status, player} = gameStatus;

    if (status) {
      switch(status) {
        case 'win':
          return player === 'o' ? 'You Win!' : 'AI Wins!';
        case 'draw':
          return 'There is no winner';
      }
    } else if (nextPlayer) {
      return nextPlayer === 'o' ? 'Your turn to play' : "AI's turn to play";
    }
  }

  render() {
    let { gameState, gameStatus, nextPlayer, userClicked} = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
           <div className="header">
             <h1>Tic Tac Toe</h1>
           </div>
        </div>
        <GameCells {...this.props} />
        <div className="row">
          <div className="info">
            <span>{ this.diplayGameStatus(gameStatus, nextPlayer) }</span>
          </div>
        </div>
      </div>
    )
  }
}

GamePage.propTypes = {
  gameState: PropTypes.array,
  gameStatus: PropTypes.object,
  nextPlayer: PropTypes.string,
  userClicked: PropTypes.func.isRequired
};
