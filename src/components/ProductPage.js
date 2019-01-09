import React, { Component } from 'react';
import TopHeader from './Header';
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button, Icon } from 'semantic-ui-react';
import Footer from './Footer';
import axios from 'axios';
import { addProduct } from '../store/actions/ShoppingcartAction'
import { connect } from 'react-redux'

class ProductPage extends Component {
  displayName = ProductPage.name
  state = {
  }
  handleChange = () => {
    //console.log(this.state)
    this.props.addProduct(this.state)
    console.log(this.props)
    }
  componentDidMount(){
    let product = this.props.match.params.productid;
    console.log(this.props.match.params.productid)
    axios.get('https://localhost:5001/api/product/' + product)
        .then(res=> {
            console.log(res.data)
            this.setState({
                product_ProductId: res.data.productId,
                product_name: res.data.name,
                product_price: res.data.price,
                product_image: res.data.image,
                product_size: res.data.size,
                product_make: res.data.make,
                product_color: res.data.color,
                product_region: res.data.region,
                product_season: res.data.season,
                product_stock: res.data.stock,
                product_category: 'Doesnt work'
            })
        })
  }
  render() {
    return ( 
      <div>
        <TopHeader />
        <Container>
            <Grid>
                <GridRow>
                    <GridColumn computer='3'>
                        <Container>
                        </Container>
                    </GridColumn>
                    <GridColumn computer='8'>
                        <Divider hidden />
                        <Container textAlign='center'>
                            <Image id="largeImage" src={this.state.product_image} size='big' />
                        </Container>
                    </GridColumn>
                    <GridColumn width='5' verticalAlign='center'>
                        <Divider hidden />
                        <Header size='huge' textAlign='right' color='red'> €{this.state.product_price},- </Header>
                        <Divider hidden/>
                        <Container textAlign='center'>
                            <Header size='huge'>{this.state.product_name}</Header>
                            <Divider hidden/>
                            Size:
                            <Container fluid>
                                <Header size='huge'> {this.state.product_size} </Header>
                            </Container>
                            <Divider hidden />
                            <Button onClick={this.handleChange} color='green' size='massive' icon='shopping cart' fluid> 
                            </Button>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
        <Divider hidden/>
        <Divider horizontal>Product information</Divider>
        <Container textAlign='center'>
            <Container> Name: {this.state.product_name}</Container>
            <Container>Fabric: {this.state.product_make}</Container>
            <Container> Color: {this.state.product_color}</Container>
            <Container> Region: {this.state.product_region}</Container>
            <Container>Season: {this.state.product_season}</Container>
            <Container> Category: {this.state.product_category}</Container>
        </Container>
        <Divider hidden />
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
    return{
      addProduct:(product) => dispatch(addProduct(product))
    }
  }
  const mapStateToProps = (state) => {
    return{
        products:state.ItemCart.products
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ProductPage)