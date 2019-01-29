import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { reducer as formReducer } from 'redux-form'

import storage from 'redux-persist/lib/storage'

import authReducer from './auth'
import authErrorReducer from './hasAuthError'

const authPersistConfig = {
  key: 'auth',
  storage: storage
}

export default combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    authError: authErrorReducer,
    form: formReducer
})
