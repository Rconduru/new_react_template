import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import createHistory from 'history/createBrowserHistory'
import LoginPage from "../components/login"
import LoggedPage from "../components/logged"
import NotFoundPage from "../components/notFoundPage"
import PrivateRoute from './privateRoute'
import PublicRoute from './publicRoute'
import { connect } from 'react-redux'

import { validateTokenAction } from '../actions/authAction'

export const history = createHistory()

class AppRouter extends React.Component {

    render(){

        this.props.validateTokenAction()

        return (
            <Router history={history}>
                <div>
                    <Switch>
                        <PublicRoute path="/" component={LoginPage} exact={true}/>
                        <PrivateRoute path="/logged" component={LoggedPage}/>
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default connect(null, { validateTokenAction })(AppRouter)
