import React, { Component } from 'react';
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import * as Pages from './containers'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Pages.HomePage} exact />
          <Route path={'/product'} component={Pages.ProductPage} />
          <Route path={'/filter'} component={Pages.FilterPage} />
          <Route path={'/order'} component={Pages.OrderPage} />
          <Route path={'/register'} component={Pages.RegistrationPage} />
        </Switch>
       </BrowserRouter>
    );
  }
}
