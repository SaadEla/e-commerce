import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signIN-signUP/signIN-signUP.component';
import  { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selctor';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';



class App extends React.Component {

unsubscribeFromAuth = null;

componentDidMount(){
  const {setCurrentUser} = this.props;
  //userauth is a user object info if exists or null
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot => {
        setCurrentUser({
          id: snapshot.id,
          ...snapshot.data()
        });
      });
    }

    setCurrentUser(userAuth)

  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth()
}

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
        </Switch>
      </div>
    );
  }

}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);
