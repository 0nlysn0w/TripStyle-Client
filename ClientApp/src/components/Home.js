import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TopNavigation from './TopNavigation';
import TopHeader from './Header';
import { Image } from 'semantic-ui-react';
import worldmap from './Images/worldmap.PNG';
import GridExampleRelaxed from './Grid';
import { Divider } from 'semantic-ui-react';
import Footer from './Footer'; 

export class Home extends Component {
  displayName = Home.name

  render() {
    return ( 
      <div>
        <TopHeader />
        <Container>
          <TopNavigation />
          
        </Container>
        <Divider hidden />
        <Image src={ worldmap } centered/>
        <Divider hidden />
        <Divider horizontal>Recommended</Divider>
        <Container>
        <GridExampleRelaxed />
        </Container>
        <Divider hidden />
        <Divider horizontal>Recently viewed</Divider>
        <Container>
        <GridExampleRelaxed />
        </Container>
        <Divider hidden/>
        <Footer />
      </div>
    );
  }
}
