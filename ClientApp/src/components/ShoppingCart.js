import React, { Component } from 'react'
import { Sidebar, Menu, Icon, Label, Button, Container, Segment, Image, Grid } from 'semantic-ui-react';

export default class ShoppingCart extends Component {
    displayName = ShoppingCart.name

    state = { visible: false }

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true })
    handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    return (
        <div>
            <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            direction='right'
            width='wide'>
            <Container as={Segment}>
              <Button color='green' size='large' > 
              <Icon name='in cart' size='large' />
              Order
              </Button>
            </Container>

            <Grid centered padded>
            <Grid.Row>
            <Image as={Container} src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='medium'/>
            </Grid.Row>
            <Grid.Row>
            <Image as={Container} src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='medium'/>
            </Grid.Row>
            </Grid>

          </Sidebar>

              <Button circular size='huge' icon='shopping cart' color='green' onClick={this.handleShowClick}>
              </Button>


        </div>
    )
    }
  }

