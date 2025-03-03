import axios from 'axios';
const APIkey = "49f6fb1cfe73c099a03c55f7abc64bb8";

const geoDecoder = async (input) => {
    console.log(input);
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

export function getInputWeather (input) {
    const data = geoDecoder(input);
}
export function getInputForecast (input) {
    const data = geoDecoder(input);
}

export function convertToCelcius() {

}
//Add error catch for zipcode if not all 5 characters are numbers