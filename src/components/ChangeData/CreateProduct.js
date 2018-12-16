import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct } from '../../store/actions/productActions'
import TopHeader from '../Header';
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class CreateProduct extends Component {
  state = {
    ProductId: '',
    Name:'',
    Make:'',
    Price:'',
    Stock:'',
    Size:'',
    Color:'',
    Region:'',
    Season:''

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createProduct(this.state)
  }
  render() {
    return (

      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create new Product</h5>
          <div className="input-field">
            <label htmlFor="ProductId">ProductId</label>
            <input type="text" id='ProductId' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="Name">Product Name</label>
            <textarea  id="Name" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Create</button>
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