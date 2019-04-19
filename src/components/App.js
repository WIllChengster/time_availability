import React, { Component } from 'react';
import Schedule from './schedule';
import ModularSchedule from './modular_schedule/modular_schedule'

class App extends Component {
	render() {
		return (
			<div>
				<h1 style={{textAlign: 'center'}} >Time Availability</h1>
				{/* <Schedule/> */}
				<ModularSchedule/>
			</div>
		);
	}
}

export default App;
