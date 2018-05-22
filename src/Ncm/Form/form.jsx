import React, { Component } from 'react'
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import LabelAndDropDown from '../../common/form/labelAndDropdown'
import LabelAndInput from '../../common/form/labelAndInput'
import Box from '../../common/box/Box'
import BoxBody from '../../common/box/BoxBody'
import BoxFooter from '../../common/box/BoxFooter'

import { validate, InitNcm } from '../NcmAction'
import { SelectEmpresa } from  '../../xmlParser/xmlActions'

class Form extends Component {
  
    componentDidMount(){
        this.props.change('UserID',this.props.userID)
    }

    componentDidUpdate(){
        this.props.change('UserID',this.props.userID)
    }
    
    render(){
        const { handleSubmit,readyOnly } = this.props
        return(
            <Box>
                 <form role='form' onSubmit={handleSubmit}>
                    <BoxBody>
                        <Field name='Ncm' component={LabelAndInput}
                            cols='12 4'
                            label='NCM'
                            readyOnly={readyOnly}
                        />
                        <Field 
                            name='Empresa'
                            component={LabelAndDropDown}
                            label='Empresa'
                            cols='12 4'
                            textField='empNome'
                            valueField='empCnpj'
                            data={this.props.empresas}
                            disabled={readyOnly}
                         
                        />
                        <Field name='UserID' component='input'
                               type='hidden'
                        />
                        <Field name='NcmID' component='input'
                               type='hidden'
                        />
                    </BoxBody>
                    <BoxFooter>
                        <button type='submit' className='btn btn-primary' >{this.props.buttonName}</button>
                        <button type='button' className='btn btn-default margin' 
                            onClick={() => this.props.InitNcm(this.props.userID)}>Cancelar</button>
                    </BoxFooter>
                </form>
            </Box>
        )
    }
}


Form = reduxForm({form:'cadNcm', destroyOnUnmount: false ,validate})(Form)

const mapDispatchToProps = dispatch => bindActionCreators({SelectEmpresa,InitNcm},dispatch)
const mapStateToProps = state => ({DateForm: state.xmlParser.DateForm})
export default connect(mapStateToProps,mapDispatchToProps)(Form)