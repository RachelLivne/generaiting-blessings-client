import React from 'react';

const GreetingsResult = ({ data}) => {

  let i=0
   function onRestart(){
     i++;
   }
  return (
    <div>
      <h2>Greetings Result</h2>
      <p>{data[i]}</p>
      <button onClick={onRestart}>I want something else</button>
    </div>
  );
};

export default GreetingsResult;