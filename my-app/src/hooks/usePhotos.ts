import { useEffect, useState } from "react"
import { api, photosArray } from "../api/photos"

export const usePhotos = (): [photosArray[], React.Dispatch<React.SetStateAction<photosArray[]>>, photosArray, React.Dispatch<React.SetStateAction<photosArray>>] => {
    const [photos, setPhotos] = useState<photosArray[]>([])
    const [photoSelected, setPhotoSelected] = useState<photosArray>({
        large: "",
        small: ""
    })

    useEffect(() => {
        api.get().then((response) => {
            setPhotos(response)
            setPhotoSelected(response[0])
        })
    }, [])

    return [photos, setPhotos, photoSelected, setPhotoSelected]
}