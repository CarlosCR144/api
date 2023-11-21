import imagesData from '../data/info.json' assert { type: 'json' };

class imagesModel {
    _images;

    constructor() {
        this._images = imagesData
    }

    getAll() {
        return this._images
    }
}

export {
    imagesModel
}