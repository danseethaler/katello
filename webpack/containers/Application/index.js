import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const Application = ({ store }) => (
    <Router>
        <div>
            <Route path="/redhat_repositories" component={Repos} />
            <Route path="/dashboard" component={Dashboard} />
        </div>
    </Router>
);

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

export default Application;
