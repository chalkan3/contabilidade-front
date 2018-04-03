import '../common/template/dependencies.js'

import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import App from './App.jsx'
import Auth from '../auth/auth.jsx'
import { validateToken } from '../auth/authActions.js'


class AuthOrApp extends Component {
    componentWillMount() {

        if (this.props.auth.user) {
            this.props.validateToken(this.props.auth.user.Token)
        }
    }

    render() {
        const { user, validToken } = this.props.auth
        if (user && validToken) {
            axios.defaults.headers.common['authorization'] = `Bearer ${user.Token}`
            return <App>{this.props.children}</App>
        } else if (!user && !validToken) {
            return <Auth />
        } else {
            return false
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)
