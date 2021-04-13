import React from "react";
import { routesData } from "./routesData";
import { Route } from "react-router-dom";

const Routes = () => {
  const data = routesData.map((route, index) => 
    <Route key={index} exact={true} path={route.path} component={route.component} />
  );
  return <>{data}</>;
}

export default Routes;
