import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MaskedInput from 'react-maskedinput'


import Row from '../../common/layout/row'
import Grid from '../../common/layout/grid'

import { ChangeUserAnuidade, Liberar } from '../adminAction'

class ListUser extends Component {


    fomatDateIso(dateInput) {
        let date = new Date(dateInput);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return dt + '/' + month + '/' + year
    }

    
    renderRows() {
        const userList = this.props.user || []

        return userList.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.Name}</td>
                    <td>{user.Email}</td>
                    <td>
                        <MaskedInput className='form-control'  mask='11/11/1111' type="text" value={this.fomatDateIso(user.Venct)} onChange={(event) => this.props.ChangeUserAnuidade(index,event) }/>
                    </td>
                    <td>
                        <button type='button' className='btn btn-info ' onClick={() => this.props.Liberar(user,this.props.AdminID,this.props.UserID)}>
                            <i className="fa fa-bolt" ></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <Row>
                <Grid cols='12 12 12'>
                        <div className='box'>
                            <div className='box-header with-border'>
                                <h3 className='box-title'>
                                    Usúarios
                            </h3>
                            </div>
                            <div className='box-body'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>E-mail</th>
                                            <th>Vencimento da licença</th>
                                            <th>Liberar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderRows()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                </Grid>
            </Row>
        )
    }
}

const mapStateToProps = state => ({ user: state.Admin.usersList })
const mapDispatchToProps = dispatch => bindActionCreators({ ChangeUserAnuidade, Liberar },dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ListUser)