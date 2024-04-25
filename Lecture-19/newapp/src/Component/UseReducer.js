import React, {useReducer} from "react";
 
let initialArg = 0;

const reducer = (state,action) => {
    // console.log(state,action, "state, action");

    if(action.type === "increment"){
        return state + 1;
    }
    if(action.type === "decrement"){
        return state - 1;
    }
    return state;
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialArg)

  return (
    <div>
        <h1 className="text-3xl font-semibold mb-4"> {state} </h1>
        <button onClick={()=>dispatch({type:"increment"})} className="bg-green-500 text-xl text-white px-3 py-2 mx-2">Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})} className="bg-red-500 text-xl text-white px-3 py-2">Decrement</button>
    </div>
  )
}

export default UseReducer