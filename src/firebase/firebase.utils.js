import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//We use the documentref to do all CRUD methods 
//The collectionRef is used to just have data

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
    if (!userAuth) return;
    //check if the connected user (with google) exist in the user collection or not
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //a promise
    const snapshot = await userRef.get();
    //if not exist create it
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};
/*
* to add the shop data object to firebase
*/
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
}
/*
*
*/

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routename: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//we say to firebase that we want to trigger the google popup when we choose to sign in whith google account
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
