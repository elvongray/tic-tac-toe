import React, { Component } from 'react';

import './GamePage.scss';

export default class GamePage extends Component {

  render() {
    return (
      <div className="container">
         <div className="row">
           <div className="header">
             <h1>Tic Tac Toe</h1>
           </div>
         </div>
         <div className="row">
           <div className="col-md-6 col-md-offset-4 tictac-container">
             <div className="row">
               <div className="col-md-3 cell"><i className="fa fa-times font-times"></i></div>
               <div className="col-md-3 cell"><i className="fa fa-circle-o font-circle"></i></div>
               <div className="col-md-3 cell cell-right">d</div>
               <div className="col-md-3 cell">s</div>
               <div className="col-md-3 cell">d</div>
               <div className="col-md-3 cell cell-right">d</div>
               <div className="col-md-3 cell cell-bottom">s</div>
               <div className="col-md-3 cell cell-bottom">d</div>
               <div className="col-md-3 cell cell-right cell-bottom">d</div>
             </div>
           </div>
         </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-4 info">
            <span>Your turn to play</span>
          </div>
        </div>
      </div>
    )
  }
}
