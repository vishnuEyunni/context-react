import React from "react";
import CoinFlipper from "./components/Headless-UI-Components/Coinflipper";
import Counter from "./eggHead/counter.jsx";
import CounterReducer from "./eggHead/reducer";
import {Toggle} from "./kentC/index";

const App = () => {
  return (
    <>
      <span>Hello</span>
      <CoinFlipper>
        {({rerun, isHeads} : {rerun: any, isHeads: any}) => (
          <>
            {<button onClick={rerun}>Reflip</button>}
            {isHeads ? 
              <div>Heads</div>
              : <div>Tails</div>
            }
          </>
        )}
      </CoinFlipper>
      <div>
        <Counter/>
      </div>
      <div>
        <CounterReducer/>
      </div>
      <div>
        <Toggle/>
      </div>
    </>
  )
}
export default App;
