import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProduct } from '../../store/actions/productActions'
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class DeleteProduct extends Component {
  state = {
    ProductId: ''

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.ProductId);
    this.props.deleteProduct(this.state.ProductId)
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
            <button className="btn pink lighten-1 z-depth-0">Delete</button>
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
    deleteProduct:(ProductId) => dispatch(deleteProduct(ProductId))
  }
}

export default connect(null,mapDispatchToProps)(DeleteProduct)