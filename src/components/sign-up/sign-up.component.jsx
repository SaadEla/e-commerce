import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { auth, createUserProfileDocument }  from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email:'',
            password: '',
            confirmPassword:''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Password don't match");
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email:'',
                password: '',
                confirmPassword:''
            })
        }catch(error){
            console.log(error);
        }
    }
    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-up col-md-6 col-12">
                <h2>I do not have a account</h2>
                <span className="title">Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Display Name" type="text" name="displayName" value={this.state.displayName} handleChange={this.handleChange} required />
                    <FormInput label="Email" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput label="Password" type="password" name="password" value={this.state.password} handleChange={this.handleChange} required />
                    <FormInput label="Confirm Password" type="password" name="confirmPassword" value={this.state.confirmPassword} handleChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;