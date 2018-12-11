import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TopNavigation from './TopNavigation';
import TopHeader from '../components/Header';
import { Image } from 'semantic-ui-react';
import worldmap from '../images/worldmap.PNG';
import GridExampleRelaxed from './Grid';
import { Divider, Button, Sidebar, Segment, Menu, Icon, SidebarPusher } from 'semantic-ui-react';
import Footer from './Footer'; 

import * as Comps from '../components/';

export class HomePage extends Component {

  render() {
    return ( 
      <div>
        <Sidebar.Pushable>
          <SidebarPusher>
            <Comps.TopHeader />
            <Container>
            <Comps.TopNavigation />
            
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
          </SidebarPusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}


