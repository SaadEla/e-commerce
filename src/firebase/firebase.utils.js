import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyATlwz5ohcnvZXSx87fonY_IBpUZYL7RNU",
    authDomain: "crwn-db-c8828.firebaseapp.com",
    projectId: "crwn-db-c8828",
    storageBucket: "crwn-db-c8828.appspot.com",
    messagingSenderId: "773022465665",
    appId: "1:773022465665:web:6d29b10ced890cd2779780",
    measurementId: "G-2BM7B7ETQQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//we say to firebase that we want to trigger the google popup when we choose to sign in whith google account
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
