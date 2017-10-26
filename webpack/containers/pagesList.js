import React from 'react';
import { Route } from 'react-router-dom';
import Repos from '../scenes/Repos';
import Dashboard from '../scenes/Dashboard';
import Menu from '../scenes/Menu';

export const pages = [
  {
    text: 'Experimental UI Menu',
    path: 'xui',
    component: Menu,
    showInNav: false,
  },
  {
    text: 'Dashboard',
    path: 'xui/dashboard',
    component: Dashboard,
    showInNav: true,
  },
  {
    text: 'RH Repos',
    path: 'xui/repos',
    component: Repos,
    showInNav: true,
  },
];

export default () => (
  <div>
    {pages.map(({ path, component }) => (
      <Route exact key={path} path={`/${path}`} component={component} />
    ))}
  </div>
);
