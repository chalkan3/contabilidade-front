import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/content/contentHeader.jsx'
import Content from '../common/template/content/content.jsx'
import XmlForm from './xmlForm.jsx'
import XmlFormTable from './xmlFormTable.jsx'





class xmlFormOrRel extends Component {
    
    render() {
        if (this.props.xmlState.formSent){
            return(
                <div>
                    <ContentHeader title='Apuração' small='Versão 1.0' />
                    <Content>
                        <XmlFormTable />
                    </Content>
                </div >
            )
        } else if (!this.props.xmlState.formSent) {
            return(
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
export default connect(mapStateToProps, null)(xmlFormOrRel)