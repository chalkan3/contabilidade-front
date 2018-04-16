import React from 'react'
import { DropdownList } from 'react-widgets'

import Grid from '../layout/grid.jsx'



export default props => (
    <Grid cols={props.cols}>
        <div className="form-group ">
            <label htmlFor={props.name}>{props.label}</label>
            <DropdownList {...props.input}         
                data={props.data}
                valueField={props.valueField}
                textField={props.textField}
                defaultValue={props.defaultValue}
                onChange={props.change}
                value={props.value}
                
            />
            <span className={`glyphicon glyphicon-${props.icon} from-control-feedback`}></span>
            {props.meta.touched && ((props.meta.error && <span className='validateError'><i className="fa fa-exclamation-triangle margin" aria-hidden="true"></i>{props.meta.error}</span>) || (props.meta.warning && <span>{props.meta.warning}</span>))}

        </div>
    </Grid>
)