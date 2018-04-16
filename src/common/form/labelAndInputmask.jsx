import React from 'react'
import MaskedInput from 'react-maskedinput'
import Grid from '../layout/grid.jsx'



export default props => (
    <Grid cols={props.cols}>
        <div className="form-group ">
            <label htmlFor={props.name}>{props.label}</label>
            <MaskedInput {...props.input} className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readyOnly}
                type={props.type}
                mask={props.mask}
            />
            <span className={`glyphicon glyphicon-${props.icon} from-control-feedback`}></span>
            {props.meta.touched && ((props.meta.error && <span className='validateError'><i className="fa fa-exclamation-triangle margin" aria-hidden="true"></i>{props.meta.error}</span>) || (props.meta.warning && <span>{props.meta.warning}</span>))}

        </div>
    </Grid>
)