import React, { Component } from 'react';
import TopHeader from './Header';
import { Step, Icon, Container, Button, Divider } from 'semantic-ui-react';
import ProductImageSlider from './ProductImageSlider';
import SelectSize from './SelectSize';
import Footer from './Footer';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';


export class OrderPage extends Component {
    displayName = OrderPage.name

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render() {
        return (
            <div>
                <TopHeader />
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
                <Container>

                </Container>
                <Divider hidden />
                <Footer />
            </div>
        );

        const {step} = this.state;
        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };
        switch(step) {
        case 1:
            return <UserDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <PersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <Confirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <Success />
        }
    }
}

