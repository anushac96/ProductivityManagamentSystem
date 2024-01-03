import React, { useState, useEffect } from 'react';
import './App.css';

function Timer({ setTimerState }) {
  const [time, setTime] = useState(1500);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (timerRunning) {
      interval = setInterval(() => {
        if (time === 0) {
          clearInterval(interval);
          setTimerRunning(false);
          setTimerState('break');
        } else {
          setTime((prevTime) => prevTime - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning, time, setTimerState]);

  const startTimer = () => {
    if (!timerRunning) {
      setTimerRunning(true);
    }
  };

  const pauseTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTime(1500);
    setTimerRunning(false);
  };

  return (
    
    <div>
      <h1>Timer</h1>
      <h2>
        {Math.floor(time / 60)}:{time % 60 < 10 ? '0' : ''}
        {time % 60} mins
      </h2>
      {!timerRunning && <button onClick={startTimer}>Start</button>}
      {timerRunning && <button onClick={pauseTimer}>Pause</button>}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
