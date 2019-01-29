import axios from 'axios'
import routes from '../routes'
import { AUTH_USER, AUTH_ERROR } from './types'

export function signInAction( { username, password } ) {
    return dispatch => {
        return axios.post(routes.loginRoute, { username, password })
        .then(response => {
            dispatch({ type: AUTH_USER, payload: response.data.token });
        })
        .catch(erro => {
            dispatch( { type: AUTH_ERROR, payload: 'Login/Passw ... You are not YOU' } )
        })
    }
}
