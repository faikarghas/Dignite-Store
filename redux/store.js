import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import * as actionTypes from './actionType';
import {updateObject} from '../lib/updateObject'


const exampleInitialState = {
    idusers: null,
    token: null,
    infoReg:null,
    infoRegErr:[],
    loginLoading: false,
    message: null
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_FAIL:
            return updateObject(state,{infoRegErr: action.payload});
        case actionTypes.REGISTER_SUCCESS:
            return updateObject(state,{infoReg: action.payload,infoRegErr:[]});
        case actionTypes.AUTHENTICATE:
            return updateObject(state,{idusers: action.idusers,token: action.payload});
        case actionTypes.LOGINLOADING:
            return updateObject(state,{loginLoading:action.loginLoading});
        case actionTypes.DEAUTHENTICATE:
            return updateObject(state,{token: null});
        case actionTypes.REAUTHENTICATE:
            return updateObject(state,{idusers: action.idusers,token: action.payload});
        case actionTypes.WRONGPASSWORD:
            return updateObject(state,{message: action.message});
        default:
            return state
    }
}

export const initializeStore = (initialState = exampleInitialState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  }

