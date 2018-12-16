import React, { Component } from 'react';
import Home from './components/Home';
import { ProductPage } from './components/ProductPage';
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import { FilterPage } from './components/FilterPage';
import ShoppingCart from './components/ShoppingCart';
import { OrderPage } from './components/OrderPage';
import {Login} from './components/Login';
import { Registration } from './components/Registration';
import CreateProduct from './components/ChangeData/CreateProduct';
import DeleteProduct from './components/ChangeData/DeleteProduct';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Home} exact />
          <Route path={'/product'} component={ProductPage} />
          <Route path={'/filter'} component={FilterPage} />
          <Route path={'/order'} component={OrderPage} />
          <Route path={'/register'} component={Registration} />
          <Route path={'/admin/create'}component={CreateProduct}/>
          <Route path={'/admin/delete'}component={DeleteProduct}/>
        </Switch>
       </BrowserRouter>
    );
  }
}
