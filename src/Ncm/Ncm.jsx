import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Tabs from '../common/tab/tabs.jsx'
import TabsHeader from '../common/tab/tabsHeader.jsx'
import TabsContent from '../common/tab/tabsContent.jsx'
import TabHeader from '../common/tab/tabHeader.jsx'
import TabContent from '../common/tab/tabContent.jsx'
import ContentHeader from '../common/template/content/contentHeader.jsx'
import Content from '../common/template/content/content.jsx'

import {InitNcm,AddNcm,UpdateNcm,DeleteNcm} from './NcmAction'
import Form from './Form/form'
import List from './List/List'


class Ncm extends Component{
    componentWillMount(){
        this.props.InitNcm(this.props.userID)
    }
    render(){
        let empresas = this.props.empresa.empresasList || []
        return(
            <div>
                <ContentHeader title='NCM' small='Industria'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='NcmList' />
                            <TabHeader label='Incluir' icon='plus' target='NcmIncluir' />
                            <TabHeader label='Editar' icon='plus' target='NcmEdit' />
                            <TabHeader label='Excluir' icon='trash-o' target='NcmDelete'/>                                           
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='NcmList'>
                                <List userID={this.props.userID} empresas={empresas}/>
                            </TabContent>
                            <TabContent id='NcmIncluir'>
                                <Form onSubmit={this.props.AddNcm} buttonName='Gravar' userID={this.props.userID}  empresas={empresas} />
                            </TabContent >
                            <TabContent id='NcmEdit'>
                                <Form onSubmit={this.props.UpdateNcm} buttonName='Editar' userID={this.props.userID}  empresas={empresas} />
                            </TabContent>
                            <TabContent id='NcmDelete'>
                                <Form onSubmit={this.props.DeleteNcm} buttonName='Deletar' userID={this.props.userID}  empresas={empresas}  readyOnly={true}/>           
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({InitNcm,AddNcm,UpdateNcm,DeleteNcm},dispatch)
const mapStateToProps = state => ({userID: state.auth.user.UserID, empresa: state.Empresa})
export default connect(mapStateToProps,mapDispatchToProps)(Ncm)