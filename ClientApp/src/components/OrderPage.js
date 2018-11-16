import React, { Component } from 'react';
import TopHeader from './Header';
import { Step, Icon, Container, Button } from 'semantic-ui-react';
import ProductImageSlider from './ProductImageSlider';
import SelectSize from './SelectSize';
import Footer from './Footer';


export class OrderPage extends Component {
  displayName = OrderPage.name

  render() {
    return ( 
        <div>
            <TopHeader />
            <Container textAlign='center'>

                <Step.Group>
                    <Step as={ Button }>
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
            <Footer />
        </div>
    );
  }
}

