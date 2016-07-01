import React, { Component, PropTypes } from 'react';

import './GamePage.scss';

export default class GamePage extends Component {

  constructor(props) {
    super(props)

    this.displayCircleOrTimes = this.displayCircleOrTimes.bind(this)
  }

  displayCircleOrTimes(gameState, position) {
    if (gameState[position]) {
      return gameState[position] === 'x' ? (<i className="fa fa-times font-times"></i>):
        (<i className="fa fa-circle-o font-circle"></i>);
    } else  {
      return (<i className="fa fa-circle-o default-circle"></i>)
    }
  }

  render() {
    let { gameState } = this.props;

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
              <div className="col-md-4 col-sm-4 col-xs-4 cell">
                {this.displayCircleOrTimes(gameState, 0)}
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 cell">
                {this.displayCircleOrTimes(gameState, 1)}
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 cell cell-right">
                {this.displayCircleOrTimes(gameState, 2)}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4 cell">
                {this.displayCircleOrTimes(gameState, 3)}
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 cell">
                {this.displayCircleOrTimes(gameState, 4)}
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 cell cell-right">
                {this.displayCircleOrTimes(gameState, 5)}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4 cell cell-bottom">
                {this.displayCircleOrTimes(gameState, 7)}
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 cell cell-bottom">
                {this.displayCircleOrTimes(gameState, 8)}
              </div>
              <div className="col-md-4 col-sm-4 col-xs-4 cell cell-right cell-bottom">
                {this.displayCircleOrTimes(gameState, 9)}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="info">
            <span>Your turn to play</span>
          </div>
        </div>
      </div>
    )
  }
}

GamePage.propTypes = {
  gameState: PropTypes.array
};
