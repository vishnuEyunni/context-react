import React, { useState } from "react"

const useToggle = () => {
  const [on, setOnState] = useState(false);

  const toggle = () => setOnState(o => !o);
  const setOn = () => setOnState(true);
  const setOff = () => setOnState(false);
  return { on, setOff, toggle, setOn }
}


const Toggle = () => {
  const { on, setOff, toggle, setOn } = useToggle();

  return (
    <>
      <button onClick={setOff}>Switch off</button>
      <button onClick={setOn}>Switch on</button>
      
    </>
  )
}

export default Toggle;