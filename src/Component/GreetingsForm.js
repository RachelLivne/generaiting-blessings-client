import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GreetingsResult from './GreetingsResult';
const GreetingsForm = ({ }) => {
  const [eventType, setEventType] = useState('');
  const [age, setAge] = useState(0);
  const [NameOfWedding, setNameOfWedding] = useState("");
  const [DateOfWedding, setDateOfWedding] = useState(new Date());
  const [greetingType, setGreetingType] = useState('');
  const [mood, setMood] = useState('');
  const [data, setData] = useState("");
  const [prompt, setPrompt] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);


  const [postData, setPostData] = useState({
    prompt: 'תכתוב לי ברכה ליומולדת לילד שנהיה בן 3',
    temperature: 0.8,
  });
  const tryFunc = async () => {
    try {
      const response = await axios.post('http://localhost:3001/generate', postData);
      console.log("res", response)
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }



  const handleEventChange = (event) => {
    setSelectedEvent(event);
  };

  const writePrompt = async () => {
    if (selectedEvent == "wedding") {
      let prompt1 = `
      I want an array that contains 3 options for  ${selectedEvent} greetings that the names of
       the bride and groom are ${NameOfWedding} and the date of the wedding is the ${DateOfWedding}
        that the blessings will be in a ${mood} and ${greetingType} that the blessings will be written
         in Hebrew
     
      `
      setPrompt(prompt1)


    }
    else {
      let prompt2 = `
      I want an array that contains 3 options for  ${selectedEvent} greetings that the age
      is ${age}
        that the blessings will be in a ${mood} and ${greetingType} that the blessings will be written
         in Hebrew`
      setPrompt(prompt2)
    }

    genereteBlessings()

  }

  const genereteBlessings = async () => {
    try {
      const response = await axios.post('http://localhost:3001/generate', prompt);
      console.log("res", response)
      setData(response.data);
      alert(data)
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }

 





  return (
    <div>
      <div>
        <h2>בחר אירוע:</h2>
        <select onChange={(e) => handleEventChange(e.target.value)}>
          <option value="birthday">יומולדת</option>
          <option value="wedding">חתונה</option>

        </select>

        {selectedEvent && (
          <div>
            <h3>{selectedEvent}</h3>
            {selectedEvent === 'birthday' && (
              <div>
                <label>
                  מה הגיל?:
                  <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
              </div>
            )}
            {selectedEvent === 'wedding' && (
              <div>
                <label>
                  מה התאריך של החתונה
                  <input type="date" value={DateOfWedding} onChange={(e) => setDateOfWedding(e.target.value)} />

                </label>
                <label>
                  ? ומה שמות החתן והכלה
                  <input type="text" value={NameOfWedding} onChange={(e) => setNameOfWedding(e.target.value)} />
                </label>
              </div>
            )}

          </div>
        )}
      </div>

      <label>
        Greeting Type:
        <select value={greetingType} onChange={(e) => setGreetingType(e.target.value)}>
          <option value="short">Short</option>
          <option value="long">Long</option>
        </select>
      </label>

      <label>
        Mood:
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="happy">Happy</option>
          <option value="funny">Funny</option>
        </select>
      </label>
      <button onClick={writePrompt}>Generate Greeting</button>
      <div>
        {data ? (
          <p>Data from the server: {data}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {data ? (
        <GreetingsResult data={data} />
      ) : (
        <p>Loading...</p>
      )}
      {/* <p>
        {prompt}
      </p> */}
    </div>






  );
}

export default GreetingsForm;
