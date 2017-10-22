import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

// REDUCER
import {webdevReducer} from './reducers/index';

export default createStore(webdevReducer, applyMiddleware(thunk));