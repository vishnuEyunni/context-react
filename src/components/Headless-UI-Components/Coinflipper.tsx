import React, { useState } from "react";

const flip = () =>({
  flipResults: Math.random()
})

const CoinFlipper = (
  {
    showLables = true,
    showButton = true
  ,
...props}
) => {
  const [data,setData] = useState(flip);

  const handleClick = () => {
    setData(flip)
  }
  
return (
    <>
      {props.children({
        rerun: handleClick,
        isHeads: flip().flipResults < 0.5
      })}
    </>
  )
};

export default CoinFlipper;
