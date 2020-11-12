import React, { useState, useEffect, Fragment } from 'react';
import CountdownBox from './CountdownBox';

let interval;

const Countdown = ({time, openModal, hasWon}) => {
  const [millisecondsLeft, setmillisecondsLeft] = useState(time)
  // const millisecondsLeft = 180000
  const minutesLeft = Math.floor((millisecondsLeft / (1000 * 60)) % 60);
  const secondsLeft = Math.floor((millisecondsLeft / 1000) % 60);

  const minutesLeftOutput = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
  const secondsLeftOutput = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    minutes: minutesLeft > 0 ? minutesLeftOutput : '00',
    seconds: secondsLeft > 0 ? secondsLeftOutput : '00',
  });

  

  useEffect(() => { 
    if(completed) {
      clearInterval(interval);
      openModal('Time is UP')
    }
  }, [completed]);


  useEffect(() => {
    if(hasWon){
      clearInterval(interval)
    }
  },[hasWon])

  useEffect(() => {
    clearInterval(interval)
    setmillisecondsLeft(time)
  }, [time])

  useEffect(() => {
    if(!completed) {
      interval = setInterval(() => {
        if(millisecondsLeft > 0) {
          setmillisecondsLeft(millisecondsLeft - 1000)
          setTimeLeft({
            minutes: minutesLeftOutput,
            seconds: secondsLeftOutput
          });
        }else {
          setTimeLeft({
            minutes: '00',
            seconds: '00'
          });
          setCompleted(true);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    }
  }, [completed, minutesLeft, secondsLeft, millisecondsLeft, minutesLeftOutput, secondsLeftOutput]);

  return(
    <Fragment>
      <div className='countdown'>
        <CountdownBox 
          left={timeLeft.minutes}
          divideBy={60}
          label="minutes"
        />
        <CountdownBox 
          left={timeLeft.seconds}
          divideBy={60}
          label="seconds"
        />
      </div>
    </Fragment>
  );
}

export default Countdown;