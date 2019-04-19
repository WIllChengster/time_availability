import React, { Component } from 'react';
import '../schedule.css'
import moment from 'moment'



class schedule extends Component{
    constructor(props){
        super(props);
        this.state={
            day_of_week: {
                // 0 - 6, 0 = sunday, 6 = saturday
                0: [],
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: []
            }
        }
    }

    render = () => {
        return(
            <div>
                <p className="text-center" >April 14, 2019 --- April 20, 2019</p>
                <div className="schedule_container">
                    <div className="days_container">
                        <div className="day" >
                            {/* blank spot */}
                        </div>
                        <div className="day">
                            <p>Sunday</p>
                        </div>
                        <div className="day">
                            <p>Monday</p>
                        </div>
                        <div className="day">
                            <p>Tuesday</p>
                        </div>
                        <div className="day">
                            <p>Wednesday</p>
                        </div>
                        <div className="day">
                            <p>Thursday</p>
                        </div>
                        <div className="day">
                            <p>Friday</p>
                        </div>
                        <div className="day">
                            <p>Saturday</p>
                        </div>
                    </div>
                    <div className="hours_container" >
                        <div className="hour_title">
                            <div>
                                <p>12pm</p>
                            </div>
                            <div>
                                <p>1pm</p>
                            </div>
                            <div>
                                <p>2pm</p>
                            </div>
                            <div>
                                <p>3pm</p>
                            </div>
                            <div>
                                <p>4pm</p>
                            </div>
                            <div>
                                <p>5pm</p>
                            </div>
                            <div>
                                <p>6pm</p>
                            </div>
                            <div>
                                <p>7pm</p>
                            </div>
                            <div>
                                <p>8pm</p>
                            </div>
                            <div>
                                <p>9pm</p>
                            </div>
                            <div>
                                <p>10pm</p>
                            </div>
                            <div>
                                <p>11pm</p>
                            </div>
                        </div>

                    </div>


                </div>

                
            </div>
        )
    }
}


export default schedule