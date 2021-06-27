import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Login } from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>

    <Route exact path="/login" component={ Login } />
  </Switch>
)

export default Routes;