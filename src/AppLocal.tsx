import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "./Routes/Routes";

const AppLocal = (props: any) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
          {props.children}
      </BrowserRouter>
    </>
  )
}

export default AppLocal;
