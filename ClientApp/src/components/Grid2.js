import React, { Component } from 'react';
import { Grid, Image, Menu, Divider, Container } from 'semantic-ui-react'
import _ from 'lodash'

export default class Grid2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    if (items && items.length) {
    return (
      <Grid>
        <Grid.Row columns={4} centered relaxed>
          {items.map(item => (
            <Grid.Column>
              <Menu fluid vertical>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <Menu.Item className='header'>{item.id}</Menu.Item>
                <Menu.Item className='header'>{item.name}</Menu.Item>
                <Menu.Item className='header'>{item.email}</Menu.Item>
              </Menu>
              <Divider hidden/>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    )
  }else {
    return <div>No items found</div>
}}}