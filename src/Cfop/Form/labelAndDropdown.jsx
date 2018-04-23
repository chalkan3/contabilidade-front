import React, { Component }from 'react'

import Grid from '../../common/layout/grid'



class LabelAndDropDownCfop extends Component{

    render(){
        return(
            <Grid cols={this.props.cols}>
                <div className='form-group'>
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    <select {...this.props.input} className="form-control" disabled={this.props.disabled}>
                        <option />
                        <option  value="0">Aquisição</option>
                        <option  value="1">Devolução</option>
                    </select>

                    {this.props.meta.touched && ((this.props.meta.error && <span className='validateError'><i className="fa fa-exclamation-triangle margin" aria-hidden="true"></i>{this.props.meta.error}</span>) || (this.props.meta.warning && <span>{this.props.meta.warning}</span>))}

                </div>
            </Grid>
        )
    }
}

export default LabelAndDropDownCfop
  