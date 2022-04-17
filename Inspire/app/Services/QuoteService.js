import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosServices.js";


export class QuoteServices {
    async getQuote(){
      const res = await sandboxApi.get('quotes')
      ProxyState.quote = res.data
      console.log( ProxyState.quote );
    }
}

export const quoteService = new QuoteServices()