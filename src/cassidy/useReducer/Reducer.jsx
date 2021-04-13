import React, { useReducer, useState } from "react";

function doSomethingAsyn() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1');
}

const Reducer = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => typeof action === 'function' ? action(prevState) : action, 10);

  const [count, setCount] = useState(0)
  const increment = async () => {
    var result = await doSomethingAsyn()
    console.log(result);
    console.log(count);
    setCount(count => count + 1)
  }

  return (
    <>
      <div role="list">{state}</div>
      <button onClick={() => dispatch(state + 1)}>Increment</button>
      <div>
        <p>Clearly this is something that is not related to above: Okay?</p>
        <p>useState Lazy initialization and function updates</p>
        <div>
          <div>{count}</div>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </>
  )
}

export default Reducer;