import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosServices.js";


export class WeatherServices {
      async getWeather(){
        const res = await sandboxApi.get('weather')
        ProxyState.weather = res.data
        console.log( ProxyState.weather );
      }
}

export const weatherServices = new WeatherServices()