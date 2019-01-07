import React, { Component } from 'react';
import TopHeader from './Header';
import { Step, Icon, Container, Button, Divider } from 'semantic-ui-react';
import ProductImageSlider from './ProductImageSlider';
import SelectSize from './SelectSize';
import Footer from './Footer';
import OrderUserDetails from './OrderUserDetails';
import OrderPersonalDetails from './OrderPersonalDetails';
import OrderConfirmation from './OrderConfirmation';
import OrderSuccess from './OrderSuccess';
import OrderSteps from './OrderSteps';


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
         

        const {step} = this.state;
        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };
        switch(step) {
        case 1:
            return <OrderUserDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <OrderPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <OrderConfirmation 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 4:
            return <OrderSuccess />
        }
    }
}

