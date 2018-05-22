import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'


import InputDatePicker from '../common/form/inputDatePicker.jsx'
import InputDropDown from '../common/form/labelAndDropdown'
import LabelAndInput from '../common/form/labelAndInput'

import { SelectedDatai, SelectedDataf, getApuracao, SentForm, SelectEmpresa, SelectDia, SelectAno } from './xmlActions.js'
import { getEmpresasList } from '../Empresas/EmpresasAction'



class XmlForm extends Component {
    componentWillMount() {
        this.props.getEmpresasList(this.props.user.UserID)
    }
    render() {
        let empresas = this.props.Empresas.empresasList || []
        return (
            <form role='form' >
                <div className="box box-primary">
                    <div className='box-header with-border'>
                        <h3 className="box-title">Dados Para a Busca Da Apuração</h3>
                    </div>
                    <div className='box-body'>
                        <Field name='datai' component={InputDatePicker}
                            label='Data Inicial' cols='12 4'
                            change={this.props.SelectedDatai}
                            value={this.props.DateForm.datai}
                        />

                        <Field name='dataf' component={InputDatePicker}
                            label='Data Final' cols='12 4'
                            change={this.props.SelectedDataf}
                            value={this.props.DateForm.dataf}
                        />
                        <Field name='empresa' component={InputDropDown}
                            label='Empresa'
                            cols='12 4'
                            data={empresas}
                            valueField='empCnpj'
                            textField='empNome'
                            onChange={this.props.SelectEmpresa}
                            value={this.props.DateForm.empresa}

                        />
                    </div>
                    
                </div>
                <div className='box box-danger'>
                    <div className='box-header with-border'>
                        <h3 className='box-title'>Data da Impressão(Opcional)</h3>
                    </div>
                    <div className='box-body'>
                        <Field name='dia' component={LabelAndInput}
                            cols='12 1'
                            label='Mês'
                            onChange={this.props.SelectDia}
                        />
                        <Field name='ano' component={LabelAndInput}
                            cols='12 2'
                            label='Ano'
                            onChange={this.props.SelectAno}
                        />
                    </div>
                    <div className='box-footer'>
                        <button type='button' className='btn btn-primary' onClick={() => this.props.getApuracao(this.props.user.UserID, this.props.DateForm.datai.toJSON(), this.props.DateForm.dataf.toJSON(), this.props.DateForm.empresa)}>
                            Enviar
                        </button>
                        <button type='button' className='btn btn-default margin' onClick={() => SentForm(false)}>
                            Voltar
                        </button>
                    </div>
                </div>
            </form>

        )
    }
}

XmlForm = reduxForm({ form: 'xmlFormOrRel' })(XmlForm)

const mapDispatchToProps = dispatch => bindActionCreators({ SelectedDatai, SelectedDataf, getApuracao, getEmpresasList, SelectEmpresa,SelectDia,SelectAno }, dispatch)
const mapStateToProps = state => ({ DateForm: state.xmlParser.DateForm, user: state.auth.user, Empresas: state.Empresa })
export default connect(mapStateToProps, mapDispatchToProps)(XmlForm)