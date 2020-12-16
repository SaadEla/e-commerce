import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ children, addstyle, ...otherprops }) => (
    <button className = {`custom-button ${addstyle}`} {...otherprops}>
        {children}
    </button>
)

export default CustomButton;