import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ id, name, price, imageUrl }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            <Link className="option" to="/signin">SIGN IN</Link>

        </div>
    </div>
);

export default Header;
