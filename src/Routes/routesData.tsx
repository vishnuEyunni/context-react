import React from "react";
import AccordionContainer from "../accordion/AccordionContainer";
import {Reducer,DarkMode} from "../cassidy/index";
import Home from "../Home";
import { Toggle } from "../kentC/index";
import ReducerDemo from "../reducer/ReducerDemo";
import TestmultipleProps from "../rendering/TestmultipleProps";

type RouteType = {
  path: string,
  component: React.FC
}

const Cassidy = () => {
  return(
    <div>
      <div>
      <Reducer/>
      </div>
      <DarkMode/>
    </div>
  )
}

export const routesData: RouteType[] = [
  {
    path: '/kent',
    component: Toggle
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/cassidy',
    component: Cassidy
  },
  {
    path: '/rendering',
    component: TestmultipleProps
  },
  {
    path: '/accodrion',
    component: AccordionContainer
  },
  {
    path: '/reducer',
    component: ReducerDemo
  }
]