import React from 'react';
import { Route } from 'react-router';
import { flattenRoutes, PrivateRoute } from './utils';

const HomePage = React.lazy(() => import('../pages/HomePage'));

const rootRoute = {
  path: '/',
  exact: true,
  component: HomePage,
  route: PrivateRoute,
};

const allRoutes = [
  rootRoute,
];
const allFlattenRoutes = flattenRoutes(allRoutes);

export { allRoutes, allFlattenRoutes };