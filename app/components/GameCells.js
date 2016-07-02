import React, { Component } from 'react';


class GameCells extends Component {

  constructor(props) {
    super(props)

    this.displayCircleOrTimes = this.displayCircleOrTimes.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(gameState, cellNo, userClicked, nextPlayer) {
    if (gameState[cellNo] === 'o' || nextPlayer !== 'o') return;
    userClicked(cellNo);
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
    let { gameState, gameStatus, nextPlayer, userClicked} = this.props;

    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 tictac-container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-4 cell"
              onClick={() => this.handleClick(gameState, 0, userClicked, nextPlayer)}>
                { this.displayCircleOrTimes(gameState, 0) }
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4 cell"
              onClick={() => this.handleClick(gameState, 1, userClicked, nextPlayer)}>
                { this.displayCircleOrTimes(gameState, 1) }
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4 cell cell-right"
              onClick={() => this.handleClick(gameState, 2, userClicked, nextPlayer)}>
                { this.displayCircleOrTimes(gameState, 2) }
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-4 cell"
              onClick={() => this.handleClick(gameState, 3, userClicked, nextPlayer)}>
                { this.displayCircleOrTimes(gameState, 3) }
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4 cell"
              onClick={() => this.handleClick(gameState, 4, userClicked, nextPlayer)}>
                { this.displayCircleOrTimes(gameState, 4) }
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4 cell cell-right"
              onClick={() => this.handleClick(gameState, 5, userClicked, nextPlayer)}>
                { this.displayCircleOrTimes(gameState, 5) }
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-4 cell cell-bottom"
              onClick={() => this.handleClick(gameState, 6, userClicked, nextPlayer)}>
                { this.displayCircleOrTimes(gameState, 6) }
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4 cell cell-bottom"
              onClick={() => this.handleClick(gameState, 7, userClicked, nextPlayer)}>
                { this.displayCircleOrTimes(gameState, 7) }
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4 cell cell-right cell-bottom"
              onClick={() => this.handleClick(gameState, 8, userClicked, nextPlayer)}>
                { this.displayCircleOrTimes(gameState, 8) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameCells;
