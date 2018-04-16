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

import { initEmpresas, createEmpresa, updateEmpresa, deleteEmpresa} from './EmpresasAction.js'
import FormEmpresas from './form/formCad.jsx'
import EmpresasList from './list/EmpresasList.jsx'

class Empresas extends Component{

    componentWillMount(){
        this.props.initEmpresas(this.props.user.UserID)
    }
   
    render(){
        return(
            <div>
                <ContentHeader title='Cadastrar Empresas' small='Versão 1.0'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='EmpresaList' />
                            <TabHeader label='Incluir' icon='plus' target='EmpresaCad' />
                            <TabHeader label='Atualizar' icon='plus' target='EmpresaAtu' />                            
                            <TabHeader label='Excluir' icon='trash-o' target='EmpresaDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='EmpresaList'>
                                <EmpresasList />
                            </TabContent>
                            <TabContent id='EmpresaCad'>
                                <FormEmpresas onSubmit={this.props.createEmpresa} buttonName='Gravar' />
                            </TabContent>
                            <TabContent id='EmpresaAtu'>
                                <FormEmpresas onSubmit={this.props.updateEmpresa} buttonName='Atualizar' />                                
                            </TabContent>
                            <TabContent id='EmpresaDelete'>
                                <FormEmpresas onSubmit={this.props.deleteEmpresa} readyOnly={true} buttonName='Deletar'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({user: state.auth.user})
const mapDispatchToProps = dispatch => bindActionCreators({ initEmpresas, createEmpresa, updateEmpresa, deleteEmpresa},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(Empresas)