import React, { Component, PropTypes } from 'react';


export default class GameInfo extends Component {

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
    let { gameStatus, nextPlayer, restartGame } = this.props;

    return (
      <div className="row">
        <div className="info">
          <span>{ this.diplayGameStatus(gameStatus, nextPlayer) }</span>
          <button type="button" className="btn btn-primary"
            onClick={ () => restartGame() }>
            Restart Game
          </button>
        </div>
      </div>
    )
  }
}

GameInfo.propTypes = {
  nextPlayer: PropTypes.string.isRequired,
  gameStatus: PropTypes.object.isRequired,
  restartGame: PropTypes.func.isRequired
};
