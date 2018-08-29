import React, { Component } from 'react';
import Select from './Select.js';

class Board extends Component {
  // constructor() {
  //
  // }


  render(){


    const board = this.props.data.board.map((cell, index) => {
      console.log(this.props.data.players);
      return (<Select key={index} players={this.props.data.players}>
              </Select> );


    })

  console.log(board);
    return(
    <div>
      {board}
    </div>
    )

  }

}

export default Board;
