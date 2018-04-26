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

import { InitAdmList } from './adminAction'

class AdminDashBoard extends Component{
    componentWillMount(){
        this.props.InitAdmList()
    }
    render(){
        return(
         <div>
                <ContentHeader title='Anuidade' small='Controle de anuidade' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='AnuidadeList' />
                        </TabsHeader>
                        <TabsContent >
                            <TabContent id="AnuidadeList">
                                <ListUser />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
         </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ InitAdmList},dispatch)
const mapStateToProps = state => ({user: state.auth.user})
export default connect(null,mapDispatchToProps)(AdminDashBoard)