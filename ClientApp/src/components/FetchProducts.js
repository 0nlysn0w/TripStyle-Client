import React, { Component } from 'react';

export class FetchProducts extends Component {
  displayName = FetchProducts.name

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };

    fetch('api/product')
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data, loading: false });
      });
  }

  static renderProductsTable(products) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Make</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product =>
            <tr>
              <td>{product.name}</td>
              <td>{product.make}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchProducts.renderProductsTable(this.state.products);

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}

