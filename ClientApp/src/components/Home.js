import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TopNavigation from './TopNavigation';
import TopHeader from './Header';
import { Image } from 'semantic-ui-react';
import worldmap from './Images/worldmap.PNG';
import GridExampleRelaxed from './Grid';
import { Divider, Button, Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import Footer from './Footer'; 
import ShoppingCart from './ShoppingCart';


export default class Home extends Component {
  displayName = Home.name

  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    return ( 
      <div>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button>
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='uncover'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            direction='right'
            width='wide'>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
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
            <ShoppingCart />
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>
    );
  }
}


