import axios from 'axios';
const APIkey = "49f6fb1cfe73c099a03c55f7abc64bb8";

const geoDecoder = async (input) => {
    if (input.length === 5){
        let zipCode = input;
        let data = await axios.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${APIkey}`)
        .then((result)=> result.data);
        return(data);
    } else {
        let formatter = input.split(", ");
        console.log(formatter);
        let cityName = formatter[0];
        let stateCode = formatter[1];
        let data = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},US&limit=1&appid=${APIkey}`)
        .then((result)=> result.data);
        console.log(data);
        return(data);
    }
}
export function getGeoWeather () {

}
export function getGeoForecast () {

}

export async function getInputWeather (input, measurement) {
    const data = await geoDecoder(input);
    let lat = data.lat;
    let lon = data.lon;
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${measurement}`)
    .then((x)=> x.data);
    return result;
}
export async function getInputForecast (input, measurement) {
    const data = await geoDecoder(input);
}

export function switchTemps (temp, measurement) {
    console.log(measurement);
    let x = temp;
    if (measurement === "imperial"){
        x = Math.floor(((x - 32)) * ((5/9)));
    } 
    if (measurement === "metric")  {
        x = Math.floor((x * (1.8)) + 32);
    }
    return x;
}
//Add error catch for zipcode if not all 5 characters are numbers