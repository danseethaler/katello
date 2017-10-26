import React from 'react';
import { NavLink } from 'react-router-dom';
import { DropdownKebab } from 'patternfly-react';
import { links } from './config';

const Link = props => <NavLink {...props} className="temp-menu-item" activeClassName="active" />;

const dropDownItems = links.map(({ text, path }) => (
  <li key={path}>
    <Link to={`/${path}`} href={`/${path}`}>
      {text}
    </Link>
  </li>
));

export default () => (
  <div style={{ float: 'right' }}>
    <DropdownKebab id="xui_menu" pullRight>
      <ul>{dropDownItems}</ul>
    </DropdownKebab>
  </div>
);
