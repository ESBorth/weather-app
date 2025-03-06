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
import { getGeoWeather, getGeoForecast, getInputForecast, getInputWeather, switchTemps } from './functions/getWeather.js';

function App() {
  const [date, setDate] = useState(getTheDate());
  const [timeVer, setTimeVer] = useState('US');
  const [timeSetting, setTimeSetting] = useState(getTheTime(timeVer));
  const [morning, setMorning] = useState(isMorning());
  const [checked, setChecked] = useState(getDefaultColor());
  const [locationData, setLocationData] = useState();
  const [switched, setSwitched] = useState(false);
  const [location, setLocation] = useState("Search");
  const [measurement, setMeasurement] = useState("imperial");
  const [currentTemp, setCurrentTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [currentHigh, setCurrentHigh] = useState();
  const [currentLow, setCurrentLow] = useState();
  const [weatherCondition, setWeatherCondition] = useState();
  const [weatherResults, setWeatherResults] = useState();

  useEffect(() => {
    setMorning(isMorning());
    const updateDate = setInterval(() => {
      setDate(getTheDate());
    }, 360000000);
    const updateTime = setInterval(() => {
      setTimeSetting(getTheTime(timeVer));
    }, 10000);
  }, []);

  const handleCheckedChange = () => {
    setChecked(!checked);
  };
  const handleSwitched = () => {
    setSwitched(!switched);
  };

  const setter = () => {
    if(switched === false){
      setMeasurement("metric");
      setCurrentTemp(weatherResults.metric.weather.main.temp);
      setCurrentHigh(weatherResults.metric.weather.main.temp_max);
      setCurrentLow(weatherResults.metric.weather.main.temp_min);
    } else if (switched) {
      setMeasurement("imperial");
      setCurrentTemp(weatherResults.imperial.weather.main.temp);
      setCurrentHigh(weatherResults.imperial.weather.main.temp_max);
      setCurrentLow(weatherResults.imperial.weather.main.temp_min);
      setLocation(locationData);
    }
  }
  const handleSearch = async (location) => {
    console.log(measurement);
    const weatherDataImperial = await getInputWeather(location, "imperial");
    console.log(weatherDataImperial);
    const weatherDataMetric = await getInputWeather(location, "metric");
    console.log(weatherDataMetric);
    const forecastDataImperial = await getInputForecast(location, "imperial");
    const forecastDataMetric = await getInputForecast(location, "metric");
    setWeatherResults({imperial: {weather:weatherDataImperial, forecast:forecastDataImperial}, metric: {weather:weatherDataMetric, forecast:forecastDataMetric}});
    setCurrentTemp(weatherDataImperial.main.temp);
    setCurrentHigh(weatherDataImperial.main.temp_max);
    setCurrentLow(weatherDataImperial.main.temp_min);
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
            <h3>{location}</h3>
            <p>Current Weather: {weatherCondition}</p>
            <p><span>Humidity: {humidity}%</span> | <span>Wind: {wind} {measurement === 'imperial' ? ("mph") : "kmph"}</span></p>
          </div>
          <div className="col-sm-3">

          </div>
          <div className="col-sm-2">
            <h3>{currentTemp}°</h3>
            <p><span>{currentHigh}°</span> | <span>{currentLow}°</span></p>
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
        <div className="col-sm-3" onClick={async ()=>{
          await handleSwitched();
          }}>
          <TempSwitcher switched={switched} checked={checked} setSwitched={setSwitched}/>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
