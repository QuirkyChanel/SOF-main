// App.js
import React, { useState } from 'react';
import './App.css';
import MoodTracker from './MoodTracker';
import MeditationZone from './MeditationZone';
import RedFlagRadar from './RedFlagRadar';
import JournalVault from './JournalVault';
import SafeChat from './SafeChat';
import IkigaiGarden from './IkigaiGarden';
import BackgroundSound from './BackgroundSound';

function App() {
  const [activeTab, setActiveTab] = useState('mood');

  return (
    <div className="App">
      <h1 className="title">Emotional Wellness Hub</h1>

      <div className="tab-buttons">
        <button className={activeTab === 'mood' ? 'active' : ''} onClick={() => setActiveTab('mood')}>Mood Tracker</button>
        <button className={activeTab === 'meditation' ? 'active' : ''} onClick={() => setActiveTab('meditation')}>Meditation Zone</button>
        <button className={activeTab === 'redflag' ? 'active' : ''} onClick={() => setActiveTab('redflag')}>Red Flag Radar</button>
        <button className={activeTab === 'journal' ? 'active' : ''} onClick={() => setActiveTab('journal')}>Journal Vault</button>
        <button className={activeTab === 'safechat' ? 'active' : ''} onClick={() => setActiveTab('safechat')}>Safe Chat</button>
        <button className={activeTab === 'ikigai' ? 'active' : ''} onClick={() => setActiveTab('ikigai')}>Ikigai Garden</button>
      </div>

      <div className="tab-content">
        {activeTab === 'mood' && <MoodTracker />}
        {activeTab === 'meditation' && <MeditationZone />}
        {activeTab === 'redflag' && <RedFlagRadar />}
        {activeTab === 'journal' && <JournalVault />}
        {activeTab === 'safechat' && <SafeChat />}
        {activeTab === 'ikigai' && <IkigaiGarden />}
      </div>

      <BackgroundSound />
    </div>
  );
}

export default App;

















