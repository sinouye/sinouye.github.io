import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../../pages/homepage/home';
import About from '../../pages/about/about';
import Contact from '../../pages/contact/contact';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
    </Switch>
);

export default Routes;