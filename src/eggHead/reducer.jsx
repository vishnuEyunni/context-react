import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      state = {
        ...state,
        count: state.count + 1
      }
      break;
    case "decrement":
      state = {
        ...state,
        count: state.count - 1
      }
      break;
    default:
      break;
  }
  return state;
}

const init = initialArg => initialArg;

const CounterReducer = ({ initialState = {
  count: 0
} }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const increment = () => {
    dispatch({ type: "increment", by: 1 })
  }
  const decrement = () => {
    dispatch({ type: "decrement", by: 1 })
  }
  return (
    <>
      <div>Counter value is: {state.count}</div>
      <button onClick={increment}>Increment +</button>
      <button onClick={decrement}>Decrement -</button>
    </>
  )
}

export default CounterReducer;