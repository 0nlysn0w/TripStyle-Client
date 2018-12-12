import React, { Component } from 'react';
import TopHeader from './Header';
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button, Icon } from 'semantic-ui-react';
import ProductImageSlider from './ProductImageSlider';
import SelectSize from './SelectSize';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import axios from 'axios'


export class ProductPage extends Component {
  displayName = ProductPage.name
  state = {
      product:null
  }
  componentDidMount(){
    let product = this.props.match.params.productid;
    console.log(this.props.match.params.productid)
    axios.get('https://localhost:5001/api/product/' + product)
        .then(res=> {
            // console.log(res.data[0].name)
            this.setState({
                product_name: res.data[0].name,
                product_price: res.data[0].price,
                product_image: res.data[0].images,
                product_size: res.data[0].size,
                product_make: res.data[0].make,
                product_color: res.data[0].color,
                product_region: res.data[0].region,
                product_season: res.data[0].season,
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
                            
                            
                            <ProductImageSlider />
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
                            <Button color='green' size='massive' icon='shopping cart' fluid> 
                            </Button>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
        <Divider hidden/>
        <Divider horizontal>Product information</Divider>
        <Container>
            Name: {this.state.product_name}
            Fabric: {this.state.product_make}
            Color: {this.state.product_color}
            Region: {this.state.product_region}
            Season: {this.state.product_season}
            Category: {this.state.product_category}
        </Container>
        <Divider hidden />
        <Footer />
      </div>
    );
  }
}
       

