import React, { useEffect } from "react";

const useStateReducer = (prevState, dispatchArg) => 
  typeof dispatchArg === 'function' ? dispatchArg(prevState) : dispatchArg;

const useStateInitializer = initialArg => typeof initialArg === "function" ? initialArg(20) : initialArg;

function useState(initialValue) {
  return React.useReducer(useStateReducer, initialValue, useStateInitializer);
}

const Counter = () => {
  const [count, setCount] = useState(10) ;
  const increment = () => setCount(c => c + 1)

  useEffect( async () => {
    await loadContent();
  })
  return (
    <>
      <p>The counter value is: {count}</p>
      <button id="btn-click" onClick={increment}>Click</button>
    </>
  )
}
export default Counter;
