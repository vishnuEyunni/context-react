import React, { useState } from "react";

const flip = () => ({
  flipResults: Math.random()
})

const Before_CoinFlipper = (
  {
    showLables = true,
    showButton = true
  }) => {
  const [, setData] = useState(flip);

  const handleClick = () => {
    setData(flip)
  }

  return (
    <>
      {showButton && (
        <button onClick={handleClick}>Reflip</button>
      )}
      {flip().flipResults < 0.5 ? (
        <>
          <img src="Heads.svg" alt="Heads" />
          {showLables && <div>Heads</div>}
        </>
      ) : (
          <>
            <img src="Tails.svg" alt="Tails" />
            {showLables && <div>Tails</div>}
          </>
        )}
    </>
  )
};

export default Before_CoinFlipper;
