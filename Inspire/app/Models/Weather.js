

export class Weather{
    constructor(data){
        this.temp = data.main.temp
        this.tempC = Math.floor(data.main.temp) - 273
        this.tempF = Math.floor(this.tempC * 9/5) + 32
        this.clouds = data.main.clouds
        this.isC = true
    }

    get Template(){
        const temp = this.isC ? this.tempC : this.tempF;
        return /*html*/ `
        <div class="d-block mx-2 my-2 btn" onclick="app.weatherController.changeTemp()">
            <span class="d-flex flex-row">
                <i class="mdi mdi-weather-cloudy fs-3"></i>
                <h2 class="my-2 mx-1" id="temp">${temp}</h2>
            </span>
            <h5>Boise</h5>
        </div>
        `
    }
}