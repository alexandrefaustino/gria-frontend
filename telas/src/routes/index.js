import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Register, Login, ResgistrationSuccess } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/register" />
    </Route>

    <Route exact path="/register" component={ Register } />
    <Route exact path="/login" component={ Login } />
    <Route exact path="/sucess" component={ ResgistrationSuccess } />
  </Switch>
);

export default Routes;