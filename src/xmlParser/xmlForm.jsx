import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'


import InputDatePicker from '../common/form/inputDatePicker.jsx'
import { SelectedDatai, SelectedDataf, getApuracao, SentForm } from './xmlActions.js'





class XmlForm extends Component {

    render() {
        return (
            <div className="box box-primary">
                <form role='form' >
                    <div className='box-body'>
                        <Field name='datai' component={InputDatePicker}
                            label='Datai' cols='12 4'
                            change={this.props.SelectedDatai}
                            value={this.props.DateForm.datai}
                        />

                        <Field name='dataf' component={InputDatePicker}
                            label='Dataf' cols='12 4'
                            change={this.props.SelectedDataf}
                            value={this.props.DateForm.dataf}
                        />
                    </div>
                    <div className='box-footer'>
                        <button type='button' className='btn btn-primary' onClick={() => this.props.getApuracao(this.props.user.UserID, this.props.DateForm.datai.toJSON(), this.props.DateForm.dataf.toJSON())}>
                            Enviar
                        </button>
                        <button type='button' className='btn btn-default margin' onClick={() => SentForm(false)}>
                            Voltar
                        </button>                        
                    </div>
                </form>
            </div>

        )
    }
}

XmlForm = reduxForm({ form: 'xmlFormOrRel' })(XmlForm)

const mapDispatchToProps = dispatch => bindActionCreators({ SelectedDatai, SelectedDataf, getApuracao}, dispatch)
const mapStateToProps = state => ({ DateForm: state.xmlParser.DateForm, user: state.auth.user })
export default connect(mapStateToProps, mapDispatchToProps)(XmlForm)