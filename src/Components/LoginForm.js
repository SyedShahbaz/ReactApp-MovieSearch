import React, { Component } from 'react';
import FormUserDetails from "./FormUserDetails";
import { FormUserSignUp } from './FormUserSignUp';

export class LoginForm extends Component {
    constructor(props){
        super(props)

        this.state =  {
            step :1,
            firstName:'',
            lastName:'',
            email:'',
            city:'',
            occupation:'',
            bio:''
        }

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
    }
    

    // Proceed to next step
    nextStep() {
        const step = this.state.step;
        this.setState({
            step : step + 1
        });
    }

    // Go back to previous step
    prevStep() {
        const step = this.state.step;
        this.setState({
            step : step - 1
        });
    }

    // Handle fields Change

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

  render() {

    const {step} = this.state;
    const {firstName, lastName, email, occupation,city,bio} = this.state;
    const values = {firstName, lastName, email, occupation,city,bio}

    switch(step){
        case 1:
            return (
                <FormUserDetails 
                    nextStep = {this.nextStep} 
                    handleChange = {this.handleChange}
                    values = {values}
                    loginIsSuccessful = {this.props.loginIsSuccessful}
                />
            )
        case 2: 
            return (
                <FormUserSignUp 
                    prevStep = {this.prevStep} 
                    handleChange = {this.handleChange}
                    values = {values}
                />
            ) 
        case 3:
            return(
                <h1>Confirm</h1>
            )
        
        case 4:
            return(
                <h1>Success</h1>
            )    
                
    }
    
    
  }
}

export default LoginForm
