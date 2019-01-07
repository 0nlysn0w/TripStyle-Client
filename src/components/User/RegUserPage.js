import React, { Component } from 'react';
import TopHeader from '../Header';
import { Button, Container, Grid, Checkbox, Form, Input, Radio, Select, TextArea, Divider } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer';

export default class RegUserPage extends Component {
    displayName = RegUserPage.name
    constructor(props) {
      super(props);
      this.state = {
        users: null,
        isLoaded: false
      }
    }

    componentDidMount() {
      fetch('https://localhost:5001/api/user')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            users: json
          })
        });
    }
    

    render() {
      var { isLoaded, users} = this.state;
      if (!isLoaded) {
        return <div>Loading...</div>;
      }
      if (users && (users.length = 1)) {
        return (
            <div>
                <TopHeader />
                <Grid centered columns={2}>
                {users.map(user => (
                    <Grid.Column>
                        <Container>
                            <h1>My customer information:</h1>
                            <Form>
                                <Container>
                                    <Form.Input label='First name:' placeholder={user.firstname} readOnly/>
                                    <Form.Input label='Last name:' placeholder={user.lastname} readOnly/>
                                    <Form.Input label='Email address' placeholder={user.email} readOnly/>
                                    <Form.Input label='Phone number' placeholder={user.phonenumber} readOnly/>
                                    <Form.Group unstackable widths={2}>
                                        <Form.Input label='Postal code' placeholder={user.postalcode} readOnly/>
                                        <Form.Input label='House number' placeholder={user.housenumber} readOnly/>
                                    </Form.Group>
                                    {/* <Form.Checkbox label='I agree to take part in the "human centipide project"' /> */}
                                </Container>
                                <Divider hidden fitted />
                            </Form>
                        </Container>
                    </Grid.Column>
                    ))}
                </Grid>

                <Divider horizontal>  My orders </Divider>

              

                <Footer />
            </div>
        );
    }
}
}
