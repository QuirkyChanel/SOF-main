import React, { useState } from 'react';
import './RedFlagRadar.css'; // Import the CSS we'll create next

const redFlags = [
  {
    id: 'dismissesFeelings',
    label: "They say 'You're too sensitive' or dismiss your feelings.",
    category: 'emotional',
  },
  {
    id: 'walkingOnEggshells',
    label: "You feel scared to speak up or express yourself around them.",
    category: 'emotional',
  },
  {
    id: 'blamesYou',
    label: "They blame you for everything that goes wrong.",
    category: 'emotional',
  },
  {
    id: 'gaslighting',
    label: "They make you doubt your memory or feelings.",
    category: 'emotional',
  },
  {
    id: 'silentTreatment',
    label: "They give you the silent treatment or withdraw love as punishment.",
    category: 'emotional',
  },
  {
    id: 'specialAttention',
    label: "They give you gifts or attention but expect secrets or favors.",
    category: 'grooming',
  },
  {
    id: 'touchingUncomfortable',
    label: "They touch you in ways that make you uncomfortable.",
    category: 'grooming',
  },
  {
    id: 'breakBoundaries',
    label: "They say 'It's just love' to break your boundaries.",
    category: 'grooming',
  },
  {
    id: 'encouragesSecrets',
    label: "They ask you to keep secrets from other adults or friends.",
    category: 'grooming',
  },
];

function RedFlagRadar() {
  const [checkedFlags, setCheckedFlags] = useState({});

  const handleToggle = (id) => {
    setCheckedFlags((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const groupedFlags = redFlags.reduce((groups, flag) => {
    if (!groups[flag.category]) groups[flag.category] = [];
    groups[flag.category].push(flag);
    return groups;
  }, {});

  return (
    <div className="red-flag-container">
      <h2 className="radar-title">🚨 Red Flag Radar</h2>
      {Object.entries(groupedFlags).map(([category, flags]) => (
        <div key={category} className="flag-group">
          <h3 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)} Red Flags</h3>
          {flags.map(({ id, label }) => (
            <label key={id} className="flag-checkbox">
              <input
                type="checkbox"
                checked={!!checkedFlags[id]}
                onChange={() => handleToggle(id)}
              />
              <span className="flag-label">{label}</span>
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}

export default RedFlagRadar;


  
