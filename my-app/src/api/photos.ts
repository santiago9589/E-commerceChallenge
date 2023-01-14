import productImagen1 from "../assets/image-product-1.jpg"
import productImagen2 from "../assets/image-product-2.jpg"
import productImagen3 from "../assets/image-product-3.jpg"
import productImagen4 from "../assets/image-product-4.jpg"

import productImagen1Thumb from "../assets/image-product-1-thumbnail.jpg"
import productImagen2Thumb from "../assets/image-product-2-thumbnail.jpg"
import productImagen3Thumb from "../assets/image-product-3-thumbnail.jpg"
import productImagen4Thumb from "../assets/image-product-4-thumbnail.jpg"

export interface photosArray {
    large: string,
    small: string
}


export const arrayPhotos: photosArray[] = [{
    large: productImagen1,
    small: productImagen1Thumb
},
{
    large: productImagen2,
    small: productImagen2Thumb
},
{
    large: productImagen3,
    small: productImagen3Thumb
},
{
    large: productImagen4,
    small: productImagen4Thumb
}
]


export const api = {
    get: async (): Promise<photosArray[]> => {
        return arrayPhotos
    }
}