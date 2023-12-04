import React, { useState } from 'react';

const GreetingsForm = ({ onSubmit }) => {
  const [eventType, setEventType] = useState('');
  const [age, setAge] = useState('');
  const [greetingType, setGreetingType] = useState('');
  const [mood, setMood] = useState('');

  const handleSubmit = () => {
    onSubmit({ eventType, age, greetingType, mood });
  };

  return (
    <div>
      <h2>Greetings Form</h2>
      <label>
        Event Type:
        <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
        <option value="birthday">Birthday</option>
          <option value="wedding">Wedding</option>
          {/* Add more event types as needed */}
        </select>
      </label>
      {eventType === 'birthday' && (
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
      )}
      <label>
        Greeting Type:
        <select value={greetingType} onChange={(e) => setGreetingType(e.target.value)}>
          <option value="short">Short</option>
          <option value="long">Long</option>
          {/* Add more greeting types as neede
          </select>
      </label>
      <label>
        Mood:
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="happy">Happy</option>
          <option value="funny">Funny</option>
          {/* Add more moods as needed */}
        </select>
      </label>
      <button onClick={handleSubmit}>Generate Greeting</button>
    </div>
  );
};

export default GreetingsForm;