import React, { Component } from 'react';
import Schedule from './schedule'

class App extends Component {
	render() {
		return (
			<div>
				<h1 style={{textAlign: 'center'}} >Time Availability</h1>
				<Schedule/>

			</div>
		);
	}
}

export default App;
