import React from 'react'

import Grid from '../layout/grid.jsx'


export default props =>(
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input} className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readyOnly}
                type={props.Type}
                maxLength={props.Maxlength}
            />
                {props.meta.touched && ((props.meta.error && <span className='validateError'><i className="fa fa-exclamation-triangle margin" aria-hidden="true"></i>{props.meta.error}</span>) || (props.meta.warning && <span>{props.meta.warning}</span>))}

        </div>
    </Grid>
)