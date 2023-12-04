import React, { useState } from 'react';
import GreetingsForm from './Component/GreetingsForm';
import GreetingsResult from './Component/GreetingsResult';

const App = () => {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({});

  const handleSubmitForm = (data) => {
    // Here you can make a request to your GPT server or handle the data as needed
    // For now, let's just simulate it by joining the data into a string
    const generatedGreeting = Object.values(data).join(' ');
    setResult(generatedGreeting);
    setFormData(data);
    setShowResult(true);
  };

  const handleRestart = () => {
    setShowResult(false);
    setResult('');
    setFormData({});
  };

  return (
    <div>
      {!showResult ? (
        <GreetingsForm onSubmit={handleSubmitForm} />
      ) : (
        <GreetingsResult result={result} onRestart={handleRestart} />
      )}
    </div>
  );
};

export default App;