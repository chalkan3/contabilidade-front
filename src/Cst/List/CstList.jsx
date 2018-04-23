import React, {Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../../common/layout/grid.jsx'
import Row from '../../common/layout/row.jsx'
import { showUpdate, showDelete } from '../CstAction'


class CstList extends Component{
    renderRows(formula){
        var mapCst = []
        if(formula == 'Nacional'){
            mapCst = this.props.Cst.CstList.Cst0449 || []
        }else if(formula == 'Internacional'){
            mapCst = this.props.Cst.CstList.Cst0787 || []
        }
        return mapCst.map((Cst, index) =>{
            var button;
            var buttonExcluir = ""
            if (Cst.Editable == false) {
                button = <button type='button' className='btn btn-danger'><i className="fa fa-times" ></i></button>

            } else {
                button = <button type='button' className='btn btn-success' onClick={() => this.props.showUpdate(Cst)} ><i className="fa fa-pencil"  ></i></button>
                buttonExcluir = <button type='button' className='btn btn-warning margin' onClick={() => this.props.showDelete(Cst)} ><i className="fa fa-times" ></i></button>
            }

            return(
                <tr key={index}>
                    <td>{Cst.cst}</td>
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
                        <h3 className='box-tittle'>CST Formula: <b>0,0449</b></h3>
                    </div>
                    <div className='box-body'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>CST</th>
                                    <th>Opções</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.renderRows('Nacional')}
                            </tbody>
                        </table>
                    </div>
                </div>
                </Grid>
                <Grid cols='6 6 6'>
                    <div className='box'>
                        <div className='box-header with-border'>
                            <h3 className='box-tittle'>CST Formula: <b>0,0787</b></h3>
                        </div>
                        <div className='box-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>CST</th>
                                        <th>Opções</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderRows('Internacional')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Grid>
            </Row>
        )
    }
}

const mapStateToProps = state => ({Cst: state.Cst})
const mapDispatchToProps = dispatch => bindActionCreators({ showUpdate, showDelete}, dispatch )
export default connect(mapStateToProps, mapDispatchToProps)(CstList)