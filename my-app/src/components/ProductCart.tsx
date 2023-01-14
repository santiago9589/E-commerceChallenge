import React from 'react'

interface Product {
    name: string
    price: number
    quantity: number
}


interface props {
    product: Product
}

const ProductCart = ({ product }: props) => {
    return (
        <article className='w-full'>
            <p>{product.name}</p>
            <p>{product.price} x {product.quantity} = <p>{product.price * product.quantity}</p></p>
        </article>
    )
}

export default ProductCart