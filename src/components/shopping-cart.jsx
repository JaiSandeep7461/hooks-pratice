import { useReducer, useState } from "react";

const initialState = 0;

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.value;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

const Counter = () => {
const [count,dispatch] =  useReducer(countReducer,initialState);
  return (
    <div>
      <h2>
        Count: {count}
      </h2>
      <button onClick={() => dispatch({type:"INCREMENT",value:5})}>Increment by 5</button>
      <button onClick={() =>dispatch({type:"DECREMENT"})}>-</button>
      <button onClick={() => dispatch({type:"RESET"})}>Reset</button>
    </div>
  );
};

export default Counter;
