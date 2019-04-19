import React, { Component } from 'react';
import Days from './days'

class ModularSchedule extends Component{
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

    render = () => {
        return(
            <div>
                <Days day={0}/>
                <Days day={1} />
                <Days day={2}/>
                {/* <Days day={3} />
                <Days day={4} />
                <Days day={5} /> */}

                <button>confirm</button>

            </div>
        
        
        )
    }
}

export default ModularSchedule
