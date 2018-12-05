import React, { Component } from 'react'
import { Button, Header, Grid, Image, Divider, Dimmer, Segment, Card, CardContent, Icon } from 'semantic-ui-react'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'

export default class Grid2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
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
      });
  }

  render() {
    console.log(this.props.products)
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
                <NavLink to='./product'>
                  <Card href='#card-example-link-card' color='teal'>
                    <Image src='http://placekitten.com/200/300' />
                    <CardContent>
                      <Card.Header><Icon name='euro sign' />{item.price}</Card.Header>
                      <Card.Meta>{item.name}</Card.Meta>
                      <Card.Description>{item.color}</Card.Description>
                      </CardContent>
                  </Card>
                  <Divider hidden />
                </NavLink>
                </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      )
    } else {
      return <div>No items found</div>
    }
  }
}