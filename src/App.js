import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import TopBar from './components/topBar.jsx';
import Forecast from './components/forecast.jsx';
import DarkMode from './components/darkmode.jsx';
import TempSwitcher from './components/temperatureSwitch.jsx';
import { getTheDate } from './functions/getDate';
import { getTheTime, isMorning } from './functions/getTime';
import { getDefaultColor } from './functions/handleDefaultColor.js';
import { getGeoWeather, getGeoForecast, getInputForecast, getInputWeather } from './functions/getWeather.js';

function App() {
  const [date, setDate] = useState(getTheDate());
  const [timeVer, setTimeVer] = useState('US');
  const [timeSetting, setTimeSetting] = useState(getTheTime(timeVer));
  const [morning, setMorning] = useState(isMorning());
  const [checked, setChecked] = useState(getDefaultColor());
  const [locationData, setLocationData] = useState();
  const [switched, setSwitched] = useState(false);

  useEffect(() => {
    setMorning(isMorning());
    const updateDate = setInterval(() => {
      setDate(getTheDate());
    }, 360000000);
    const updateTime = setInterval(() => {
      setTimeSetting(getTheTime(timeVer));
    }, 10000);
  })

  const handleCheckedChange = () => {
    setChecked(!checked);
  };
  const handleSwitched = () => {
    setSwitched(!switched);
    console.log(switched);
  };

  const handleSearch = (data) => {
    const forecastData = getInputForecast(data);
    const weatherData = getInputWeather(data);
  }

  return (
    <div className={`${checked ? "body-dark" : "body" }`}>
      <div className={`${checked ? "app-container-dark" : "app-container" }`}>
        <h2>{`Good ${isMorning ? 'Morning' : 'Afternoon'}`}</h2>
        <TopBar date={date} timeSetting={timeSetting}/><br/>
        <div className="row searchbar">
          <input type="text" placeholder="location" className="col-sm-9" onChange={(e)=> setLocationData(e.target.value)}/>
          <button className={`${checked ? "button-dark " : "button" } search col-sm-1`} onClick ={() => handleSearch(locationData)}>Search</button>
          <button className={`${checked ? "button-dark " : "button" } geolocate col-sm-1`}><span className="material-symbols-outlined">location_on</span></button>
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
        </div><br/>
        <div className="row">
          <Forecast/>
        </div>
      </div>
      <div className = "row">
        <div className = "col-sm-3"></div>
        <div className="col-sm-3" onClick={()=>handleCheckedChange()}>
          <DarkMode checked={checked} setChecked={setChecked}/>
        </div>
        <div className="col-sm-3" onClick={()=>handleSwitched()}>
          <TempSwitcher switched={switched} checked={checked} setSwitched={setSwitched}/>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
