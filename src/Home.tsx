import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routesData } from "./Routes/routesData";

const makeLinks = (route: string, value?: any) => {
  return (
    <div>
      <Link to={value ? value : route}>{route}</Link>
    </div>
  )
}

const getAge = () => {
  console.log("hi")
  return 10;
}
const getDave = () => {
  console.log("hi Dave")
  return 20;
}

const initialState = {
  id: 12,
  name: 'ryan',
  age: getAge(),
  dave: getDave()
}

const Home = () => {
  const [state, setState] = useState(initialState);
  const [count, setCount] = React.useState(() => {console.log(0); return 0})
  const increment = () => setCount(count + 1)

  return (
    <>{
      routesData.map(route =>
        makeLinks(route.path)
      )
    }
      <div>
        <div>Id values is: {state.id}</div>
        <div>Age is {state.age}</div>
        <div>Dave's Age is {state.dave}</div>
        <button onClick={() => setState(c => {
          const state = { ...c, id: c.id + 1 }
          return state
        })}>Click</button>
      </div>
      <div>
        <button onClick={increment}>{count}</button>
      </div>
    </>
  )
}

export default Home;
