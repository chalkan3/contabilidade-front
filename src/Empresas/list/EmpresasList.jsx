import React, { Component} from 'react'
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import Grid from '../../common/layout/grid.jsx'
import Row from '../../common/layout/row.jsx'
import { showDelete, showUpdate} from '../EmpresasAction.js'



class EmpresasList extends Component{
    renderRows(){
        const ListEmp = this.props.empresas.empresasList || []

        return ListEmp.map((empresa, index) => {
            return(
                <tr key={index}>
                    <td>{empresa.empNome}</td>
                    <td>{empresa.empInsc}</td>
                    <td>{empresa.empCnpj.replace(/\D/g, '').replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5")}</td> 
                    <td>
                        <button className='btn btn-info' onClick={() => this.props.showUpdate(empresa)}>
                            <i className='fa fa-pencil'></i>
                        </button>
                        <button className='btn btn-warning margin' onClick={() => this.props.showDelete(empresa)}>
                            <i className='fa fa-trash-o'></i>
                        </button>
                    </td>                   
                </tr>
            )
        })
    }
    render(){

        return(
            <Row>
                <Grid cols='12 12 12'>
                    <div className='box'>
                        <div className='box-header with-border'>
                            <h3 className='box-tittle'>Empresas Cadastradas</h3>
                        </div>
                        <div className='box-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Empresa Nome</th>
                                        <th>Empresa Inscrição</th>
                                        <th>Empresa Cnpj</th>
                                        <th>Opções</th>
                                        
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

const mapStateToProps = state => ({ empresas: state.Empresa})
const mapDispatchToProps = dispatch => bindActionCreators({ showDelete, showUpdate}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EmpresasList)
