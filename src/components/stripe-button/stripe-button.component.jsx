import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I8TIXAHMBSJAhKZUU2OzOuFoaXFW55X9FpKotkU3KpR2AnAOLKLctmlFVWKioMehTkvtF5DTyVo7cGc1yvitmQu00xRHvIudG';
    const onToken = token => {
        alert('Payment Successful');
        console.log(token);
    }
    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN App'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;