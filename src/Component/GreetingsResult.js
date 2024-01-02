import React from 'react';

const GreetingsResult = ({ data}) => {
  return (
    <div>
      <h2>Greetings Result</h2>
      <p>{data}</p>
      {/* <button onClick={onRestart}>I want something else</button> */}
    </div>
  );
};

export default GreetingsResult;