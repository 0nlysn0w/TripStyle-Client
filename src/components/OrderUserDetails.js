import React, { Component } from 'react';
import { Radio, Segment, Step, Icon, Form, Button, Grid, Divider, Container, Checkbox } from 'semantic-ui-react';
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

                                        <Step disabled>
                                            <Icon name='payment' />
                                            <Step.Content>
                                                <Step.Title>Billing</Step.Title>
                                                <Step.Description>Enter billing information</Step.Description>
                                            </Step.Content>
                                        </Step>

                                        <Step disabled>
                                            <Icon name='info' />
                                            <Step.Content>
                                                <Step.Title>Confirm Order</Step.Title>
                                            </Step.Content>
                                        </Step>
                                    </Step.Group>

                                </Container>
                                <Container />
                            </div>
                            <h1 className="ui centered">Delivery or drop off</h1>
                            <Segment>
                                <Form color='green' >
                                    <Container>

                                        <Form>
                                            <Form.Field>
                                                {/* Selected value: <b>{this.state.value}</b> */}
                                            </Form.Field>
                                            <Form.Field>
                                                <Checkbox
                                                    radio
                                                    label='Deliver at customer address.'
                                                    name='shippingOption'
                                                    value='Deliver at'
                                                    checked={values.shipping === 'Deliver at'}
                                                    onChange={this.props.handleCheckboxChange}
                                                // defaultValue={values.shipping}
                                                />
                                            </Form.Field>
                                            <Form.Field>
                                                <Checkbox
                                                    radio
                                                    label='Pick up on a delivery address'
                                                    name='shippingOption'
                                                    value='Pick up at'
                                                    checked={values.shipping === 'Pick up at'}
                                                    onChange={this.props.handleCheckboxChange}
                                                // defaultValue={values.shipping}
                                                />
                                            </Form.Field>
                                        </Form>
                                    </Container>
                                </Form>
                            </Segment>
                            <Divider hidden />
                            <h1 className="ui centered">Enter User Details</h1>
                            <Segment>
                                <Form color='green' >
                                    <Container>
                                        <Form.Field required min={0} type ='number'> 
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
                                        <Form.Field>
                                            <label>Street</label>
                                            <input placeholder='Street'
                                                onChange={this.props.handleChange('street')}
                                                defaultValue={values.street}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>House Number</label>
                                            <input placeholder='House number'
                                                onChange={this.props.handleChange('houseNumber')}
                                                defaultValue={values.houseNumber}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>postalCode</label>
                                            <input placeholder='Postal code'
                                                onChange={this.props.handleChange('postalCode')}
                                                defaultValue={values.postalCode}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>City</label>
                                            <input placeholder='City'
                                                onChange={this.props.handleChange('city')}
                                                defaultValue={values.city}
                                            />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Country</label>
                                            <input placeholder='Country'
                                                onChange={this.props.handleChange('country')}
                                                defaultValue={values.country}
                                            />
                                        </Form.Field>
                                        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
                                    </Container>
                                </Form>
                            </Segment>
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