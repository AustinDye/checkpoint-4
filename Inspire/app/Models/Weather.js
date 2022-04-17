

export class Weather{
    constructor(data){
        this.temp = data.main.temp
        this.tempC = Math.floor(data.main.temp) - 273
        this.tempF = Math.floor(this.tempC * 9/5) + 32
        this.clouds = data.clouds.all
        this.isC = true
        this.cloudy = 'mdi-weather-cloudy'
        this.sunny = 'mdi-white-balance-sunny'
       
    }

    get Template(){
        let icon = ''

        if(this.clouds < 70){
            icon = this.sunny
        }
        if(this.clouds >= 70){
            icon = this.cloudy
        }

        const temp = this.isC ? this.tempC : this.tempF

        return /*html*/ `
        <div class="d-block mx-2 my-3 theWeather" onclick="app.weatherController.changeTemp()">
            <span class="d-flex flex-row">
                <i class="mdi ${icon} fs-3"></i>
                <h2 class=" mx-1" id="temp">${temp}</h2>
                <p id="temp-type"></p>
            </span>
            <h5 class="">Boise</h5>
        </div>
        `
    }
}