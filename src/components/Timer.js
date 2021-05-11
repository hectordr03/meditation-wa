import React from 'react';
import '../components/Timer.scss';
import CountdownTimer from '@sakit-sa/countdown-timer';

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

		this.clicked = this.clicked.bind(this);
	}

	clicked = () => {
		let current = this.state.showTimer;
		this.setState({
			showTimer: !current,
		});
	};

	changed = (e) => {
		this.setState({
			timerLength: e.target.value,
		});
	};

	render() {
		return (
			<div className='wrapper'>
				<p className='title'>Timer component</p>
				{/* <CountdownTimer 
                className='timer'
                format='MM:SS'
                onComplete={() => alert("Good job! You finished your meditation. (Meditative quote here, I like what headspace says about the always present blue sky)")}/> */}
				<div>
					<input
						type='text'
						value={this.state.timerLength}
						onChange={this.changed}
					/>
					<button onClick={this.clicked}>minute(s)</button>
					{this.state.showTimer ? (
						<CountdownTimer
							format='MM:SS'
							time={this.state.timerLength * 60} 
							// input defaults to seconds
						/>
					) : null}
				</div>

				{/* <div>
					<button onClick={this.clicked}>1m 30s</button>
					{this.state.showTimer ? (
						<CountdownTimer format='MM:SS' time={90} />
					) : null}

					<button onClick={this.clicked}>3m</button>
					{this.state.showTimer ? (
						<CountdownTimer format='MM:SS' time={180} />
					) : null}

					<button onClick={this.clicked}>5m</button>
					{this.state.showTimer ? (
						<CountdownTimer format='MM:SS' time={300} />
					) : null}
				</div> */}
			</div>
		);
	}
}

export default Timer;

// I need a component to hold the coundown timer at 00:00 while the user chooses how long the timer should be

// Create functions that render <Countdown Timer /> with corresponding "time" props

// Attempt pause/play feature
