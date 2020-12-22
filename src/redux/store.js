import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

//middleware to track action content s
const middlewares =  [logger];
export const store = createStore(rootReducer,applyMiddleware(...middlewares));
export const persistor = persistStore(store);


