import React, { Component } from 'react';
import { Home } from './components/Home';
import { FilterPage } from './components/FilterPage';
import {Login} from './components/Login';
import { Registration } from './components/Registration';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div>
        <Registration />
      </div>
    );
  }
}
