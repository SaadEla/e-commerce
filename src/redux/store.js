import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//middleware to track action content s
const middlewares =  [logger];
const store = createStore(rootReducer,applyMiddleware(...middlewares));

export default store;
