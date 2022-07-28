import React from 'react';

const Header=(props)=> {
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again" onClick={props.Again}>Again!</button>
      <div className="number">{props.content.textContent}</div>
    </header>
  )
}

export default Header;