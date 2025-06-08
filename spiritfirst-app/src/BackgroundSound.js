// BackgroundSound.js
import React, { useRef, useState } from 'react';

const BackgroundSound = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          alert("Cannot play audio. Please interact with the page or check your browser settings.");
        });
      }
    }

    setPlaying(!playing);
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} loop>
        <source src="https://archive.org/download/ambient-nature-sound/ambient-nature-sound.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlay}>
        {playing ? 'Pause Ambient Sound' : 'Play Ambient Sound'}
      </button>
    </div>
  );
};

export default BackgroundSound;














