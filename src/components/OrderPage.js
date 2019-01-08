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
        shipping: 'Will be delivered at your home',
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        houseNumber: '', 
        postalCode: '',
        city: '',
        country: '',
        bank: ''
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
        console.log(event.target)
    }

    handleCheckboxChange = (e, {value}) => {
        this.setState({shipping : value})
        console.log(this.state.shipping)
    }

    handleDropdownChange = (e, {value}) => {
        this.setState({bank : value})
        console.log(this.state.bank)
    }
    render() {
         

        const {step} = this.state;
        const { street, houseNumber, postalCode ,shipping, firstName, lastName, email, age, city, country, bank,  } = this.state;
        const values = { street, houseNumber, postalCode, shipping, firstName, lastName, email, age, city, country, bank,  };
        switch(step) {
        case 1:
            return <OrderUserDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    handleCheckboxChange = {this.handleCheckboxChange}
                    handleDropdownChange = {this.handleDropdownChange}
                    values={values}
                    />
        case 2:
            return <OrderPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    handleCheckboxChange = {this.handleCheckboxChange}
                    handleDropdownChange = {this.handleDropdownChange}
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

