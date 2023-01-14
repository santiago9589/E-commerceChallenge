import React from 'react'
import deleteSvg from "../assets/icon-delete.svg"
import {Product} from "../../types/Product"


interface props {
    product: Product
}

const ProductCart = ({ product }: props) => {
    return (
        <article className='w-full flex h-12 items-center p-1 justify-between mt-2 space-x-2'>
            <img className="h-full rounded-sm" src={product.imgProduct} alt="product.img" />
            <section className='p-2 flex flex-col justify-center w-full'>
                <h2 className='text-lg text-slate-400 capitalize'>{product.name}</h2>
                <section>{`${(product.price.toLocaleString("es-AR", { style: "currency", currency: "ARS" }))} x ${product.quantity}Und = ${(product.price * product.quantity).toLocaleString("es-AR", { style: "currency", currency: "ARS" })}`}</section>
            </section>
            <img className="h-4 w-4" src={deleteSvg} alt="delete.icon" />
        </article>
    )
}

export default ProductCart