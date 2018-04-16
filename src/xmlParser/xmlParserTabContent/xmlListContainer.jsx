import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Row from '../../common/layout/row'
import Grid from '../../common/layout/grid.jsx'

class XmlListContainer extends Component {
    renderRowsAq(){
        const listAq = this.props.XmlList.Ent || []
       return listAq.map(item => {
            let cnpj = item.Cnpj.replace(/\D/g, '').replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5")
            return(
                <tr key={item.ChaveFiscal}>
                    <td>{item.NotaFiscal}</td>
                    <td>{cnpj}</td>
                    <td>{item.ChaveFiscal}</td>
                    <td>Aquisição</td>
                </tr>
            )
        })
    }
    renderRowsDev() {
        const listDev = this.props.XmlList.Sai || []
       return listDev.map(item => {
            let cnpj = item.Cnpj.replace(/\D/g, '').replace(/^(\d{2})(\d{3})?(\d{3})?(\d{4})?(\d{2})?/, "$1.$2.$3/$4-$5")
            return (
                    <tr key={item.ChaveFiscal}>
                        <td>{item.NotaFiscal}</td>
                        <td>{cnpj}</td>
                        <td>{item.ChaveFiscal}</td>
                        <td>Devolução</td>
                    </tr>
            )
        })
    }
    render() {
        return (
            <Row>
                <Grid cols='12 12 12'>
                    <Grid cols='6 6 6'>
                        <div className='box'>
                            <div className='box-header with-border'>
                                <h3 className='box-title'>Aquisições</h3>
                            </div>
                            <div className='box-body'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>N° NFE</th>
                                            <th>CNPJ</th>
                                            <th>Chave NFE</th>
                                            <th>Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            {this.renderRowsAq()}
                                    </tbody>

                                </table>
                            </div>
                            <div className="box-footer clearfix"></div>
                        </div>
                    </Grid>
                    <Grid cols='6 6 6'>
                        <div className='box'>
                            <div className='box-header with-border'>
                                <h3 className='box-title'>Devoluções</h3>
                            </div>
                            <div className='box-body'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>N° NFE</th>
                                            <th>CNPJ</th>
                                            <th>Chave NFE</th>
                                            <th>Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderRowsDev()}
                                    </tbody>

                                </table>
                            </div>
                            <div className="box-footer clearfix"></div>
                        </div>
                    </Grid>

                </Grid>
                </ Row >
                )
    }
}

const mapStateToProps = state => ({ XmlList: state.xmlParser.xmlList})
export default connect(mapStateToProps,null)(XmlListContainer)