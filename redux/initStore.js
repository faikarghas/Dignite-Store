import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './store';

const rootReducer = combineReducers({
    store: reducer
});

export function initializeStore() {
    return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
