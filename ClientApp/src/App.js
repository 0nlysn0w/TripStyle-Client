import React, { Component } from 'react';
import { Home } from './components/Home';
import { FilterPage } from './components/FilterPage';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div>
        <FilterPage />
      </div>
    );
  }
}
