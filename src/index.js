import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './style/main.scss'
import Login from './components/login/index.jsx'
import AppRouter from './routers/appRouter'
import configureStore from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

let conf = configureStore()

ReactDOM.render(
    <Provider store={conf.store}>
        <PersistGate loading={null} persistor={conf.persistor}>
            <AppRouter/>
        </PersistGate>
    </Provider>
    , document.getElementById('app')
)
