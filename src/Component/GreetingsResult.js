import React from 'react';

const GreetingsResult = ({ result, onRestart }) => {
  return (
    <div>
      <h2>Greetings Result</h2>
      <p>{result}</p>
      <button onClick={onRestart}>I want something else</button>
    </div>
  );
};

export default GreetingsResult;