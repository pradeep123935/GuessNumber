import React,{useState} from 'react';

const Main=(props)=> {
    const [state,setState] = useState({value:""});

    return (
        <main>
        <section className="left">
          <input type="number" className="guess" value={state.value} onChange={(e)=>setState({value:e.target.value})} />
          <button className="btn check" onClick={()=>props.Check(state.value)}>Check!</button>
        </section>
        <section className="right">
          <p className="message">{props.content.text}</p>
          <p className="label-score">💯 Score: <span className="score">{props.content.score}</span></p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{props.content.highscore}</span>
          </p>
        </section>
      </main>
    )
  }

  export default Main;