import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { DropdownList } from 'react-widgets'

import Grid from '../../common/layout/grid.jsx'
import Row from '../../common/layout/row.jsx'
import Box from '../../common/box/Box'
import BoxBody from '../../common/box/BoxBody'
import BoxFooter from '../../common/box/BoxFooter'
import BoxHeader from '../../common/box/BoxHeader'
import {GetNcmList, showDelete, showUpdate} from '../NcmAction'

import IF from '../../common/operator/if'

import { formatCnpj } from '../../common/function/main'


class List extends Component {
    constructor(...props){
        super(...props)
        this.state = {Cnpj: '',obj:[]}
        this.carregarNCM = this.carregarNCM.bind(this)
        this.renderRows = this.renderRows.bind(this)
    }
   

    renderRows(){
        const ncm = this.props.ncm.NcmList || []
        return ncm.map((ncm,index) => {
            
            let NcmUpdate = {Ncm: ncm.Ncm, NcmID: ncm.NcmID, Empresa: this.state.obj}
            return(
                <tr key={index}>
                    <td>{ncm.Ncm}</td>
                    <td>{formatCnpj(this.state.Cnpj)}</td>
                    <td>
                        <button className='btn btn-info' onClick={() => this.props.showUpdate(NcmUpdate)}>
                            <i className='fa fa-pencil'></i>
                        </button>
                        <button className='btn btn-warning margin' onClick={() => this.props.showDelete(NcmUpdate)}>
                            <i className='fa fa-trash-o'></i>
                        </button>
                    </td>                                                
                </tr>
            )
        })
    }
    carregarNCM(values) {
        this.props.GetNcmList(this.props.userID,values.empCnpj)
        this.setState({Cnpj: values.empCnpj,obj:values})
    }
    render() {
        
        return (
            <Row>
                <Grid cols='12 12 12'>
                    <Box>
                        <BoxHeader>
                            <Grid cols='6 6 '>
                                <h3 className='box-title'>Ncm Cadastrados</h3>
                            </Grid>
                            <Grid cols='1 1 '>
                                <label>Empresa</label>
                            </Grid>
                            <Grid cols='4 4'>
                                <DropdownList name='empresa' 
                                    textField='empNome'
                                    valueField='empCnpj'
                                    data={this.props.empresas}
                                    onChange={this.carregarNCM}
                                />
                            </Grid>
                        </BoxHeader>
                        <BoxBody>
                            <IF test={this.props.ncm.NcmList} >
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Ncm</th>
                                            <th>Empresa</th>
                                            <th>Opções</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderRows()}
                                    </tbody>
                                </table>
                            </IF>
                            <IF test={!this.props.ncm.NcmList || this.props.ncm.NcmList.length === 0}>
                                <h1>NCM não cadastrado</h1>
                                <p>
                                    Não foi possivel localizar o NCM para a empresa de cnpj {formatCnpj(this.state.Cnpj)}
                                    <br /> Caso queira cadastre um novo ou verifique a empresa escolhida.
                                </p>
                            </IF>
                        </BoxBody>
                    </Box>
                </Grid>
            </Row>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({GetNcmList, showDelete,showUpdate},dispatch)
const mapStateToProps = state => ({ncm: state.Ncm})
export default connect(mapStateToProps,mapDispatchToProps)(List)