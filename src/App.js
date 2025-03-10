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
  const [switched, setSwitched] = useState();
  const [location, setLocation] = useState("Search");
  const [measurement, setMeasurement] = useState("imperial");
  const [currentTemp, setCurrentTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [currentHigh, setCurrentHigh] = useState();
  const [currentLow, setCurrentLow] = useState();
  const [weatherCondition, setWeatherCondition] = useState();
  const [imperialWeather, setImperialWeather] = useState();
  const [imperialForecast, setImperialForecast] = useState();
  const [metricWeather, setMetricWeather] = useState()
  const [metricForecast, setMetricForecast] = useState();

  useEffect(() => {
    setMorning(isMorning());
    console.log(switched);
    const updateDate = setInterval(() => {
      setDate(getTheDate());
    }, 360000000);
    const updateTime = setInterval(() => {
      setTimeSetting(getTheTime(timeVer));
    }, 10000);
  }, [switched, setSwitched, measurement]);

  const handleCheckedChange = () => {
    setChecked(!checked);
  };
  const handleSwitched = () => {
    if (measurement === "imperial"){
      setMeasurement("metric");
      setSwitched(true);
    } else if (measurement === "metric"){
      setMeasurement("imperial");
      setSwitched(false);
    }
  };

  const setter = (imperialWeather, metricWeather, imperialForecast, metricForecast) => {
    setLocation(imperialWeather.name);
    if(switched){
      setMeasurement("metric");
      setCurrentTemp(metricWeather.main.temp);
      setCurrentHigh(metricWeather.main.temp_max);
      setCurrentLow(metricWeather.main.temp_min);
      setWeatherCondition(metricWeather.weather[0].main);
    } else if (!switched) {
      setMeasurement("imperial");
      console.log(measurement);
      setCurrentTemp(imperialWeather.main.temp);
      setCurrentHigh(imperialWeather.main.temp_max);
      setCurrentLow(imperialWeather.main.temp_min);
      setWeatherCondition(imperialWeather.weather[0].main);
    }
  }
  const handleSearch = async (location) => {
    const weatherDataImperial = await getInputWeather(location, "imperial");
    console.log(weatherDataImperial);
    const weatherDataMetric = await getInputWeather(location, "metric");
    const forecastDataImperial = await getInputForecast(location, "imperial");
    const forecastDataMetric = await getInputForecast(location, "metric");
    setter(weatherDataImperial, weatherDataMetric, forecastDataImperial, forecastDataMetric);
    setImperialWeather(weatherDataImperial);
    setImperialForecast(forecastDataImperial);
    setMetricWeather(weatherDataMetric);
    setMetricForecast(metricForecast);
  }

  return (
    <div className={`${checked ? "body-dark" : "body" }`}>
      <div className={`${checked ? "app-container-dark" : "app-container" }`}>
        <h2>{`Good ${isMorning ? 'Morning' : 'Afternoon'}`}</h2>
        <TopBar date={date} timeSetting={timeSetting}/><br/>
        <div className="row searchbar">
          <input type="text" placeholder="location" className="col-sm-9" onChange={(e)=> setLocationData(e.target.value)}/>
          <button className={`${checked ? "button-dark " : "button" } search col-sm-1`} onClick ={() => {
            handleSearch(locationData)
            setSwitched(false)
            }}>Search</button>
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
          setter(imperialWeather, metricWeather, imperialForecast, metricForecast);
          }}>
          <TempSwitcher switched={switched} checked={checked}/>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
