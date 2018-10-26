import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import TopNavigation from './components/TopNavigation';


export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div>
        <Home></Home>
      </div>
    );
  }
}
