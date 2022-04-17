
async function _drawClock(){
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let hour = today.getHours()
    let timeOf = ''

    if(hour >= 11 && hour < 12){
        timeOf = 'Morning'

    }
    if(hour >= 12 && hour < 20){
        timeOf = 'Afternoon'
        
    }
    if(hour >= 20 && hour < 23 ){
        timeOf = 'Night'

    }
    document.getElementById('time').innerHTML = `<p>${time}</p><h1>Good ${timeOf} Austin!</h1>`
    
}

export class ClockController {
    constructor(){
        setInterval(_drawClock, 100)
     
    }
    
}
