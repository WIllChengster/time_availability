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
                        <div className="box" >
                            {/* blank spot */}
                        </div>
                        <div className="box">
                            <p>Sunday</p>
                        </div>
                        <div className="box">
                            <p>Monday</p>
                        </div>
                        <div className="box">
                            <p>Tuesday</p>
                        </div>
                        <div className="box">
                            <p>Wednesday</p>
                        </div>
                        <div className="box">
                            <p>Thursday</p>
                        </div>
                        <div className="box">
                            <p>Friday</p>
                        </div>
                        <div className="box">
                            <p>Saturday</p>
                        </div>
                    </div>
                    <div className="hours_container" >
                        <div className="hour_column title">
                            <div className="box">
                                <p>5am</p>
                            </div>
                            <div className="box">
                                <p>6am</p>
                            </div>
                            <div className="box">
                                <p>7am</p>
                            </div>
                            <div className="box">
                                <p>8am</p>
                            </div>
                            <div className="box">
                                <p>9am</p>
                            </div>
                            <div className="box">
                                <p>10am</p>
                            </div>
                            <div className="box">
                                <p>11am</p>
                            </div>
                            <div className="box">
                                <p>12pm</p>
                            </div>
                            <div className="box">
                                <p>1pm</p>
                            </div>
                            <div className="box">
                                <p>2pm</p>
                            </div>
                            <div className="box">
                                <p>3pm</p>
                            </div>
                            <div className="box">
                                <p>4pm</p>
                            </div>
                            <div className="box">
                                <p>5pm</p>
                            </div>
                            <div className="box">
                                <p>6pm</p>
                            </div>
                            <div className="box">
                                <p>7pm</p>
                            </div>
                            <div className="box">
                                <p>8pm</p>
                            </div>
                            <div className="box">
                                <p>9pm</p>
                            </div>
                            <div className="box">
                                <p>10pm</p>
                            </div>
                            <div className="box">
                                <p>11pm</p>
                            </div>
                        </div>
                        <div className="hour_column playable" >
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                        
                    </div>


                </div>

                
            </div>
        )
    }
}


export default schedule