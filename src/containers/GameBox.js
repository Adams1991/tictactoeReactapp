import React, { Component } from 'react';
import Board from '../components/Board.js';


class GameBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      board : new Array(null, null, null, null, null, null, null, null, null),
      players: ['https://codeclan.com/wp-content/uploads/2017/05/Craig-400x400.jpg',
                'https://codeclan.com/wp-content/uploads/2017/12/Jarrod-400x400.jpg']
    }
  }



render(){
  return (
    <div className="game-box">
      <Board data={this.state}/>
    </div>
  );
}


}

export default GameBox;
