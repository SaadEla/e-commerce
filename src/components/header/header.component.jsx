import { ReactComponent as Logo } from '../../assets/crown.svg'
import React from 'react';
import { Link } from 'react-router-dom';
//import './header.styles.scss';
import  { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCarHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selctor';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer } from './header.styles';



const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <Link className='logo-container' to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {true ? 
                <>
                    <div className="option" onClick = {() => auth.signOut()}>SIGN OUT</div>
                    <CartIcon />
                </>
            :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
            
        </div>
        {hidden ? null : <CartDropdown />}       
    </HeaderContainer>
);

const mapStatetoProps = createStructuredSelector({ 
    currentUser: selectCurrentUser,
    hidden: selectCarHidden
});


export default connect(mapStatetoProps)(Header);

