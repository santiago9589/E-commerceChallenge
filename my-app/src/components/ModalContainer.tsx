import React from 'react'

interface props {
    children: React.ReactNode
}

const ModalContainer = ({ children }: props) => {
    return (
        <article className='z-10'>
            {children}
        </article>
    )
}

export default ModalContainer