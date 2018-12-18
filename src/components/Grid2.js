import React, { Component } from 'react'
import { Button, Header, Grid, Image, Divider, Dimmer, Segment, Card, CardContent, Icon } from 'semantic-ui-react'
import _ from 'lodash'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createProduct } from '../store/actions/productActions'

 class Grid2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      isFiltered: false
    }
  }

  componentDidMount() {
    fetch('https://localhost:5001/api/product/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
        // if (typeof Redux_loaded === 'undefined') {
        //   window.Redux_loaded = true;
        //   this.state.items.map(item =>
        //     this.props.createProduct(item))
        // }
      });
  }

  render() {
    //console.log(this.props.products)
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }

    if (this.state.items && this.state.items.length) {
      console.log(this.state.items[0].images[0].url)
      return (
        <Grid>
          <Grid.Row columns={4} centered relaxed>
            {this.state.items.map(item => (
              <Grid.Column>
                <Link to= {'/' + item.productId}>
                  <Card href='#card-example-link-card' color='teal'>
                    <Image src='http://placekitten.com/200/300' />
                    <CardContent>
                      <Card.Header><Icon name='euro sign' />{item.price}</Card.Header>
                      <Card.Meta>{item.color}
                        <Divider hidden />
                        {item.name}</Card.Meta>
                      <Card.Description>{item.region}</Card.Description>
                    </CardContent>
                  </Card>
                  <Divider hidden />
                </Link>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      )
    }

    // if (this.props.isFiltered({ isFiltered: true })) {
    //   console.log()
    // }

    else {
      return <div><Segment placeholder>
      <Header icon>
        <Icon name='filter' />
        use the the filterbuttons to find specific products.
      </Header>
    </Segment></div>
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    createProduct:(product) => dispatch(createProduct(product))
  }
}
const mapStateToProps = (state) => {
  return{
      products:state.product.products
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Grid2)