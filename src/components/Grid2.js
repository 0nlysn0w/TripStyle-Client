import React, { Component } from 'react'
import { Button, Header, Grid, Image, Divider, Dimmer, Segment, Card, CardContent, Icon } from 'semantic-ui-react'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'

export default class Grid2 extends Component {
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
      });
  }

  render() {
    console.log(this.props.products)
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }

    if (this.props.products && this.props.products.length) {
      return (
        <Grid>
          <Grid.Row columns={4} centered relaxed>
            {this.props.products.map(item => (
              <Grid.Column>
                <NavLink to='./product'>
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
                </NavLink>
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