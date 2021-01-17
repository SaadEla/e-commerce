import { ReactComponent as Logo } from '../../assets/crown.svg'
import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import  { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCarHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selctor';
import { createStructuredSelector } from 'reselect';
import {HeaderContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles';


const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <Link to="/">
            <Logo className="logo"></Logo>
        </Link>
        <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>
            {true ? 
                <>
                    <OptionDiv onClick = {() => auth.signOut()}>SIGN OUT</OptionDiv>
                    <CartIcon />
                </>
            :
                <OptionLink to="/signin">SIGN IN</OptionLink>
            }
            
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}       
    </HeaderContainer>
);

const mapStatetoProps = createStructuredSelector({ 
    currentUser: selectCurrentUser,
    hidden: selectCarHidden
});


export default connect(mapStatetoProps)(Header);

