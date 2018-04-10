import React, {Component} from 'react'

import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import Grid from '../layout/grid.jsx'
import moment from 'moment'
import momentLocalizer from "react-widgets-moment"

import 'react-widgets/dist/css/react-widgets.css'
momentLocalizer()


class InputDatePicker extends Component{
    
    render(){
        return(
            <Grid cols={this.props.cols}>
                <div className='form-group'>
                    <label htmlFor={this.props.name}>{this.props.label}</label>
                    <DateTimePicker 
                        {...this.props.input} 
                        onChange={this.props.change} 
                        value={this.props.value}
                        format="DD/MM/YYYY"
                        time={false}
                       />
                </div>
            </Grid>
        )
    }
} 


export default InputDatePicker
