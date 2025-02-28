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
    <div className="body">
      <div className="app-container">
        <h2>{`Good ${isMorning ? 'Morning' : 'Afternoon'}`}</h2>
        <TopBar date={date} timeSetting={timeSetting}/>
        <div className="row searchbar">
          <input type="text" placeholder="location" className="col-sm-9"/>
          <button className="button search col-sm-1">Search</button>
          <button className="button geolocate col-sm-1"><span class="material-symbols-outlined">location_on</span></button>
        </div>
        <div className="row">
          <div className="col-sm-6">

          </div>
          <div className="col-sm-3">

          </div>
          <div className="col-sm-3">

          </div>
        </div>
      </div>
      <label class="switch">
        <input type="checkbox"></input>
        <span class="slider round"><span class="material-symbols-outlined icon">dark_mode</span></span>
      </label>
    </div>
  );
}

export default App;
