import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from "react-router-dom"



import ContentHeader from '../common/template/content/contentHeader.jsx'
import Content from '../common/template/content/content.jsx'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid.jsx'
import Tabs from '../common/tab/tabs.jsx'
import TabsHeader from '../common/tab/tabsHeader.jsx'
import TabsContent from '../common/tab/tabsContent.jsx'
import TabHeader from '../common/tab/tabHeader.jsx'
import TabContent from '../common/tab/tabContent.jsx'
import XmlDelete from '../xmlParser/xmlParserTabContent/xmlDelete'

import IndustriaForm from './form/IndustriaForm.jsx'

import { initXmlIndustria } from './IndustriaAction.js'

import {cleanXML} from '../xmlParser/xmlActions'

class Industria extends Component {
  
    componentDidMount(){
        this.props.initXmlIndustria()
    }
    render() {
        return (
            <div>
                <ContentHeader title='Enviar XML (Industria)' small='Versão 2.0' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Incluir' icon='plus' target='industriaIncluir' />
                            <TabHeader label='Excluir' icon='trash-o' target='industriaDelete' />
                            
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='industriaIncluir'>
                                <IndustriaForm />
                            </TabContent>
                            <TabContent id='industriaDelete'>
                                <XmlDelete onSubmit={this.props.cleanXML}/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>

                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ initXmlIndustria,cleanXML }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Industria))