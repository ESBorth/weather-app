import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import TopBar from './components/topBar.jsx';
import { getTheDate } from './functions/getDate';
import { getTheTime } from './functions/getTime';

function App() {
  const [date, setDate] = useState(getTheDate());
  const [timeVer, setTimeVer] = useState('US');
  const [timeSetting, setTimeSetting] = useState(getTheTime(timeVer));
  const [geolocation, setGeolocation] = useState();
  
  useEffect(() => {
    const updateDate = setInterval(() => {
        setDate(getTheDate());
    }, 360000000);
    const updateTime = setInterval(() => {
        setTimeSetting(getTheTime(timeVer));
    }, 10000)
  })

  return (
    <div className="app-container">
      <h2></h2>
      <TopBar date={date} time={timeSetting}/>
    </div>
  );
}

export default App;
