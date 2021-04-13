import React, { useEffect } from "react";

const Child = (props: any) => {
  useEffect(() => {
    console.log()
  },[])
  return (
    <div>
      {
        props.items.length
      }
    </div>
  );
}

export default Child;
