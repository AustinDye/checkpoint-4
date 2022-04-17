import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";



async function _drawImage(){
    let img = ProxyState.image

    document.body.style.backgroundImage = `url(${img.largeImgUrl})`

    document.getElementById('img-credit').innerHTML = /*html*/`
        <div class="row">
            <div class="col-3">
                <i class="mdi mdi-camera fs-4 mx-3 my-4 cam-icon"></i>
            </div>
            <div class="col-9 ">
                <div class="img-text">
                    <h6>${img.tags}</h6>
                    <p>${img.author}</p>
                </div>
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