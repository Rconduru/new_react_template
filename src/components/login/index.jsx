import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { signInAction } from '../../actions/authAction'

class Login extends React.Component {

    submit = (values) => {
        this.props.signInAction(values)
    }

    renderError() {
        if (this.props.errorMessage) {
            return (
                <div style={{color:'red'}}>
                    {this.props.errorMessage}
                </div>
            )
        }
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <div className="form">
                <div>
                    <h2>Login</h2>
                    <hr/>

                    <form onSubmit={ handleSubmit(this.submit) }>
                        <Field name='username' component='input' type='text' placeholder='Login ...'/>
                        <Field name='password' component='input' type='password' placeholder='Senha ...'/>
                        <button type='submit'>Sign in</button>
                    </form>
                    { this.renderError() }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.authError.errorMessage }
}

var reduxFormSignin = reduxForm({
    form: 'signin'
})(Login)

export default connect(mapStateToProps, { signInAction })(reduxFormSignin)
