import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ContentHeader from '../common/template/content/contentHeader.jsx'
import Content from '../common/template/content/content.jsx'
import XmlForm from './xmlForm.jsx'
import XmlFormTable from './xmlFormTable.jsx'

import { SentForm } from './xmlActions.js'



class xmlFormOrRel extends Component {
    
    render() {
        if (this.props.xmlState.formSent) {
            return (
                <div>
                    <ContentHeader title='Apuração' small='Versão 2.0' >
                        <div>
                            <button className='btn btn-primary dpnone pull-right' type='button' id='printApuracao' onClick={() => window.print()}>
                                <i className='fa fa-print iconMargin'></i>
                                Imprimir
                             </button>
                            <button className='btn btn-default dpnone pull-right buttonPrintBack' type='button' id='printBack' onClick={() => this.props.SentForm(false)}>
                                <i className="fa fa-chevron-left iconMargin"></i>
                                    Voltar
                            </button>
                        </div>
                    </ContentHeader>
                    <Content>
                        <XmlFormTable />
                    </Content>
                </div >
            )
        } else if (!this.props.xmlState.formSent) {
            return (
                < div >
                    <ContentHeader title='Apuração' small='Versão 1.0' />
                    <Content>
                        <XmlForm />
                    </Content>
                </div >
            )
        }

    }
}


const mapStateToProps = state => ({ xmlState: state.xmlParser })
const mapDispatchToProps = dispatch => bindActionCreators({ SentForm },dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(xmlFormOrRel)