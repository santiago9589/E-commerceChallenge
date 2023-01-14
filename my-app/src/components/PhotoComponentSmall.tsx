import React from 'react'
import { photosArray } from '../api/photos'

interface props {
    photo: photosArray
    selected: boolean
    setSelect: React.Dispatch<React.SetStateAction<photosArray>>
}

const PhotoComponentSmall = ({ photo, selected, setSelect }: props) => {
    return (
        <article className={`${selected ? ("opacity-25 border-2 border-red-500 rounded-lg") : ("opacity-100")} `}>
            <img className="h-16 w-16 rounded-lg" src={photo.large} alt={`${photo}-img`} onClick={() => setSelect(photo)} />
        </article>
    )
}

export default PhotoComponentSmall