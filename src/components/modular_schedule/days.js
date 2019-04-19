import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment'
import '../../modularSchedule.css'
import 'rc-time-picker/assets/index.css';


class Days extends Component{
    constructor(props){
        super(props);
        this.state={
            available: 'full',
            partial_time: {
                start: '08:00',
                end: '17:00',
            }
        }
    }

    handleSelect = (event) => {
        this.setState({
            available: event.target.value
        })
    }

    changeStart = (value) => {
        const initial_partial_time = this.state.partial_time
        initial_partial_time.start = value.format("HH:mm")
        this.setState({
            partial_time: initial_partial_time
        })
    }

    changeEnd = (value) => {
        
        const initial_partial_time = this.state.partial_time
        initial_partial_time.end = value.format("HH:mm")
        this.setState({
            partial_time: initial_partial_time
        })
    }

    getDefaultValue = (time) => {
        const hr = moment(time, 'HH:mm').hour()
        const min = moment(time, 'HH:mm').minute()
        return moment().hour(hr).minute(min)
    }

    render = () => {

        const daysOfWeek=[
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ]

        let displayIfPartial = (this.state.available === 'partial') ? 'flex' : 'none' 
        const partialStyle = {
            display: displayIfPartial,
            alignItems:'center',
            justifyContent: 'space-around'
        }

        let partialAvailability = <div style={partialStyle} >
            <p className="m-0" >availability:</p>
            <div className="timepicker-container" >
                <div>
                    <label>start:</label>
                    <TimePicker  format={'h:mm a'}
                        use12Hours 
                        inputReadOnly 
                        value={this.getDefaultValue(this.state.partial_time.start)} 
                        onChange={ this.changeStart } showSecond={false} 
                        clearIcon={<div></div>}
                    />
                </div>
                <div>
                    <label>end:</label>
                    <TimePicker  format={'h:mm a'}
                        use12Hours 
                        inputReadOnly 
                        value={this.getDefaultValue(this.state.partial_time.end)} 
                        onChange={ this.changeEnd } showSecond={false} 
                        clearIcon={<div></div>}
                    />
                </div>
            </div>
        </div>

        return(
            <div>
                <div className="day-container" >
                    <div className="day" >
                        <p>{daysOfWeek[this.props.day]}</p>
                    </div>
                    <div className="availability-container" >
                        <select value={this.state.available} onChange={this.handleSelect} >
                            <option defaultValue value="full" >Full availability</option>
                            <option value="partial">Partial availability</option>
                            <option value="unavailable">No availability</option>
                        </select>
                        {partialAvailability} 
                    </div>
                        
                </div>
            </div>
        )
    }
}

export default Days
