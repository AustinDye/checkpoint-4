import { ProxyState } from "../AppState.js";
import { weatherServices } from "../Services/WeatherServices.js";

async function _drawWeather(){
    let weather = ProxyState.weather
    let temp = Math.floor(weather.main.temp) - 273
    let clouds = weather.clouds.all

   document.getElementById('weather').innerHTML = `
   <div class="d-block mx-2 my-2">
   <span class="d-flex flex-row">
            <i class="mdi mdi-weather-cloudy fs-3"></i>
            <h2 class="my-2 mx-1">${temp}</h2>
          </span>
          <h5>Boise</h5>
    </div>
   ` 
}

export class WeatherController {
    constructor(){
        ProxyState.on('weather' , _drawWeather)
        weatherServices.getWeather()
    }
}