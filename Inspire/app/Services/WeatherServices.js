import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { sandboxApi } from "./AxiosServices.js";


export class WeatherServices {
      async getWeather(){
        const res = await sandboxApi.get('weather')
        console.log( ProxyState.weather );

        ProxyState.weather = new Weather(res.data)
        
      }
 
}

export const weatherServices = new WeatherServices()