
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App} from '../';
import {Home, About, Work, Contact} from '../views'

// import {requireAuthentication} from '../components/AuthenticatedComponent';

export default(
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="work" component={Work}/>
        <Route path="contact" component={Contact}/>
    </Route>
);