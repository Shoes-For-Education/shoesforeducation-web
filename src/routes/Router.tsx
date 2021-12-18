import React, { Suspense, useMemo } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from '../pages/HomePage';
import { allFlattenRoutes as routes } from './index';
import { IRoute, PrivateRoute } from './utils';
// import NotFoundPage from '../pages/NotFoundPage';
//import Loader from '../components/Loader';

const Routes = (parentProps:any) => {

  return (
    <div style={{}}>
      <Suspense fallback={<></>}>
         <BrowserRouter>
          <Switch>
              {routes.map(({ path, exact, component, isPrivate }:IRoute, index:any) => {
                return !isPrivate ? (
                  <Route key={index} path={path} exact={exact} component={component}/>
                ) : <PrivateRoute key={index} path={path} component={component} /> 
              })}
              <Redirect to="/" />
            </Switch>
         </BrowserRouter>

      </Suspense>
    </div>
  );
};

export default Routes;