import React, { useState, useEffect } from 'react';
import './App.css';
import TopBar from './components/topBar.jsx';
import { getTheDate } from './functions/getDate';
import { getTheTime, isMorning } from './functions/getTime';

function App() {
  const [date, setDate] = useState(getTheDate());
  const [timeVer, setTimeVer] = useState('US');
  const [timeSetting, setTimeSetting] = useState(getTheTime(timeVer));
  const [morning, setMorning] = useState(isMorning());

  useEffect(() => {
    setMorning(isMorning());
    const updateDate = setInterval(() => {
      setDate(getTheDate());
    }, 360000000);
    const updateTime = setInterval(() => {
      setTimeSetting(getTheTime(timeVer));
    }, 10000);
  })

  return (
    <div className="app-container">
      <h2>{`Good ${isMorning ? 'Morning' : 'Afternoon'}`}</h2>
      <TopBar date={date} timeSetting={timeSetting}/>
    </div>
  );
}

export default App;
