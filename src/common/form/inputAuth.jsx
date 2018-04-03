import React from 'react'
import IF from '../operator/if.jsx'


export default props => (
    <IF test={!props.hide}>
        <div className="form-group has-feedback">
            <input {...props.input} className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type}
                value={props.value}
            />
            <span className={`glyphicon glyphicon-${props.icon} from-control-feedback`}></span>

        </div>
    </IF>
)