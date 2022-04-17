
async function _drawClock(){
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById('time').innerHTML = `
    <p>${time}</p>
    <h1>Good (todo time of day) Austin!
    `
}

export class ClockController {
    constructor(){
        setInterval(_drawClock, 100)
     
    }
    
}
