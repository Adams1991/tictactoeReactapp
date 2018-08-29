import React from 'react';


const Cell = function (props) {


  // console.log(props.onDivCelled);

  function handleChange() {
    props.divSelected(props.value)
  }


  // const players = props.players.map((player, index) => {
  //   return <img src={player} key={index} alt="players" ></img>
  // })
  console.log(props.image);
  return (

    <div className="cell"   onClick={handleChange}>
      <img src={props.image} ></img>

    </div>
  )

}


export default Cell;
