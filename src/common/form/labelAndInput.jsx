import React from 'react'

import Grid from '../layout/grid.jsx'


export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input} className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
            />
        </div>
    </Grid>
)