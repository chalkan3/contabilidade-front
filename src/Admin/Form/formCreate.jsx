import React , { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { bindActionCreators } from 'redux'


import labelAndInput from '../../common/form/labelAndInput.jsx'
import labelAndMask from '../../common/form/labelAndInputmask'

import { InitAdmList } from  '../adminAction'


class Form extends Component{

    componentDidMount(){
        this.props.change('AdminUserID',this.props.UserID)
        this.props.change('userADM',this.props.admID)
        
    }
    componentDidUpdate(){
        this.props.change('AdminUserID',this.props.UserID)
        this.props.change('userADM',this.props.admID)
        
    }

    render(){
        const  { handleSubmit } = this.props
        return(
            <div className='box box-primary'>
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body' >
                        <Field 
                            label='Nome'
                            name='Name'
                            component={labelAndInput}
                            cols='12 4'

                        />
                        <Field
                            label='Email/Login'
                            name='Email'
                            component={labelAndInput}
                            cols='12 4'
                        />
                        <Field 
                            label='Senha'
                            name='Password'
                            component={labelAndInput}
                            cols='12 4'
                        />
                        <Field
                            name='Venct'
                            label='Vencimento'
                            component={labelAndMask}
                            cols='12 4'
                            mask='11/11/1111'
                        />
                        <Field name='userADM' component='input'
                            type='hidden'
                        />
                        <Field name='AdminUserID' component='input'
                            type='hidden'
                        />

                    </div>
                    <div className='box-footer'>
                        <button type='submit' className='btn btn-primary' >Criar Login</button>
                        <button type='button' className='btn btn-default margin'
                            onClick={() => this.props.InitAdmList(this.props.UserID,this.props.admID)}
                        >Voltar</button>
                    </div>
                </form>
            </div>
        )
    }
}

Form = reduxForm({form:'cadUser'})(Form)
const mapDispatchToProps = dispatch => bindActionCreators({InitAdmList},dispatch)
export default connect(null,mapDispatchToProps)(Form)