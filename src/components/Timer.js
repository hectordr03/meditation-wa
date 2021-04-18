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
            showTimer = false,
        };
    }
    
    // timer1m30s = () => {
    //     return (
    //     <CountdownTimer 
    //     className='timer'
    //     time={90}
    //     format='MM:SS'
    //     onComplete={() => alert("Good job! You finished your meditation. (Meditative quote here, I like what headspace says about the always present blue sky)")}/>)
    // };

    // timer3m = () => {
    //     <CountdownTimer 
    //     className='timer'
    //     time={180}
    //     format='MM:SS'
    //     onComplete={() => alert("Good job! You finished your meditation. (Meditative quote here, I like what headspace says about the always present blue sky)")}/>
    // };
    // timer5m = () => {
    //     <CountdownTimer 
    //     className='timer'
    //     time={300}
    //     format='MM:SS'
    //     onComplete={() => alert("Good job! You finished your meditation. (Meditative quote here, I like what headspace says about the always present blue sky)")}/>
    // };

    render () {
        return(
            <div className='wrapper'>
                <p className='title'>Timer component</p>
                {/* <CountdownTimer 
                className='timer'
                format='MM:SS'
                onComplete={() => alert("Good job! You finished your meditation. (Meditative quote here, I like what headspace says about the always present blue sky)")}/> */}

                <button onClick={this.timer1m30s}>1m 30s</button>
            </div>
        );
    }
}

export default Timer;


// I need a component to hold the coundown timer at 00:00 while the user chooses how long the timer should be

// Create functions that render <Countdown Timer /> with corresponding "time" props

// Attempt pause/play feature