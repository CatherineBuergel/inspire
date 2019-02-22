import ImageService from "./image-service.js";

let _is = new ImageService()

function drawBg() {
  let image = _is.Image
  document.getElementById('bg-image').setAttribute('background', image.getTemplate())
}

export default class ImageController {
  constructor() {
    _is.addSubscriber('image', drawBg)
    _is.getImage()
  }



}

