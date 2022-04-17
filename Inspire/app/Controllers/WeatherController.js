import { ProxyState } from "../AppState.js";
import { weatherServices } from "../Services/WeatherServices.js";

async function _drawWeather(){
    document.getElementById('weather').innerHTML = ProxyState.weather.Template

}

export class WeatherController {
    constructor(){
        ProxyState.on('weather' , _drawWeather)
        weatherServices.getWeather()
    }

    changeTemp(){
        ProxyState.weather.isC = !ProxyState.weather.isC
        console.log(ProxyState.weather);
        _drawWeather()
        
    }
}