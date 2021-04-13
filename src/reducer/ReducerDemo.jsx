import React, { useCallback, useContext, useReducer, useRef } from "react";
import ReducerContainer from "./ReducerContainer";

const initialState = {
  count: 0,
}

// function reducer(state, action) {
//   switch (action.type) {
//     case "Increment":
//       return { count: state.count + 1 }
//     case "Decrement":
//       return { count: state.count - 1 }
//     default:
//       return state
//   }
// }

function AnotherReducer(state, action) {
  switch (action.type) {
    case "Square":
      return { count: Math.pow(state.count, 2) }
    case "Increment":
          return { count: state.count + 1 }
        case "Decrement":
          return { count: state.count - 1 }
    default:
      return state
  }
}

// function getState(state, props) {
//   return Object.keys(state).reduce((prevState, key) => {
//     prevState[key] = isControlledProp(props, key) ? props[key] : state[key]

//     return prevState
//   }, {})
// }


// function useEnhancedReducer(reducer,initialState,props){
//   const prevStateRef = useRef()
//   const actionRef = useRef()
//   const enhancedReducer = useCallback((state,action) => {
//     actionRef.current = action;
//     state = getState(state,action.props)
//     const changes = reducer(state,action)
//     const newState = action.props.stateReducer(state, {...action, changes})
//     return newState
//   },[reducer]);
//   const [state, setState] = useReducer(enhancedReducer, initialState)
//   const propsRef = useLatestRef(props)
//   const setStateWithProps = useCallback(
//     action => setState({props: propsRef.current, ...action}),
//     [propsRef],
//   )
//   const action = actionRef.current

//   useEffect(() => {
//     if (action && prevStateRef.current && prevStateRef.current !== state) {
//       callOnChangeProps(
//         action,
//         getState(prevStateRef.current, action.props),
//         state,
//       )
//     }

//     prevStateRef.current = state
//   }, [state, props, action])

//   return [state, setStateWithProps]
// }

function useWhatever(reducer, initialState) {
  const [state, setState] = useReducer(reducer, initialState);
  const context = React.createContext(initialState);
  const currentState = useContext(context);
  return { state, setState, currentState }
}

const ReducerDemo = () => {

  const { state, currentState, setState } = useWhatever(AnotherReducer, initialState);

  return (
    <>
      <div>
        <button onClick={() => setState({ type: "Increment" })}>+</button>
      </div>
      <div>
        <button onClick={() => setState({ type: "Decrement" })}>-</button>
      </div>
      <div>
        <button onClick={() => setState({ type: "Square" })}>^2</button>
      </div>
      <div>
        State: {state.count}
      </div>
      <div>
        <ReducerContainer data={currentState} setState={setState}>
          {
            ({ alertDialog }) => (
              <>
                <button onClick={alertDialog}>Submit</button>
              </>
            )
          }
        </ReducerContainer>
      </div>
    </>
  )
}

export default ReducerDemo;
