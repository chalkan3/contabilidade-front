import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'


import labelAndInputMask from '../../common/form/labelAndInputmask.jsx'
import labelAndInput from '../../common/form/labelAndInput.jsx'
import { validate, initEmpresas } from '../EmpresasAction.js'


class FormEmpresas extends Component {
 
    componentDidMount() {
        this.props.change('userID', this.props.user.UserID )
    }
   
    render() {

        const { handleSubmit, submitting, readyOnly, buttonName} = this.props
        return (
            <div className='box box-primary'>
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>
                        <div className='box-body'>
                            <Field name='empInsc' component={labelAndInput}
                                label='Incrição'
                                cols='12 4 '
                                readyOnly={readyOnly}
                               
                            />
                            <Field name='empNome' component={labelAndInput}
                                label='Nome da Empresa' cols='12 4 '
                                readyOnly={readyOnly}
                                
                            />
                            <Field name='empCnpj' component={labelAndInputMask}
                                label='Cnpj da Empresa' mask='11.111.111/1111-11'
                                cols='12 4 '
                                readyOnly={readyOnly}
                                    
                            />
                            <Field name='userID' component='input'
                                type='hidden'
                            />
                            <Field name='empresaID' component='input'
                                type='hidden'
                            />


                        </div>
                    </div>
                    <div className='box-footer'>
                        <button type='submit' className='btn btn-primary' disabled={submitting}>{buttonName}</button>
                        <button type='button' className='btn btn-default margin' onClick={() => this.props.initEmpresas(this.props.user.UserID)}>Cancelar</button>
                    </div>
                </form>
            </div>
        )
    } 
}
FormEmpresas = reduxForm({ form: 'Cademp', validate, destroyOnUnmount: false  })(FormEmpresas)
const mapStateToprops = state => ({user:state.auth.user})
const mapDispatchToProps = dispatch => bindActionCreators({ initEmpresas}, dispatch)

export default connect(mapStateToprops, mapDispatchToProps)(FormEmpresas)