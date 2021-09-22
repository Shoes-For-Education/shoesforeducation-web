import React from 'react';
import { authRoutes } from './auth';
import { flattenRoutes, IRoute } from './utils';

const HomePage = React.lazy(() => import('../pages/HomePage'));

const rootRoute:IRoute = {
  path: '/',
  exact: true,
  component: HomePage,
  isPrivate: false,
};

const allRoutes = [
  rootRoute,
  ...authRoutes,
];
const allFlattenRoutes = flattenRoutes(allRoutes);

export { allRoutes, allFlattenRoutes };