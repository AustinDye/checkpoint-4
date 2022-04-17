import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

async function _drawQuote(){
    let quote = ProxyState.quote.content
    let credit = ProxyState.quote.author
    document.getElementById('quote').innerHTML = `
    <h4>"${quote}"</h4>
          <p>${credit}</p>
    `
}

export class QuoteController {
    constructor(){
        ProxyState.on('quote', _drawQuote)
        quoteService.getQuote()
    }
}