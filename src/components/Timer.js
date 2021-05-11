import React from 'react';
import '../components/Timer.scss';
// import CountdownTimer from '@sakit-sa/countdown-timer';

// Timer component sourced from https://www.skypack.dev/view/@sakit-sa/countdown-timer

// How to use sakit timer:

// import CountdownTimer from '@sakit-sa/countdown-timer';

//  <CountdownTimer
//    time={90} // in seconds
//    format="[hh]:[mm]:[ss]"
//    onComplete={() => console.log("The timer completed")}
//  />

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timerLength: 5,
		};

		//		this.clicked = this.clicked.bind(this);
		this.changed = this.changed.bind(this);
	}

	timer = () => {
		let now = new Date().getTime();
		let limit = new Date(this.state.timerLength).getTime();
		let gap = limit - now;

		let second = 1000;
		let minute = second * 60;
		let hour = minute * 60;
	};

	// clicked = (e) => {
	// 	let current = this.state.showTimer;
	// 	this.setState({
	// 		showTimer: !current,
	// 	});
	// };

	changed = (e) => {
		this.setState({
			timerLength: e.target.value,
		});
	};

	startTimer = () => {
		let limit = this.state.timerLength;
	};

	render() {
		return (
			<div className='wrapper'>
				<p className='title'>Timer component</p>

				<div>
					<input
						type='number'
						value={this.state.timerLength}
						onChange={this.changed}
					/>
					{/* <button onClick={this.clicked}> Click me </button> */}
				</div>
			</div>
		);
	}
}

export default Timer;

// I need a component to hold the coundown timer at 00:00 while the user chooses how long the timer should be

// Create functions that render <Countdown Timer /> with corresponding "time" props

// Attempt pause/play feature
