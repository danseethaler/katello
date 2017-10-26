import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { pages } from '../../containers/pagesList';

const NavLink = ({ text, path }) => (
  <li key={path} className="list-group-item">
    <Link id={`menu_item_${path}`} to={`/${path}`} href={`/${path}`}>
      <span className="list-group-item-value">{text}</span>
    </Link>
  </li>
);

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default () => (
  <div>{pages.filter(page => page.showInNav).map(NavLink)}</div>
);
