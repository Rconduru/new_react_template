import axios from 'axios'
import routes from '../routers'
import { AUTH_USER, AUTH_ERROR } from './types'

export function signInAction( { username, password } ) {
    return dispatch => {
        return axios.post(routes.loginRoute, { username, password })
        .then(response => {
            dispatch({ type: AUTH_USER, payload: response.data.access_token });
        })
        .catch(erro => {
            dispatch( { type: AUTH_ERROR, payload: 'Login/Passw ... You are not YOU' } )
        })
    }
}

export function validateTokenAction(){
    return async (dispatch, getState) => {
        try{
            const res = await axios.post(routes.validateTokenRoute, { access_token: getState().auth.authenticated })
            if(!res.data.valid){
                dispatch({ type: AUTH_USER, payload: '' });
                localStorage.clear()
            }
        } catch(error){
            dispatch({ type: AUTH_USER, payload: '' });
            localStorage.clear()
        }
    }
}
