import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Layouts
import Layout from './layouts/Layout';

// Components
import Home from './components/Home';
import WidgetContainer from './components/WidgetContainer';
import UsersContainer from './components/UsersContainer';

ReactDOM.render((
    <Router history={browserHistory}>

        <Route component={Layout}>

            <Route path="/" component={Home} />
            <Route path="/widgets" component={WidgetContainer} />
            <Route path="/users" component={UsersContainer} />

        </Route>

    </Router>
), document.getElementById('root'));