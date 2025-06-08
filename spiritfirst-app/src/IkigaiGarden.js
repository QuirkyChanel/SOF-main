import React, { useState } from 'react';
import './IkigaiGarden.css';
import BackgroundSound from './BackgroundSound';  // <-- import here

const IkigaiGarden = () => {
  const [responses, setResponses] = useState({
    love: '',
    goodAt: '',
    worldNeeds: '',
    paidFor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses({ ...responses, [name]: value });
  };

  return (
    <div className="ikigai-container">
      <h2 className="ikigai-title">🌿 Ikigai Garden</h2>
      <p className="ikigai-description">
        Reflect on each of the following to discover your ikigai:
      </p>
      <div className="ikigai-prompts">
        <div className="ikigai-prompt">
          <label htmlFor="love">What do you love?</label>
          <textarea
            id="love"
            name="love"
            value={responses.love}
            onChange={handleChange}
            placeholder="e.g., Helping others, painting, teaching..."
          />
        </div>
        <div className="ikigai-prompt">
          <label htmlFor="goodAt">What are you good at?</label>
          <textarea
            id="goodAt"
            name="goodAt"
            value={responses.goodAt}
            onChange={handleChange}
            placeholder="e.g., Writing, problem-solving, organizing..."
          />
        </div>
        <div className="ikigai-prompt">
          <label htmlFor="worldNeeds">What does the world need?</label>
          <textarea
            id="worldNeeds"
            name="worldNeeds"
            value={responses.worldNeeds}
            onChange={handleChange}
            placeholder="e.g., Compassionate leaders, sustainable solutions..."
          />
        </div>
        <div className="ikigai-prompt">
          <label htmlFor="paidFor">What can you be paid for?</label>
          <textarea
            id="paidFor"
            name="paidFor"
            value={responses.paidFor}
            onChange={handleChange}
            placeholder="e.g., Coaching, design, consulting..."
          />
        </div>
      </div>

      {/* Add BackgroundSound component here */}
      <BackgroundSound />
    </div>
  );
};

export default IkigaiGarden;

