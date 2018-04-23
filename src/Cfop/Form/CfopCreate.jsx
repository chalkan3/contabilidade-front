import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import labelAndInput from '../../common/form/labelAndInput.jsx'
import labelAndDrop from './labelAndDropdown'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import Grid from '../../common/layout/grid'


import { initCfop, validate } from '../CfopActions'



class CfopForm extends Component {
    componentDidMount(){
        this.props.change('userID',this.props.user.UserID)
    }
    componentDidUpdate(){
        this.props.change('userID', this.props.user.UserID)   
    }

    render(){
        const { handleSubmit, readyOnly, buttonName, selected } = this.props
        return(
            <div className='box box-primary'>
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>
                        <Field name='Cfop' component={labelAndInput}
                            label='Informe o CFOP ' cols='12 4 '
                            readyOnly={readyOnly}
                            Type='number'
                            Maxlength="4"
                        />
                        <Field name='tipo' component={labelAndDrop}
                            disabled={readyOnly}
                            label='Informe o CFOP ' cols='12 4 '
                            Selected={selected}

                        />
                        <Field name='cfopID' component='input'
                            type='hidden'
                        />
                        <Field name='userID' component='input'
                            type='hidden'
                        />
                    </div>
                    <div className='box-footer'>
                        <button type='submit' className='btn btn-primary' >{buttonName}</button>
                        <button type='button' className='btn btn-default margin' 
                            onClick={() => this.props.initCfop(this.props.user.UserID)}
                            >Cancelar</button>
                    </div>
                </form>
            </div>
        )
    }
}

CfopForm = reduxForm({ form: 'Cadcfop', destroyOnUnmount: false, validate })(CfopForm)
const selector = formValueSelector('Cadcfop') 
const mapStateToProps = state => ({user: state.auth.user,selected:selector(state,'tipo')})
const mapDispatchToProps = dispatch => bindActionCreators({ initCfop},dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CfopForm)