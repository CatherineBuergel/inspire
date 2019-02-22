// @ts-ignore
import Image from "../../models/image.js"
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}
let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

//public
export default class ImageService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Image() {
		return _state.image
	}

	getImage() {
		imgApi.get()
			.then(res => {
				let data = new Image(res.data)
				_setState('image', data)
			})
	}

}
