import React, { useContext} from 'react'
import ButtonComponent from './buttonComponent'
import ProductCart from './ProductCart'
import { AppContext } from '../../context/AppContext'

const CartBasketComponent = () => {

      const {state} = useContext(AppContext)

  return (
    <aside className='absolute top-14 right-0 '>
        <article className='h-48 w-68 p-2 bg-white border-2 shadow-lg shadow-slate-300 overflow-y-auto'>
          <p className="font-bold text-left text-lg border-b-2 border-slate-100">Cart</p>
          <section className="flex flex-col p-2">
            {
              state.cart.length > 0 ?
                (
                  <>
                    <section className="flex flex-col justify-center items-start mb-8">
                      {
                        state.cart.map((product,index) => {
                          return (
                            <ProductCart key={index}  product={product} />
                          )
                        })
                      }
                    </section>
                    <ButtonComponent title='Checkout' onClick={() => { }} />
                  </>
                )

                :
                (
                  <>
                    <p>Cart is empty</p>
                  </>
                )
            }
          </section>
        </article>
      </aside>
  )
}

export default CartBasketComponent