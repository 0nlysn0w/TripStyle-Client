import React, { Component } from 'react';
import { Step, Icon, Form, Button, Grid, Divider, Container } from 'semantic-ui-react';
import TopHeader from './Header';
import Footer from './Footer';
// import { OrderSteps } from './OrderSteps';

class OrderUserDetails extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values } = this.props;
        return (
            <div>
                <TopHeader />
                <Grid centered columns={2}>
                    <Grid.Column>
                        <Container>
                            {/* <OrderSteps /> */}
                            <div>
                                <Container textAlign='center'>
                                    <Step.Group>
                                        <Step active>
                                            <Icon name='truck' />
                                            <Step.Content>
                                                <Step.Title>Shipping</Step.Title>
                                                <Step.Description>Choose your shipping options</Step.Description>
                                            </Step.Content>
                                        </Step>

                                        <Step>
                                            <Icon name='payment' />
                                            <Step.Content>
                                                <Step.Title>Billing</Step.Title>
                                                <Step.Description>Enter billing information</Step.Description>
                                            </Step.Content>
                                        </Step>

                                        <Step>
                                            <Icon name='info' />
                                            <Step.Content>
                                                <Step.Title>Confirm Order</Step.Title>
                                            </Step.Content>
                                        </Step>
                                    </Step.Group>

                                </Container>
                                <Container />
                            </div>
                            <h1 className="ui centered">Enter User Details</h1>
                            <Form color='green' >
                                <Container>
                                    <Form.Field>
                                        <label>First Name</label>
                                        <input
                                            placeholder='First Name'
                                            onChange={this.props.handleChange('firstName')}
                                            defaultValue={values.firstName}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Last Name</label>
                                        <input
                                            placeholder='Last Name'
                                            onChange={this.props.handleChange('lastName')}
                                            defaultValue={values.lastName}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Email Address</label>
                                        <input
                                            type='email'
                                            placeholder='Email Address'
                                            onChange={this.props.handleChange('email')}
                                            defaultValue={values.email}
                                        />
                                    </Form.Field>
                                    <Button onClick={this.saveAndContinue}>Save And Continue </Button>
                                </Container>
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
        )
    }
}

export default OrderUserDetails;