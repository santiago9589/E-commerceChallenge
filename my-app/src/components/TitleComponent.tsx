import React from 'react'

interface props {
    title: string
}

const TitleComponent = ({ title }: props) => {
    return (
        <h1 className='capitalize font-bold text-5xl my-8'>{title}</h1>
    )
}

export default TitleComponent