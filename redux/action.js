import * as actionTypes from './actionType';
import axios from 'axios';
import Router from 'next/router';
import { setCookie, removeCookie } from '../lib/cookie';


export const register = (data) =>{
  return (dispatch) => {
    let firstname = data.firstname,
        lastname = data.lastname,
        username = data.username,
        email = data.email,
        password = data.password

    let pr = new Promise(function (resolve,reject) {
      axios.post('https://apistore.dignite.studio/api/authRegister',{firstname,lastname,username,email,password}).then(response=>{
        if (response.data.status === true) {
          // duplicate email
          dispatch({type:actionTypes.REGISTER_FAIL})
          resolve(response.data.status)
        } else if (response.data.success !== true){
          dispatch({type:actionTypes.REGISTER_SUCCESS})
          resolve(response.data.status)
        }
      })
    })
    return pr
  }
}


// gets token from the api and stores it in the redux store and in cookie
export const authenticate = (email,password,issuer) => {
  return dispatch => {

    let loginDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    console.log(loginDate);
    let pa = new Promise(function (resolve,reject) {
      axios.post('https://apistore.dignite.studio/api/authLogin', {email,password,issuer,loginDate})
      .then(response => {
          if (response.data.success !== true) {
            response.data.code === 'email_wrong' ? dispatch({type: actionTypes.EMAIL_LOGIN_INFORMATION, message: response.data.message}) : null;

            response.data.code === 'pass_wrong' ? dispatch({type: actionTypes.PASSWORD_LOGIN_INFORMATION, message: response.data.message}) : null;

            setTimeout(() => {
              dispatch({type: actionTypes.EMAIL_LOGIN_INFORMATION, message:null });
              dispatch({type: actionTypes.PASSWORD_LOGIN_INFORMATION, message: null});
            }, 3000);

            resolve(response.data.success)
          } else {
            setCookie('token', response.data.token);
            setCookie('idusers', response.data.idusers);
            setCookie('relogin', true);
            // * kurang iduser dan token
            dispatch({type: actionTypes.AUTHENTICATE, payload: response.data.token, idusers: response.data.idusers});

            resolve(response.data.success)
          }

      })
    })

    return pa

  }
}

// gets the token from the cookie and saves it in the store + verify from server side
export const reauthenticate = (token,idusers) => {
    return dispatch => {
      dispatch({type: actionTypes.AUTHENTICATE, payload: token, idusers: idusers});
      dispatch({type: actionTypes.REAUTHENTICATE, payload: token,idusers: idusers});
      axios.post('http://localhost:3007/api/authVerify',{token}).then(response=>{
        // console.log(response.data,'server sider');
      })
    };
};

// verify token from client side
export const verify_auth = (token,issuer) => {
  return dispatch => {

    let pv = new Promise(function (resolve,reject) {
      dispatch({type: actionTypes.VERIFY_AUTH});
      axios.post('https://apistore.dignite.studio/api/authVerify',{token,issuer}).then(response=>{
        resolve(response.data)
      })
    })

    return pv

  };
};

// removing the token
export const deauthenticate = () => {
    return (dispatch) => {

      let de = new Promise(function (resolve,reject) {
        removeCookie('token')
        removeCookie('idusers')
        dispatch({type: actionTypes.DEAUTHENTICATE});

        resolve(true)
      })
      return de

    };
};


export const switchFormHandler = (bool) => {
  return (dispatch) => {
    dispatch({type:actionTypes.SWITCHFORM, switch: bool})
  }
}

export const switchFormHandler2 = (type) => {
  return (dispatch) => {
    dispatch({type:actionTypes.CURRFORM, payload: type})
  }
}


export const addcart = (jumlah) => {
  return (dispatch) => {
    dispatch({type:actionTypes.ADDCART,payload: jumlah})
  }
}