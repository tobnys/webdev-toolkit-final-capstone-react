var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

import {webdevReducer} from './reducers/index';

export default createStore(webdevReducer, applyMiddleware(thunk));