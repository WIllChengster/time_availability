import React from 'react';
import TimePicker from 'rc-time-picker';
import moment from 'moment'
import '../../modularSchedule.css'
import 'rc-time-picker/assets/index.css';



const daysOfWeek=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const getDefaultValue = (time) => {
    const hr = moment(time, 'HH:mm').hour()
    const min = moment(time, 'HH:mm').minute()
    return moment().hour(hr).minute(min)
}

const Days = (props) => {

    let displayIfPartial = (props.available === 'partial') ? 'flex' : 'none' 

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
                <TimePicker  
                    format={'h:mm a'}
                    use12Hours 
                    inputReadOnly 
                    value={getDefaultValue(props.start)} 
                    onChange={ (value) => props.changeStart(value, props.day) } 
                    showSecond={false} 
                    clearIcon={<div></div>}
                />
            </div>
            <div>
                <label>end:</label>
                <TimePicker  
                    format={'h:mm a'}
                    use12Hours 
                    inputReadOnly
                    value={ getDefaultValue(props.end) } 
                    onChange={ (value) => props.changeEnd(value, props.day) } 
                    showSecond={false} 
                    clearIcon={<div></div>}
                />
            </div>
        </div>
    </div>

    return(
        <div>
            <div className="day-container" >
                <div className="day" >
                    <p>{daysOfWeek[props.day]}</p>
                </div>
                <div className="availability-container" >
                    <select value={props.available} onChange={(event) => props.handleSelect(event, props.day)} >
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

export default Days
