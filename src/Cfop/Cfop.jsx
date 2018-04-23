import React, { Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import Tabs from '../common/tab/tabs.jsx'
import TabsHeader from '../common/tab/tabsHeader.jsx'
import TabsContent from '../common/tab/tabsContent.jsx'
import TabHeader from '../common/tab/tabHeader.jsx'
import TabContent from '../common/tab/tabContent.jsx'
import ContentHeader from '../common/template/content/contentHeader.jsx'
import Content from '../common/template/content/content.jsx'

import CfopList from './List/CfopList'
import CfopForm from './Form/CfopCreate'
import { initCfop, AddCfop, UpdateCfop, DeleteCfop} from './CfopActions'


class Cfop extends Component{
    componentWillMount(){
        this.props.initCfop(this.props.user.UserID)
    }

    render(){
        return(
           <div>
                <ContentHeader title='Cfop' small='Versão 2.0' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='CfopList' />
                            <TabHeader label='Adicionar' icon='bars' target='CfopAdd' />
                            <TabHeader label='Atualizar' icon='bars' target='CfopUpdate' />
                            <TabHeader label='Listar' icon='trash-o' target='CfopDelete' />

                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='CfopList'>
                                <CfopList />
                            </TabContent>
                            <TabContent id='CfopAdd'>
                                <CfopForm onSubmit={this.props.AddCfop} buttonName='Gravar'/>
                            </TabContent>
                            <TabContent id='CfopUpdate'>
                                <CfopForm onSubmit={this.props.UpdateCfop} buttonName='Atualizar' />
                            </TabContent>
                            <TabContent id='CfopDelete'>
                                <CfopForm onSubmit={this.props.DeleteCfop} buttonName='Deletar' readyOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
           </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ initCfop, AddCfop, UpdateCfop, DeleteCfop },dispatch)
const mapStateToProps = state => ({user: state.auth.user})
export default connect(mapStateToProps,mapDispatchToProps)(Cfop)