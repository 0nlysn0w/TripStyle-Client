import React, { Component } from 'react';
import TopHeader from './Header';
import Breadcrumbs from './Breadcrumbs';
import { Button, Container, Grid, Checkbox, Form, Input, Radio, Select, TextArea, Divider } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer';

export class Registration extends Component {
    displayName = Registration.name

    render() {
        return (
            <div>
                <TopHeader />
                <Grid centered columns={2}>
                    <Grid.Column>
                        <Container>
                            <h1>Create your account</h1>
                            <Form>
                                <Container>
                                    <Form.Input label='First name' placeholder='First name' required />
                                    <Form.Input label='Last name' placeholder='Last name' required />
                                    <Form.Input label='Email address' placeholder='Email address' required />
                                    <Form.Group unstackable widths={2}>
                                        <Form.Input label='Password' placeholder='Password' required />
                                        <Form.Input label='Confirm password' placeholder='Confirm Password' required />
                                    </Form.Group>
                                    <Form.Input label='Phone number' placeholder='Phone number' />
                                    <Form.Group unstackable widths={2}>
                                        <Form.Input label='Postal code' placeholder='Postal code' required />
                                        <Form.Input label='House number' placeholder='House number' required />
                                    </Form.Group>
                                    <Form.Checkbox label='I agree to the Terms and Conditions' required />
                                    {/* <Form.Checkbox label='I agree to take part in the "human centipide project"' /> */}
                                </Container>
                                <Divider hidden fitted />
                                <Button type='submit'>Submit</Button>
                            </Form>
                        </Container>
                    </Grid.Column>
                </Grid>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Footer />
            </div>
        );
    }
}
