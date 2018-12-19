import React, { Component } from 'react'
import { Sidebar, Menu, Icon, Divider, Button, Container, Header, Segment, Image, Grid, SegmentGroup, Input } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class ShoppingCart extends Component {
    displayName = ShoppingCart.name

    state = { 
    visible: false,
    products: [    ]
  
  }

    handleHideClick = () => this.setState({ visible: false })
    handleShowClick = () => this.setState({ visible: true, products: this.props.products }); 
    handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    console.log(this.props.products)
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
            {this.state.products.map(item => (
               <Segment inverted color='grey'>
                <Header as='h3' floated='left'>{item.product_name}</Header>
                <Header as='h2'floated='right'> €{item.product_price},-</Header>
              <Menu.Item>
                <Grid.Column>
                <Image as={Container} src={item.product_image} size='medium'/>
                </Grid.Column>
              </Menu.Item>
              </Segment>
              ))}
              <Divider /> 

            </Container>
            <Divider />
          </Sidebar>

              <Button circular size='huge' icon='shopping cart' color='red' onClick={this.handleShowClick}>
              </Button>


        </div>
    )
    }
  }

  const mapStateToProps = (state) => {
    return{
        products:state.ItemCart.products
    }
  }
  export default connect(mapStateToProps)(ShoppingCart)