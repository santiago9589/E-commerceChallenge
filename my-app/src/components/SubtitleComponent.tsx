import React from 'react'

interface props {
    subtitle: string
}

const SubtitleComponent = ({ subtitle }: props) => {
    return (
        <h3 className='text-primary-500 uppercase text-xs font-bold'>{subtitle}</h3>
    )
}

export default SubtitleComponent