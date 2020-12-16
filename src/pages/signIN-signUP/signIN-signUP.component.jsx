import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signIN-signUP.styles.scss';

const SignInAndSignUpPage = () => (
    <div className="signIN-signUP row">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;
