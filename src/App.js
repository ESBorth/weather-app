import React, { useState, useEffect } from 'react';
import './App.css';
import TopBar from './components/topBar.jsx';
import Forecast from './components/forecast.jsx';
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
        <hr/>
        <div className="row">
          <div className="col-sm-7">
            <h3>Location</h3>
            <p>Conditions</p>
            <p><span>Humidity</span> | <span>Windspeed</span></p>
          </div>
          <div className="col-sm-3">

          </div>
          <div className="col-sm-2">
            <h3>Temp</h3>
            <p><span>High</span> | <span>Low</span></p>
          </div>
        </div>
        <div className="row">
          <Forecast/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
