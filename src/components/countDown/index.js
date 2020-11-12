import React from 'react';
import './countdown.scss'
import Countdown from './Countdown';


const CountDownIndex = (props) => {
  const {hasWon, time, openModal} = props
  return (
    <div className='wrapper'>
      <Countdown 
        time={time} 
        openModal={openModal} 
        hasWon={hasWon}
      />
    </div>
  );
}

export default CountDownIndex;
