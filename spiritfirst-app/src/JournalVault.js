import React from 'react';

function JournalVault() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📝 Journal Vault</h1>
      <p>Welcome. Here’s where you can track your feelings, write freely, and reflect.</p>
      <textarea
        placeholder="Write your thoughts here..."
        style={{ width: '100%', height: '200px', padding: '1rem', fontSize: '1rem' }}
      />
    </div>
  );
}

export default JournalVault;
