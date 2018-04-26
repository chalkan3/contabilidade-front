import React, { Component } from 'react'
import axios, { post } from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router-dom"



import ContentHeader from '../common/template/content/contentHeader.jsx'
import Content from '../common/template/content/content.jsx'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid.jsx'
import Dropzone from 'react-dropzone'
import consts from '../consts.js'
import Tabs from '../common/tab/tabs.jsx'
import TabsHeader from '../common/tab/tabsHeader.jsx'
import TabsContent from '../common/tab/tabsContent.jsx'
import TabHeader from '../common/tab/tabHeader.jsx'
import TabContent from '../common/tab/tabContent.jsx'

import XmlForm from './xmlParserTabContent/xmlSend.jsx'
import XmlContainer from './xmlParserTabContent/xmlListContainer.jsx'
import XmlDelete from './xmlParserTabContent/xmlDelete'


import { initXml, cleanXML } from './xmlActions.js'
class XmlParser extends Component {
    componentDidMount() {
        this.props.initXml(this.props.user.UserID)
    }
    render(){
        return(
            <div>
                <ContentHeader title='Enviar XML' small='Versão 2.0' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar'  icon='bars'    target='xmlList'   />
                            <TabHeader label='Incluir' icon='plus'    target='xmlSend'   />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='xmlSend'>
                                <XmlForm  />
                            </TabContent>
                            <TabContent id='xmlList'>
                                <XmlContainer />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <XmlDelete onSubmit={this.props.cleanXML} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                 
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({user: state.auth.user})
const mapDispatchToProps = dispatch => bindActionCreators({ initXml, cleanXML},dispatch)
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(XmlParser))