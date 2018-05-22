import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import SweetAlert from 'sweetalert-react';

import InputDatePicker from '../../common/form/inputDatePicker.jsx'
import InputDropDown from '../../common/form/labelAndDropdown'

import { SelectedDatai, SelectedDataf, SelectEmpresa, validate } from '../xmlActions.js'
import { getEmpresasList } from '../../Empresas/EmpresasAction'
import 'sweetalert/dist/sweetalert.css';


class XmlFormDelete extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
        this.form = null;
        this.Setform = element => {
            this.form = element;
        };
    }
    componentWillMount() {
        this.props.getEmpresasList(this.props.user.UserID)
    }
    componentDidMount() {
        this.props.change('userID', this.props.user.UserID)
    }
    componentDidUpdate() {
        this.props.change('userID', this.props.user.UserID)
        this.props.change('empresaID', this.props.DateForm.empresa)
    }
    

    render() {
        let empresas = this.props.Empresas.empresasList || []
        const { handleSubmit } = this.props

        return (
            <div className="box box-primary">
                <form role='form' onSubmit={handleSubmit} ref={this.Setform}>
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
                        <Field name='empresaID' component='input'
                            type='hidden'
                        />
                        <Field name='userID' component='input'
                            type='hidden'
                        />

                    </div>
                    <div className='box-footer'>
                        <button type='submit' className='btn btn-primary'  >
                            Excluir
                        </button>
                        {/* <SweetAlert
                            show={this.state.show}
                            title="Excluir NFE"
                            text="Deseja mesmo Excluir as NFE"
                            showCancelButton
                            type="warning"
                            onConfirm={
                                this.form == null ? null : this.form.submit  
                            }
                            onCancel={() => {
                                this.setState({ show: false });
                            }}
                        /> */}

                    </div>
                </form>
            </div>

        )
    }
}

XmlFormDelete = reduxForm({ form: 'xmlExec', destroyOnUnmount: true, validate })(XmlFormDelete)

const mapDispatchToProps = dispatch => bindActionCreators({ SelectedDatai, SelectedDataf, getEmpresasList, SelectEmpresa }, dispatch)
const mapStateToProps = state => ({ DateForm: state.xmlParser.DateForm, user: state.auth.user, Empresas: state.Empresa })
export default connect(mapStateToProps, mapDispatchToProps)(XmlFormDelete)