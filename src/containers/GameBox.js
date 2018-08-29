import React, { Component } from 'react';
import Board from '../components/Board.js';


class GameBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      board : [null, null, null, null, null, null, null, null, null],
      players: ['https://codeclan.com/wp-content/uploads/2017/05/Craig-400x400.jpg',
                'https://codeclan.com/wp-content/uploads/2017/12/Jarrod-400x400.jpg'],
      playerSelected: null
    }
    this.handlesSelection = this.handlesSelection.bind(this);
  }

  handlesSelection(indexselected){
    const newArray = [];
    this.state.board.forEach((cell, index) => {
      if (index === indexselected) {
        newArray.push(this.state.players[0]);
      }
      else {
        newArray.push(this.state.board[index])
      }
    })

    const newPlayerArray = [
      this.state.players[1],
      this.state.players[0]
    ]

    this.setState({ board: newArray, players: newPlayerArray })
  }



render(){
  console.log(this.state.board);
  return (
    <div className="game-box">
      <Board data={this.state} onCellSelected={this.handlesSelection}/>
    </div>
  );
}


}

export default GameBox;
