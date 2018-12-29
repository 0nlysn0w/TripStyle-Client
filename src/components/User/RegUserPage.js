import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../../store/actions/productActions'
import TopHeader from '../Header';
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class CreateProduct extends Component {

  render() {
    return (

      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create new Product</h5>
          <div className="input-field">
            <label htmlFor="Firstname">User Firstname:</label>
          </div>
          <div className="input-field">
          <label htmlFor="Lastname">User Lastname:</label>
          </div>
        </form>
        <Button basic compact secondary as={NavLink} to='/'>
            <p>Home</p>
        </Button>
      </div>
      
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    createProduct:(product) => dispatch(createProduct(product))
  }
}

export default connect(null,mapDispatchToProps)(CreateProduct)