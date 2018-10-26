import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { GridRow } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import TopNavigation from './TopNavigation';
import TopHeader from './Header';

export class Home extends Component {
  displayName = Home.name

  render() {
    return ( 
      <div>
        <TopHeader></TopHeader>
        <Container>
          <TopNavigation />
        </Container>
      </div>
    );
  }
}
