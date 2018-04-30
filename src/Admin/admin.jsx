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

import ListUser from './List/ListUser'
import Form from './Form/formCreate'

import { InitAdmList,CreateUser } from './adminAction'

class AdminDashBoard extends Component{
    componentWillMount(){
        const AdminID = this.props.user.Admin
        const UserID = this.props.user.UserID
        
        this.props.InitAdmList(UserID,AdminID)
    }
    render(){
        return(
         <div>
                <ContentHeader title='Anuidade' small='Controle de anuidade' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='AnuidadeList' />
                            <TabHeader label='Criar' icon='rocket' target='AnuidadeCreate' />
                        </TabsHeader>
                        <TabsContent >
                            <TabContent id="AnuidadeList">
                                <ListUser AdminID={this.props.user.Admin} UserID={this.props.user.UserID} />
                            </TabContent>
                            <TabContent id='AnuidadeCreate' >
                                <Form onSubmit={this.props.CreateUser} admID={this.props.user.Admin}  UserID={this.props.user.UserID}/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
         </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ InitAdmList,CreateUser},dispatch)
const mapStateToProps = state => ({user: state.auth.user})
export default connect(mapStateToProps,mapDispatchToProps)(AdminDashBoard)