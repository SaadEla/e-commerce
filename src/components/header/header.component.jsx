import { ReactComponent as Logo } from '../../assets/crown.svg'
import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import  { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {currentUser ? 
                <div className="option" onClick = {() => auth.signOut()}>SIGN OUT</div>
            :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}       
    </div>
);

const mapStatetoProps = (state) => {
    return{
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
    };

}

export default connect(mapStatetoProps)(Header);

