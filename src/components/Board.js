import React, { Component } from 'react';
import Cell from './Cell.js';

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleDivSelected = this.handleDivSelected.bind(this);
  }



  handleDivSelected(index){
    console.log(index);
    this.props.onCellSelected(index)
  }


  render(){


    const board = this.props.data.board.map((cell, index) => {
      return (<Cell key={index} value={index} image={this.props.data.board[index]} divSelected={this.handleDivSelected}>
      </Cell> );


    })


    return(
    <div className="board" >
      {board}
    </div>
    )

  }

}

export default Board;
