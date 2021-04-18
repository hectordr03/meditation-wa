import React from 'react';
import '../components/Timer.scss';
import CountdownTimer from '@sakit-sa/countdown-timer';

// Timer component sourced from https://www.skypack.dev/view/@sakit-sa/countdown-timer

// How to use sakit timer: 

// import CountdownTimer from '@sakit-sa/countdown-timer';

//  <CountdownTimer 
//    time={90}
//    format="[hh]:[mm]:[ss]"
//    onComplete={() => console.log("The timer completed")} 
//  />

class Timer extends React.Component {
    render () {
        return(
            <div className='wrapper'>
                <p className='title'>Timer component</p>
                <CountdownTimer className='timer'/>
            </div>
        );
    }
}

export default Timer;