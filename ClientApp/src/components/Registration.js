import React, { Component } from 'react';
import TopHeader from './Header';
import Breadcrumbs from './Breadcrumbs';
import { Container } from 'semantic-ui-react';
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Divider } from 'semantic-ui-react'

export class Registration extends Component {
    displayName = Registration.name

    render() {
        return (
            <div>
                <TopHeader />
                <Container>
                    <h1>Create your account</h1>
                    <Form>
                        <Form.Group unstackable widths={2}>
                            <Form.Input label='First name' placeholder='First name' />
                            <Form.Input label='Last name' placeholder='Last name' />
                        </Form.Group>
                        <Form.Group widths={2}>
                            <Form.Input label='Address' placeholder='Address' />
                            <Form.Input label='Phone' placeholder='Phone' />
                        </Form.Group>
                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Container>
                <Divider hidden />
            </div>
        );
    }
}
