import React, { useState } from 'react';

function MoodTracker() {
  const [mood, setMood] = useState('');
  const [journal, setJournal] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood) {
      alert('Please select a mood before submitting.');
      return;
    }
    const newEntry = { mood, journal, date: new Date().toLocaleString() };
    setEntries([newEntry, ...entries]);
    setMood('');
    setJournal('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
      <h2>Mood Journal</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select your mood:
          <select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            required
            style={{ marginLeft: '0.5rem' }}
          >
            <option value="">--Choose--</option>
            <option value="Happy 😊">Happy 😊</option>
            <option value="Sad 😢">Sad 😢</option>
            <option value="Anxious 😰">Anxious 😰</option>
            <option value="Angry 😡">Angry 😡</option>
            <option value="Calm 😌">Calm 😌</option>
          </select>
        </label>
        <br /><br />
        <label>
          Write about it:
          <textarea
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            rows={4}
            style={{ width: '100%', marginTop: '0.5rem' }}
            placeholder="How are you feeling? Any thoughts?"
          />
        </label>
        <br /><br />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Save Entry
        </button>
      </form>

      <hr />

      <h3>Previous Entries</h3>
      {entries.length === 0 ? (
        <p>No journal entries yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {entries.map((entry, index) => (
            <li key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem' }}>
              <strong>{entry.date}</strong>
              <p>Mood: {entry.mood}</p>
              {entry.journal && <p>Journal: {entry.journal}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoodTracker;

