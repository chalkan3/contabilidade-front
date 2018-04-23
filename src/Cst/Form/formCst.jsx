import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import labelAndInput from '../../common/form/labelAndInput.jsx'
import labelAndDrop from './labelAndDropCst'
import { InitCst, validate } from '../CstAction'



class FormCst extends Component {
    componentDidMount() {
        this.props.change('userID', this.props.user.UserID)
    }
    componentDidUpdate() {
        this.props.change('userID', this.props.user.UserID)
    }
    render() {
        const { handleSubmit, readyOnly, buttonName, selected } = this.props
        return (
            <div className='box box-primary'>
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>
                        <Field name='cst' component={labelAndInput}
                            label='CST' cols='12 4'
                            readyOnly={readyOnly}
                            Type='number'
                        />
                        <Field name='Formula' component={labelAndDrop}
                            disabled={readyOnly}
                            label='Formula' cols='12 4 '
                            Selected={selected}
                        />
                        <Field name='cstID' component='input'
                            type='hidden'
                        />
                        <Field name='userID' component='input'
                            type='hidden'
                        />
                    </div>
                    <div className='box-footer'>
                        <button type='submit' className='btn btn-primary' >{buttonName}</button>
                        <button type='button' className='btn btn-default margin'
                            onClick={() => this.props.InitCst(this.props.user.UserID)}
                        >Cancelar</button>
                    </div>
                </form>
            </div>
        )
    }
}
FormCst = reduxForm({ form: 'cadCst', destroyOnUnmount: false, validate})(FormCst)
const mapDispatchToProps = dispatch => bindActionCreators({ InitCst }, dispatch)
const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps, mapDispatchToProps)(FormCst)