import React , { Component } from 'react'
import { reduxForm, Field } from 'redux-form'


import LabelAndInput from '../common/form/labelAndInput'
import LabelAndTextArea from '../common/form/LabelAndTextarea'



import custumerService from '../common/template/img/customer-service-woman.svg'


class FormContato extends Component{

    render(){
        const { handleSubmit } = this.props
        return(
            <section className="section-form" id='contato'>
                        <div className="col-md-12 email-send">
                            <h1>Preencha os campos abaixo e entraremos em contato</h1>
                            <form role='form' onSubmit={handleSubmit}>
                                <Field name='nome' component={LabelAndInput}
                                    label='Nome'
                                    cols='12 12 12'
                                />
                                <Field name='email' component={LabelAndInput}
                                     label='E-Mail'
                                     cols='12 12 12'
                                />
                                <Field name='complemento' component={LabelAndTextArea}
                                     label='Complemento'
                                     cols='12 12 12'
                                     
                                />
                                <div className="form-group row">
                                    <div className="col-md-6 col-md-offset-2">
                                        <button type='submit' className="ntb">
                                            Enviar Solicitação
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="support-send">
                            <img src={custumerService} className="img-fluid" alt="" />
                            <div className="titulo">
                                <h1>Suporte ágil e eficiente</h1>
                            </div>
                        </div>

                    </section>

        )
    }
}


FormContato = reduxForm({form:'contatoForm'})(FormContato)
export default FormContato