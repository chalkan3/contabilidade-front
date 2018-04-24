import  React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import ContentHeader from '../common/template/content/contentHeader'
import Content from '../common/template/content/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import IF from '../common/operator/if'

import { getDashBoardList } from './dashboardAction'

class DashBoard extends Component{
        componentWillMount(){
            this.props.getDashBoardList(this.props.user.UserID)
        }
    render(){
        const Vars = this.props.dashboard.DashBoardList || []
        return(
            <div>
                <ContentHeader title='Painel de Controle' small='Versão 1.0' />
                    <IF test={this.props.user.QtdDias <= 10}>
                        <div className='pad margin no-print'>
                            <div className="callout callout-info margin-aviso">
                                <h4><i className="fa fa-info"></i> Aviso:</h4>
                                A liçensa vence em {this.props.user.QtdDias} dias
                            </div>
                        </div>
                    </IF>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='files-o'
                            value={`${Vars.NfeCount}`} text='Total de NFE enviadas' />
                        <ValueBox cols='12 4' color='blue' icon='users'
                            value={`${Vars.EmpCount}`} text='Total de Empresas cadastradas' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user, dashboard: state.Dashboard})
const mapDispatchToProps = dispatch => bindActionCreators({ getDashBoardList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)