import React from "react";
import { useReducer } from "react";
import { useState } from "react";

const actionTypes = {
  toggle: 'TOGGLE',
  on: 'ON',
  off: 'OFF',
}

const toggleReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.toggle:
      return { on: !state.on }
    case actionTypes.on:
      return { on: true }
    case actionTypes.off:
      return { on: false }
    default:
      throw new Error(`unhandled type ${action.type}`);
  }
}

const useToggle = ({ reducer = toggleReducer } = {}) => {
  const [{ on }, dispatch] = React.useReducer(reducer, { on: false })
  const toggle = () => dispatch({ type: actionTypes.toggle })
  const setOn = () => dispatch({ type: actionTypes.on })
  const setOff = () => dispatch({ type: actionTypes.off })

  return { on, toggle, setOn, setOff }
}

const Toggle = () => {

  const [clicksSinceReset, setClicksSinceReset] = React.useState(0)
  const tooManyClicks = clicksSinceReset >= 4

  const { on, toggle, setOn, setOff } = useToggle({
    reducer = (state, action) => {
      const changes = toggleReducer(state, action)
      if (tooManyClicks && action.type === actionTypes.toggle) {
        return { ...changes, on: state.on }
      } else {
        return changes
      }
    }
  });
  return (
    <>
      <div>
        <button onClick={setOn}>On</button>
        <button onClick={setOff}>Off</button>
        <Switch on={on} onClick={() => {
          toggle()
          setClicksSinceReset(count => count + 1)
        }} />
        {
          tooManyClicks ? (
            <button onClick={() => setClicksSinceReset(0)}>Reset</button>
          ) : null
        }
      </div>
    </>
  );
}

const Switch = (props) => {
  return (
    <>
      <div>
        <button onClick={props.toggle}>Switch</button>
        <lable>Now the Switch is {props.on}</lable>
      </div>
    </>
  )
}

export default Toggle;