import React, { Component } from 'react';
import { Grid, Image, Menu } from 'semantic-ui-react'
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
    return (
      <Grid>
        <Grid.Row columns={4} centered relaxed>
          <Grid.Column>
            {items.map(item => (
              <Menu fluid vertical>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <Menu.Item className='header'>{item.name}</Menu.Item>
              </Menu> 
            ))}
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={4}>
          <Grid.Column>
            <Menu fluid vertical>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              <Menu.Item className='header'>Cats</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Menu fluid vertical>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              <Menu.Item className='header'>Cats</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Menu fluid vertical>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              <Menu.Item className='header'>Cats</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Menu fluid vertical>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              <Menu.Item className='header'>Cats</Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={4}>
          <Grid.Column>
            <Menu fluid vertical>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              <Menu.Item className='header'>Cats</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Menu fluid vertical>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              <Menu.Item className='header'>Cats</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Menu fluid vertical>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              <Menu.Item className='header'>Cats</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column>
            <Menu fluid vertical>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
              <Menu.Item className='header'>Cats</Menu.Item>
            </Menu></Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}