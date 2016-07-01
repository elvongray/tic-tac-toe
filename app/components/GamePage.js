import React, { Component, PropTypes } from 'react';

import './GamePage.scss';

export default class GamePage extends Component {

  constructor(props) {
    super(props)

    this.displayCircleOrTimes = this.displayCircleOrTimes.bind(this);
    this.diplayGameStatus = this.diplayGameStatus.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(gameState, cellNo, UserClicked) {
    if (gameState[cellNo] === 'o') return;

  }

  displayCircleOrTimes(gameState, position) {
    if (gameState[position]) {
      return gameState[position] === 'x' ? (<i className="fa fa-times font-times"></i>):
        (<i className="fa fa-circle-o font-circle"></i>);
    } else  {
      return (<i className="fa fa-circle-o default-circle"></i>)
    }
  }

  diplayGameStatus(gameStatus, nextPlayer) {
    let {status, player} = gameStatus;

    if (status) {

    } else if (nextPlayer) {
      return nextPlayer === 'o' ? 'Your turn to play' : "AI's turn to play"
    }
  }

  render() {
    let { gameState, gameStatus, nextPlayer, UserClicked} = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
           <div className="header">
             <h1>Tic Tac Toe</h1>
           </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 tictac-container">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4 cell"
                onClick={() => this.handleClick(gameState, 0, UserClicked)}>
                  { this.displayCircleOrTimes(gameState, 0) }
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 cell"
                onClick={() => this.handleClick(gameState, 1, UserClicked)}>
                  { this.displayCircleOrTimes(gameState, 1) }
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 cell cell-right"
                onClick={() => this.handleClick(gameState, 2, UserClicked)}>
                  { this.displayCircleOrTimes(gameState, 2) }
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4 cell"
                onClick={() => this.handleClick(gameState, 3, UserClicked)}>
                  { this.displayCircleOrTimes(gameState, 3) }
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 cell"
                onClick={() => this.handleClick(gameState, 4, UserClicked)}>
                  { this.displayCircleOrTimes(gameState, 4) }
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 cell cell-right"
                onClick={() => this.handleClick(gameState, 5, UserClicked)}>
                  { this.displayCircleOrTimes(gameState, 5) }
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4 cell cell-bottom"
                onClick={() => this.handleClick(gameState, 6, UserClicked)}>
                  { this.displayCircleOrTimes(gameState, 6) }
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 cell cell-bottom"
                onClick={() => this.handleClick(gameState, 7, UserClicked)}>
                  { this.displayCircleOrTimes(gameState, 7) }
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 cell cell-right cell-bottom"
                onClick={() => this.handleClick(gameState, 8, UserClicked)}>
                  { this.displayCircleOrTimes(gameState, 8) }
              </div>
            </div>
          </div>
        </div>
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
  UserClicked: PropTypes.func.isRequired
};
