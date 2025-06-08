import React, { useState, useEffect, useRef } from 'react';

function MeditationZone() {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      alert('Meditation complete. Feel calm and centered.');
    }
    return () => clearTimeout(timerRef.current);
  }, [isRunning, timeLeft]);

  const startMeditation = () => {
    if (timeLeft > 0) setIsRunning(true);
  };

  const pauseMeditation = () => setIsRunning(false);

  const resetMeditation = () => {
    setIsRunning(false);
    setTimeLeft(300);
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
      <h2>Meditation Zone</h2>
      <p>Take a moment to breathe and relax.</p>
      <div style={{ fontSize: '2rem', margin: '10px 0' }}>{formatTime(timeLeft)}</div>
      {!isRunning && timeLeft > 0 && (
        <button onClick={startMeditation}>Start</button>
      )}
      {isRunning && (
        <button onClick={pauseMeditation}>Pause</button>
      )}
      <button onClick={resetMeditation} style={{ marginLeft: '10px' }}>Reset</button>
      <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#555' }}>
        Focus on your breath. Breathe in deeply for 4 seconds, hold for 4 seconds,  slowly breathe out for 4 seconds, and pause for 4 seconds before you begin again.
      </p>
    </div>
  );
}

export default MeditationZone;




