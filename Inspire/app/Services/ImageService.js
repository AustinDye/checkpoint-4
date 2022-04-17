import { ProxyState } from "../AppState.js";
import { sandboxApi } from "./AxiosServices.js";


export class ImageServices {
    async getImage(){
      const res = await sandboxApi.get('images')
      ProxyState.image = res.data
      console.log( ProxyState.image );
    }
}

export const imageService = new ImageServices()