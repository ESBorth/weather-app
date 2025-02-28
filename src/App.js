import React, { useState, useEffect } from 'react';
import './App.css';
import TopBar from './components/topBar.jsx';
import { getTheDate } from './functions/getDate';
import { getTheTime } from './functions/getTime';

function App() {
  const [date, setDate] = useState(getTheDate());
  const [timeVer, setTimeVer] = useState('US');
  const [timeSetting, setTimeSetting] = useState(getTheTime(timeVer));
  const reactTime = JSON.stringify(timeSetting);

  useEffect(() => {
    const updateDate = setInterval(() => {
      setDate(getTheDate());
    }, 360000000);
    const updateTime = setInterval(() => {
      setTimeSetting(getTheTime(timeVer));
      console.log("App.js: ", timeSetting);
    }, 10000);
  })

  return (
    <div className="app-container">
      <TopBar date={date} timeSetting={timeSetting}/>
    </div>
  );
}

export default App;
