import React from "react";
import { Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./../pages/home"));
const UserDetail = React.lazy(() => import("./../pages/userDetail"));
const routeObj = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/UserDetail/:id",
    Component: UserDetail,
  },
];

const PrivateRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading ....</>}>
      <Switch>
        {routeObj.map((rtObj, index) => {
          const { path, Component } = rtObj;
          return <Route key={index} path={path} exact render={() => <Component />} />;
        })}
      </Switch>
    </React.Suspense>
  );
};

export default PrivateRoutes;
