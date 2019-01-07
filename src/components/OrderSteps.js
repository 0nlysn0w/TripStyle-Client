import React, { Component } from 'react';
import { Step, Icon, Container, Button, Divider } from 'semantic-ui-react';

export class OrderSteps extends Component {

    render() {
        return (
            <div>
                <Container textAlign='center'>

                    <Step.Group>
                        <Step as={Button}>
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
        );
    }
}

