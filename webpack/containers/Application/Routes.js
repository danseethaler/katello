import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './Menu';
import { links } from './config';

export default () => (
  <div>
    <Route key="menu" path="/xui" component={Menu} />
    {links.map(({ path, component }) => (
      <Route exact key={path} path={`/${path}`} component={component} />
    ))}
  </div>
);
