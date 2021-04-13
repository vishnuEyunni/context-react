import React, { useState } from "react";
import Switch from "./Switch";

const actionTypes = {
  On: 'ON',
  Off: 'OFF',
  Toggle: 'TOGGLE'
}

const useToggle = ({reducer = toggleReducer}= {}) => {
  
  const [{on}, dispatch] = React.useReducer(reducer,{on:false})
  
  const setOff = () => dispatch({type:actionTypes.Off});
  const setOn = () => dispatch({type:actionTypes.On});
  const toggle = () => dispatch({type:actionTypes.Toggle});

  return { on, setOff, setOn, toggle };
}

function toggleReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      alert(1);
      state = { on: !state.on }
      break;
    case 'ON': {
      alert(2);
      state = { on: true }
      break;
    }
    case 'OFF': {
      alert(3);
      state = { on: false }
      break;
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`)
    }
  }
  return state;
}

const Toggle = () => {

  const [clicks, setClicks] = useState(0);
  const tooManyClicks = clicks >= 4;

  const { on, setOff, setOn, toggle } = useToggle({
    reducer(currentState,action) {
      const changes = toggleReducer(currentState,action);
      if(tooManyClicks && action.type === actionTypes.Toggle){
        return {...changes, on: currentState.on }
      } else {
        return changes
      }
    }
  });

  const handleClick = () => {
    toggle();
    setClicks(c => c + 1);
  }

  return (
    <>
      <button onClick={setOff}>Switch Off</button>
      <button onClick={setOn}>Switch On</button>
      <Switch on={on} onclick={handleClick} />
      {
        tooManyClicks ? <button onClick={() => setClicks(0)}>Reset</button> : null
      }
    </>
  )
}

export default Toggle;
