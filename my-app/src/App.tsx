import { useState } from "react"
import ProductCart from "./components/ProductCart"
import TitleComponent from "./components/TitleComponent"
import HomePage from "./pages/home/home.page"

function App() {

  interface Product {
    name: string
    price: number
    quantity: number
  }

  const [cart, setCart] = useState<Product[]>([])

  return (
    <main className="container mx-auto h-screen relative">



      <aside className='absolute top-14 right-0 '>
        <article className='h-44 w-64 p-2 bg-white border-2 shadow-lg shadow-slate-300'>
          <p className="font-bold text-left text-lg border-b-2 border-slate-100">Cart</p>
          <section className="flex justify-center items-center mt-12">
            {
              cart.length > 0 ?
                (
                  <>
                    {
                      cart.map((product)=>{
                        return(
                          <ProductCart product={product}/>
                        )
                      })
                    }
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


      <HomePage />
    </main>
  )
}

export default App
