import { ProxyState } from "../AppState.js";
import { weatherServices } from "../Services/WeatherServices.js";

async function _drawWeather(){
    document.getElementById('weather').innerHTML = ProxyState.weather.Template

    if (ProxyState.weather.isC == true){
    document.getElementById('temp-type').innerText = 'C'
    }
    else{
        document.getElementById('temp-type').innerText = 'F'
    }

}

export class WeatherController {
    constructor(){
        ProxyState.on('weather' , _drawWeather)
        weatherServices.getWeather()

    }

    changeTemp(){
        ProxyState.weather.isC = !ProxyState.weather.isC
        console.log(ProxyState.weather);
        ProxyState.weather = ProxyState.weather
        
    }
}