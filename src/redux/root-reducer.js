import { combineReducers } from 'redux';
//reducers
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.reducer';

import { persistReducer } from 'redux-persist';
//for the local storage u can import also the session storage
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    //u tell at each pont in the reducer u want to store everything
    key: 'root',
    storage,
    // array containing all the reducers that i want to store
    //(we didnt add user cause he is stored by firebase)
    whitelist: ['cart', 'directory']
};
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
});
export default persistReducer(persistConfig, rootReducer)