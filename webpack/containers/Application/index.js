import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import RouterComponent from '../Router';

const RouterPortal = () => {
    var routerRoot = document.querySelector('#menu > li:nth-child(3)');
    if (!routerRoot) return null;

    let dropDown = document.querySelector('#menu > li:nth-child(3)');
    let placeholder = document.querySelector(
        '#menu > li:nth-child(3) > ul:nth-child(2)',
    );
    if (
        placeholder &&
        placeholder.innerText.trim() === '_this_will_be_removed_by_react_'
    ) {
        dropDown.removeChild(placeholder);
    }

    return ReactDOM.createPortal(<RouterComponent />, routerRoot);
};

const Dashboard = () => (
    <div>
        <h3>Dashboard</h3>
        <Link to="/redhat_repositories">Link to Repos</Link>
    </div>
);
const Repos = () => (
    <div>
        <h3>Repos</h3>
        <Link to="/dashboard">Link to Dashboard</Link>
    </div>
);

export default ({ store }) => (
    <div className="insdie">
        <Router>
            <div>
                <RouterPortal />
                <Route path="/redhat_repositories" component={Repos} />
                <Route path="/dashboard" component={Dashboard} />
            </div>
        </Router>
    </div>
);
