import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SigIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span className="title">Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Email" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label="Password" type="password" name="password" value={this.state.password} handleChange={this.handleChange} required />
                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SigIn;