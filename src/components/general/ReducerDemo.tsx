import React from "react";

let initialState: Stat = {
  count: 0,
  cake: true,
  switches: "zylons",
  user: {
    name: "cassidy"
  }
}

type Demograph = {
  name: string;
}

type Stat = {
  count: number;
  cake: boolean;
  switches: string;
  user: Demograph;
}

// type ACTon = {
//   type: string;
//   by?: any
// }

const actions = [
  { type: "ADD", by: 2 },
  { type: "MINUS", by: 4 },
  { type: "EAT_CAKE" }
];

const reducer = (state: any, action: any) => {
  if (action.type === "ADD") {
    return { ...state, count: state.count + action.by }
  } else if (action.type === "MINUS") {
    return {...state, count: state.count - action.by}
  } else if (action.type === "EAT_CAKE") {
    return {...state, cake: state.cake = false}
  }

  return state;
}


console.log(actions.reduce(reducer, initialState))

const ReducerDemo = () => {
  return (
    <>
      Chauvinism
    </>
  )
}

export default ReducerDemo;
