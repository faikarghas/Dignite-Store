import * as actionTypes from './actionType';
import axios from 'axios';
import Router from 'next/router';
import { setCookie, removeCookie } from '../lib/cookie';


// gets token from the api and stores it in the redux store and in cookie
export const authenticate = (username,password) => {
  return dispatch => {
    dispatch({type:actionTypes.LOGINLOADING,loginLoading: true});

    axios.post('http://api.kumiusik.id/api/login', {username,password})
    .then(response => {
        console.log(response.data.success);
        if (response.data.success !== true) {
          dispatch({type: actionTypes.LOGINLOADING, loginLoading: false});
          dispatch({type: actionTypes.WRONGPASSWORD, message: response.data.message});
          setTimeout(() => {
            dispatch({type: actionTypes.WRONGPASSWORD, message:null });
          }, 3000);
        } else {
          setCookie('token', response.data.token);
          setCookie('idusers', response.data.idusers);
          setCookie('relogin', true);

          dispatch({type: actionTypes.LOGINLOADING, loginLoading: false});
          dispatch({type: actionTypes.AUTHENTICATE, payload: response.data.token, idusers: response.data.idusers});

          Router.push('/admin')
        }

    })
    .catch(err => {
      // throw new Error(err);
      Router.push('/error_net')
    })
  }
}

// gets the token from the cookie and saves it in the store
export const reauthenticate = (token,idusers) => {
    return (dispatch) => {
      dispatch({type: actionTypes.REAUTHENTICATE, payload: token,idusers: idusers});
    };
  };

// removing the token
export const deauthenticate = () => {
    return (dispatch) => {
      setCookie('relogin', false);
      Router.replace('/login');
      dispatch({type: actionTypes.DEAUTHENTICATE});
    };
};

export const addcart = (jumlah) => {
  return (dispatch) => {
    dispatch({type:actionTypes.ADDCART,payload: jumlah})
  }
}