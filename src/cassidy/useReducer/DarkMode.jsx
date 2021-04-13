import React, { useReducer, useState } from "react";

function darkModeReducer(state,action) {
  switch(action.type){
    case 'MEDIA_CHANGE':
      return {...state,mode: action.mode}
    case 'SET_MODE':
      return {...state,mode: action.mode}
    default:
      throw new Error(`unhandled action ${action.type}`)
  }
}

function init() {
  
}

function useDarkMode() {

  // const [state,dispatch] = useReducer(darkModeReducer, {
  //   mode: 'light'
  // });
  // useState(() => {
  //   const preferDarkQuery = '';
  //   const mediaQuery = window.matchMedia(preferDarkQuery)
  //   const handleChange = () => setMode(mediaQuery.matches ? 'dark' : 'light')
  //   mediaQuery.addEventListener(handleChange);
  //   return () => mediaQuery.removeEventListener(handleChange);
  // }, [])
  const [mode, setMode] = useState('dark');

  return { mode, setMode }
}

const DarkMode = () => {
  const { mode, setMode } = useDarkMode();
  return (
    <>
      <button onClick={() => setMode(mode === "dark" ? 'light' : 'dark')}>{mode}</button>
    </>
  )
}
export default DarkMode;