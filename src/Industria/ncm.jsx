import React , { Component } from 'react'
import  { Field } from 'redux-form'

import Grid from '../common/layout/grid'


class Ncm extends Component{
    renderRows(){
        const List = this.props.list || []
        // return list.map((item,index) =>(
        //     <tr key={index}>
        //         <td><input name='Ncm'  className='form-control' value={item.Ncm}/></td>
        //         <td></td>

        //     </tr>
        // ))

        return(
            <tr>
                <td>oi</td>
                <td>oi</td>
                
            </tr>
        )
    }
    render(){
        return(
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Ncm</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Ncm à ser ignorado</th>
                                <th>Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
                    
            </Grid>
        )
    }
}

export default Ncm

