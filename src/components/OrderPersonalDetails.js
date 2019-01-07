import React, { Component } from 'react';
import { Segment, Step, Icon, Form, Button, Grid, Container, Divider } from 'semantic-ui-react';
import { throws } from 'assert';
import TopHeader from './Header';
import Footer from './Footer';
// import { OrderSteps } from './OrderSteps';

class OrderPersonalDetails extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props
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
                                        <Step disabled>
                                            <Icon name='truck' />
                                            <Step.Content>
                                                <Step.Title>Shipping</Step.Title>
                                                <Step.Description>Choose your shipping options</Step.Description>
                                            </Step.Content>
                                        </Step>

                                        <Step active>
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
                            <h1 className="ui centered">Enter Personal Details</h1>
                            <Segment>
                                <Form color='blue' >
                                    <Container>
                                        <Form.Field>
                                            <label>Age</label>
                                            <input placeholder='Age'
                                                onChange={this.props.handleChange('age')}
                                                defaultValue={values.age}
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
                                        <Button onClick={this.back}>Back</Button>
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

export default OrderPersonalDetails;