import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";



async function _drawImage(){
    let img = ProxyState.image

    document.body.style.backgroundImage = `
    url(${img.largeImgUrl})
    `
    document.getElementById('img-credit').innerHTML = `


    <div class="row">
        <div class="col-3">
            <i class="mdi mdi-camera fs-3 mx-3 my-4"></i>
        </div>
        <div class="col-9">
        <h5>"${img.tags}"</h5>
        
        <p>${img.author}</p>
        </div>
    </div>
    
    
    
          
    `
}

export class ImageController {
    constructor(){
        imageService.getImage()
        ProxyState.on('image', _drawImage)
        
    }
}