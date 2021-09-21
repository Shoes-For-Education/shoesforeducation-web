import { Redirect, Route } from 'react-router';
// import { isUserLoggedIn } from '../utils/user';
import React from 'react';

export const PrivateRoute = ({ component: Component, roles, ...rest } : any) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (true) {
          // not logged in so redirect to login page with the return url
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
};

export const flattenRoutes = (routes: any) => {
  let flatRoutes: any = [];

  routes = routes || [];
  routes.forEach((item: any) => {
    flatRoutes.push(item);

    if (typeof item.children !== 'undefined') {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};