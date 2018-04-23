import React , { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { showUpdate, showDelete } from '../CfopActions'


import Grid from '../../common/layout/grid.jsx'
import Row from '../../common/layout/row.jsx'



class CfopList extends Component{
    renderRows(aqDev){
        var mapCfop = []
        if (aqDev == 'aq'){
            mapCfop = this.props.Cfop.CfopList.CfopAq || []
        } else if (aqDev == 'dev'){
            mapCfop = this.props.Cfop.CfopList.CfopDev || []
            
        }
        

        return mapCfop.map((Cfop,index) => {
            var button;
            var buttonExcluir = "";
            if (Cfop.editable == false) {
                 button =  <button type='button' className='btn btn-danger'><i className="fa fa-times" ></i></button>
                
            }else{
                button = <button type='button' className='btn btn-success' onClick={() => this.props.showUpdate(Cfop)}><i className="fa fa-pencil" ></i></button>
                buttonExcluir = <button type='button' className='btn btn-warning margin' onClick={() => this.props.showDelete(Cfop)}><i className="fa fa-times" ></i></button>
            }
            return(
                <tr key={index}>
                    <td>{Cfop.Cfop}</td>
                    <td>
                        {button}
                        {buttonExcluir}
                    </td>            
                </tr>
            )
        })
    }
    render(){
        return(
            <Row>
                <Grid cols='6 6 6'>
                    <div className='box'>
                        <div className='box-header with-border'>
                            <h3 className='box-tittle'>CFOP Aquisições</h3>
                        </div>
                        <div className='box-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>CFOP</th>
                                        <th>Opções</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderRows('aq')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Grid>
                <Grid cols='6 6 6'>
                    <div className='box'>
                        <div className='box-header with-border'>
                            <h3 className='box-tittle'>CFOP Devolução</h3>
                        </div>
                        <div className='box-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>CFOP</th>
                                        <th>Opções</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderRows('dev')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Grid>
            </Row>
        )
    }
}


const mapStateToProps = state => ({ Cfop: state.Cfop})
const mapDispatchtoProps = dispatch => bindActionCreators({ showUpdate, showDelete},dispatch)
export default connect(mapStateToProps,mapDispatchtoProps)(CfopList)