// import logo from './logo.svg';
// import { useReducer } from 'react';
import './App.css';
// import React, {useReducer} from 'react';
import UseReducer from './Component/UseReducer';

// let initialArg = 0;
// const reducer = (state, action) =>{
//   console.log(state,action, "state,action");

//   if(action.type === "increment"){
//     return state + 1
//   }
//   if(action.type === "decrement"){
//     return state - 1
//   }
//   return state
// }

function App() {

  // const [state, dispatch] = useReducer(reducer, initialArg)

  return (
    <div className="App">

    <UseReducer/>

      {/* <h1> {state} </h1>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button> */}
    </div>
  );
}

export default App;
