import React, { Suspense, useMemo } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../pages/HomePage';
import { allFlattenRoutes as routes } from './index';
// import NotFoundPage from '../pages/NotFoundPage';
//import Loader from '../components/Loader';

const Routes = (parentProps:any) => {

  return (
    <div style={{}}>
      <Suspense fallback={<></>}>
         <BrowserRouter>
          <Switch>
            {routes.map(({ path, exact, component }:any, index:any) => {
              return <Route path={path} exact={exact} component={component}/>
            })}
            
              <Route path="/" component={() => <HomePage />} />
            </Switch>
         </BrowserRouter>

      </Suspense>
    </div>
  );
};

export default Routes;