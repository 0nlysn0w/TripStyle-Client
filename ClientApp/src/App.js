import React, { Component } from 'react';
import { Home } from './components/Home';
import { ProductPage } from './components/ProductPage';
import { render } from 'react-dom';
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import { FilterPage } from './components/FilterPage';
import ShoppingCart from './components/ShoppingCart';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Home} exact />
          <Route path={'/product'} component={ProductPage} />
          <Route path={'/filter'} component={FilterPage} />
        </Switch>
       </BrowserRouter> 
    );
  }
}
