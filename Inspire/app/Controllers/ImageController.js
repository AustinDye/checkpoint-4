import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";



async function _drawImage(){
    let img = ProxyState.image

    document.body.style.backgroundImage = `
    url(${img.largeImgUrl})
    `
    document.getElementById('img-credit').innerHTML = `
    <span class="d-flex"><i class="mdi mdi-camera mx-2"></i><h5>${img.tags}</h5></span><p>${img.author}</p>
    
    
          
    `
}

export class ImageController {
    constructor(){
        imageService.getImage()
        ProxyState.on('image', _drawImage)
        
    }
}