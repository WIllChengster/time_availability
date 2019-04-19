import React, { Component } from 'react';
import Days from './days'

class ModularSchedule extends Component{
    constructor(props){
        super(props);
        this.state={
            0: {
                available: 'full',
                partial_time: {
                    start: '08:00',
                    end: '17:00',
                }
            },
            1: {
                available: 'full',
                partial_time: {
                    start: '08:00',
                    end: '17:00',
                }
            },
            2: {
                available: 'full',
                partial_time: {
                    start: '08:00',
                    end: '17:00',
                }
            },
            3: {
                available: 'full',
                partial_time: {
                    start: '08:00',
                    end: '17:00',
                }
            },
            4: {
                available: 'full',
                partial_time: {
                    start: '08:00',
                    end: '17:00',
                }
            }
        }
    }

    
    handleSelect = (event, day) => {
        const day_state = this.state[day]
        day_state.available = event.target.value
        this.setState({
            [day]: day_state
        })
    }

    changeStart = (value, day) => {
        const day_state = this.state[day]
        day_state.partial_time.start = value.format("HH:mm")
        this.setState({
            [day]: day_state
        })
    }
    
    changeEnd = (value, day) => {
        const day_state = this.state[day]
        day_state.partial_time.end = value.format("HH:mm")
        this.setState({
            [day]: day_state
        })
    }



    render = () => {
        console.log(this.state);
        const dayMap = Object.keys(this.state).map((item, index) => {
            const {available, partial_time} = this.state[item]
            return(
                <Days 
                key={index}
                day={index}
                handleSelect={this.handleSelect}
                available={available}
                start={partial_time.start}
                changeStart={this.changeStart}
                end={partial_time.end}
                changeEnd={this.changeEnd}
            />
            )
        })
        

        return(
            <div>
                {dayMap}
                

                <button>confirm</button>

            </div>
        
        
        )
    }
}

export default ModularSchedule
