import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signIN-signUP/signIN-signUP.component';
import  { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }

unsubscribeFromAuth = null;

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({currentUser: user});
    console.log('hi', user);
  })
}
componentWillUnmount(){
  console.log("by", this.unsubscribeFromAuth());
  this.unsubscribeFromAuth()
}

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }

}

export default App;
