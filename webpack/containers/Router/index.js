import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <ul className="dropdown-menu">
        <li>
            <Link to="dashboard">Dashboard</Link>
        </li>
        <li>
            <Link to="redhat_repositories">Red Hat Repositories</Link>
        </li>
    </ul>
);
