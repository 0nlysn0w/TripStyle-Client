import React, { Component } from 'react';
import { Step, Icon, Button, List, Grid, Divider, Container } from 'semantic-ui-react';
import TopHeader from './Header';
import Footer from './Footer';
// import { OrderSteps } from './OrderSteps';

class OrderConfirmation extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, age, city, country } } = this.props;

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
                                        <Step>
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

                                        <Step active>
                                            <Icon name='info' />
                                            <Step.Content>
                                                <Step.Title>Confirm Order</Step.Title>
                                            </Step.Content>
                                        </Step>
                                    </Step.Group>

                                </Container>
                                <Container />
                            </div>
                            <h1 className="ui centered">Confirm your Details</h1>
                            <p>Click Confirm if the following details have been correctly entered</p>
                            <List divided relaxed>
                                <List.Item>
                                    <List.Icon name='users' />
                                    <List.Content>
                                        <List.Header as='a'>First Name:</List.Header>
                                        <List.Description>{firstName}</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='users' />
                                    <List.Content>
                                        <List.Header as='a'>Last Name:</List.Header>
                                        <List.Description>{lastName}</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='mail' />
                                    <List.Content>
                                        <List.Header as='a'>E-mail</List.Header>
                                        <List.Description>{email}</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='calendar' />
                                    <List.Content>
                                        <List.Header as='a'>Location</List.Header>
                                        <List.Description>{age} Years</List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='marker' />
                                    <List.Content>
                                        <List.Header as='a'>Location</List.Header>
                                        <List.Description>{city}, {country}</List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                            <Button onClick={this.back}>Back</Button>
                            <Button onClick={this.saveAndContinue}>Confirm</Button>
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

export default OrderConfirmation;