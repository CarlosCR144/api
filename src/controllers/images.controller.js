import {imagesModel} from "../models/images.model.js"

const getImages = (req, res) => {
    const imageModel = new imagesModel()

    const images = imageModel.getAll()

    res.json(images)
}

export {
    getImages
}