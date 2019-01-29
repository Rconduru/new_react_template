import { AUTH_ERROR } from '../actions/types'

const INITIAL_STATE = {
  errorMessage: ''
}

export default function(state = {}, action) {
    switch(action.type){
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload }
        default:
            return state
    }
}
