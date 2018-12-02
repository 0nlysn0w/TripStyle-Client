import React, { Component } from 'react'
import { Sidebar, Menu, Icon, Divider, Button, Container, Header, Segment, Image, Grid, SegmentGroup, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

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
            onHide={this.handleSidebarHide}
            vertical
            inverted
            color='grey'
            visible={visible}
            direction='right'
            width='wide'>
            
            <Segment inverted color='grey' textAlign='center'>
              <Button fluid color='green' size='huge' as={NavLink} to='/order'> 
              <Icon name='in cart' size='large' />
              Order
              </Button>
            </Segment>
            
            <Divider />
            <Container textAlign='center'>

              <Segment inverted color='grey'>
                <Header as='h3' floated='left'>Product A</Header>
                <Header as='h2'floated='right'> €20,-</Header>
              <Menu.Item>
                <Grid.Column>
                <Image as={Container} src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='medium'/>
                </Grid.Column>
              </Menu.Item>
              </Segment>

              <Divider />

              <Segment inverted color='grey'>
                <Header as='h3' floated='left'>Product B</Header>
                <Header as='h2'floated='right'> €20,-</Header>
              <Menu.Item>
                <Grid.Column>
                <Image as={Container} src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='medium'/>
                </Grid.Column>
              </Menu.Item>
              </Segment>

              <Divider />

              <Segment inverted color='grey'>
                <Header as='h3' floated='left'>Product C</Header>
                <Header as='h2'floated='right'> €20,-</Header>
              <Menu.Item>
                <Grid.Column>
                <Image as={Container} src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='medium'/>
                </Grid.Column>
              </Menu.Item>
              </Segment>

              <Divider />

              <Segment inverted color='grey'>
                <Header as='h3' floated='left'>Product D</Header>
                <Header as='h2'floated='right'> €20,-</Header>
              <Menu.Item>
                <Grid.Column>
                <Image as={Container} src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='medium'/>
                </Grid.Column>
              </Menu.Item>
              </Segment>

              <Divider />

              <Segment inverted color='grey'>
                <Header as='h3' floated='left'>Product E</Header>
                <Header as='h2'floated='right'> €20,-</Header>
              <Menu.Item>
                <Grid.Column>
                <Image as={Container} src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='medium'/>
                </Grid.Column>
              </Menu.Item>
              </Segment>

              <Divider />

              <Segment inverted color='grey'>
                <Header as='h3' floated='left'>Product F</Header>
                <Header as='h2'floated='right'> €20,-</Header>
              <Menu.Item>
                <Grid.Column>
                <Image as={Container} src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='medium'/>
                </Grid.Column>
              </Menu.Item>
              </Segment>

              <Divider />

              <Segment inverted color='grey'>
                <Header as='h3' floated='left'>Product G</Header>
                <Header as='h2'floated='right'> €20,-</Header>
              <Menu.Item>
                <Grid.Column>
                <Image as={Container} src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='medium'/>
                </Grid.Column>
              </Menu.Item>
              </Segment>

              <Divider />
            
            </Container>
            <Divider />
          </Sidebar>

              <Button circular size='huge' icon='shopping cart' color='green' onClick={this.handleShowClick}>
              </Button>


        </div>
    )
    }
  }

