import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from './authActions.js'
import Row from '../common/layout/row.jsx'
import Grid from '../common/layout/grid.jsx'
import Messages from '../common/msg/msg.jsx'
import Input from '../common/form/inputAuth.jsx'

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = { loginMode: true }
    }

    onSubmit(values) {
        const { login } = this.props
        this.state.loginMode ? login(values) : ""
    }
    render() {
        const { loginMode } = this.state
        const { handleSubmit } = this.props
        return (
            <div className="login-box">
                <div className="login-logo"><b> My</b> rgori</div>
                <div className="login-box-body">
                    <p className="login-box-msg">Bem vindo!</p>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <Field component={Input} type="input" name="nada"
                            placeholder="Nome" icon='user' hide={loginMode} />
                        <Field component={Input} type="text" name="Email"
                            placeholder="E-mail" icon='envelope' />
                        <Field component={Input} type="password" name="Password"
                            placeholder="Senha" icon='lock' />
                        <Field component={Input} type="password" name="confirm_password"
                            placeholder="Confirmar Senha" icon='lock' hide={loginMode} />
                        <Row>
                            <Grid cols="4">
                                <button type="submit"
                                    className="btn btn-primary btn-block btn-flat">
                                    {loginMode ? 'Entrar' : 'Registrar'}
                                </button>
                            </Grid>
                        </Row>
                    </form>
                    <br />

                </div>
                <Messages />
            </div>

        )
    }
}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
export default connect(null, mapDispatchToProps)(Auth)