import React, { Component } from 'react';
import { Home } from './components/Home';
import { ProductPage } from './components/ProductPage';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div>
        <ProductPage />
      </div>
    );
  }
}
