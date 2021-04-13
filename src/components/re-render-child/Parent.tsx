import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [items, setItems] = useState<number[]>();
  const callTimeOut = () => {
    setTimeout(() => {
      const val = window.screen.height;
      items ? items.push(val) : null;
      setItems(items);
    }, 2000)

  }
  return (
    <>
      <Child items={items} />
    </>
  );
}

export default Parent;