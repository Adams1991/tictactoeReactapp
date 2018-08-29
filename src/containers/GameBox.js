import React, { Component } from 'react';
import Board from '../components/Board.js';


class GameBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      board : new Array(9),
      pictures: ['Craig.jpg',
                'Jarrod.jpg']
    }
  }



render(){
  return (
    <div className="game-box">
      <Board pictures={this.state.pictures}/>
    </div>
  );
}


}

export default GameBox;
