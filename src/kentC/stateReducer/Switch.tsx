import React from "react";

const Switch = (props: any) => {
  const { on, onclick } = props;

  return (
    <>
      <div>Current state is: {on ? "on" : "off"}</div>
      <button onClick={onclick}>Toggle!</button>
    </>
  )
}

export default Switch;
