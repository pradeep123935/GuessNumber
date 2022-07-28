import React,{useReducer,useEffect} from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const initialState={
  text:"Start guessing...",
  score:20,
  highscore:0,
  textContent:"?",
}
let hs=0;
const reducer = (state,action)=>{
    switch(action.type) {
      case "MATCH": 
                    if(state.score>state.highscore) 
                    hs = state.score;
                    document.querySelector("body").style.backgroundColor = "#60b347";
                    document.querySelector(".number").style.width = "30rem";
                    return Object.assign({},state,{text:"🙌 Currect Number",textContent:action.value,highscore:hs});
    
      case "HIGHER": return Object.assign({},state,{text:"📈 Guess Is Too High!!",score:state.score-1});

      case "LOWER": return Object.assign({},state,{text:"📉 Guess Is Too Low!!",score:state.score-1});
      case "AGAIN": 
                  document.querySelector("body").style.backgroundColor = "#222";
                  document.querySelector(".number").style.width = "15rem";
                  secretNumber = Math.trunc(Math.random() * 20) + 1;
                  return Object.assign({},initialState,{highscore:state.highscore});
      default:return initialState;
    }
 
}

let secretNumber=0;
secretNumber = Math.trunc(Math.random() * 20) + 1;
function App() {

  const [state,dispatch]= useReducer(reducer,initialState);

  console.log(secretNumber);

  const Check = (data)=>{
      if(data==secretNumber) {
        dispatch({type:"MATCH",value:data});
      }else if(data<secretNumber) {
        dispatch({type:"LOWER"});
      }else {
        dispatch({type:"HIGHER"});
      }
  }

  const Again = ()=>{
    dispatch({type:"AGAIN"});
  }
  
  return (
    <React.Fragment>
    <Header content ={state} Again ={Again}/>
    <Main Check = {Check} content={state}/>
    </React.Fragment>
  );
}

export default App;
