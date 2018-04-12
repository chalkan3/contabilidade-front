import React from 'react'
import IF from '../operator/if.jsx'

export default props => (
    <IF test={!props.hide}>
        <div className="form-group has-feedback">
            <button disabled={props.disabled} type={props.type} className={props.classButton} >
                <i className={`fa fa-${props.icon} iconMargin `}></i>
                {props.label}
            </button>
        </div>
    </IF>
)