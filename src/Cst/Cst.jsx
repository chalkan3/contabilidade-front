import React, { Component } from 'react'
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Tabs from '../common/tab/tabs.jsx'
import TabsHeader from '../common/tab/tabsHeader.jsx'
import TabsContent from '../common/tab/tabsContent.jsx'
import TabHeader from '../common/tab/tabHeader.jsx'
import TabContent from '../common/tab/tabContent.jsx'
import ContentHeader from '../common/template/content/contentHeader.jsx'
import Content from '../common/template/content/content.jsx'

import CstList from './List/CstList'
import FormCst from './Form/formCst'
import { InitCst, AddCst, UpdateCst, DeleteCst } from './CstAction'



class Cst extends Component{
    componentWillMount(){
        this.props.InitCst(this.props.user.UserID)
    }

    render(){
        return(
            <div>
                <ContentHeader title='Cst' small='Versão 2.0' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='CstList' />
                            <TabHeader label='Adicionar' icon='bars' target='CstAdd' />
                            <TabHeader label='Atualizar' icon='bars' target='CstUpdate' />
                            <TabHeader label='Listar' icon='trash-o' target='CstDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabsContent>
                                <TabContent id='CstList'>
                                    <CstList />
                                </TabContent>
                                <TabContent id='CstAdd'>
                                    <FormCst onSubmit={this.props.AddCst} buttonName='Gravar' />                              
                                </TabContent>
                                <TabContent id='CstUpdate'>
                                    <FormCst onSubmit={this.props.UpdateCst} buttonName='Atualizar'/>                                
                                </TabContent> 
                                <TabContent id='CstDelete'>
                                    <FormCst onSubmit={this.props.DeleteCst} buttonName='Deletar' readyOnly={true} />  
                                </TabContent>
                            </TabsContent>
                        </TabsContent>
                    </Tabs>  
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ InitCst, AddCst, UpdateCst, DeleteCst}, dispatch)
const mapStateToProps = state => ({user: state.auth.user})
export default connect(mapStateToProps,mapDispatchToProps)(Cst)