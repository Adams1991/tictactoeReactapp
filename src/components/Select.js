import React from 'react';


const Select = function (props) {
  const players = props.players.map((player, index) => {
    return <img src={player} key={index} alt="players" ></img>
  })
  return (
    <div>
    {players}
    </div>
  )

}


export default Select;
