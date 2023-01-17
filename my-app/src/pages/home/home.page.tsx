import NavbarComponent from '../../components/NavbarComponent.components'
import SubtitleComponent from '../../components/SubtitleComponent'
import TitleComponent from '../../components/TitleComponent'
import PhotoComponentSmall from '../../components/PhotoComponentSmall'
import { usePhotos } from '../../hooks/usePhotos'
import { useContext, useMemo } from 'react'
import { AppContext } from '../../../context/AppContext'
import { useQuantity } from '../../hooks/useQuantity'
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion"
import { varianstButton } from '../../../motion'





const HomePage = () => {


  const [photos, setPhotos, photoSelected, setPhotoSelected] = usePhotos()
  const [quantityProduct, handleQuantity, setQuantityProduct] = useQuantity()
  const { state, actions } = useContext(AppContext)

  const priceResult = useMemo(() => {
    return ((state.productView.priceSell * state.productView.priceOff * 100) / 100)
  }, [state.productView])

  const handleAdd = () => {
    if (quantityProduct === 0) return
    actions.handleCart({
      name: state.productView.title,
      price: priceResult,
      quantity: quantityProduct,
      imgProduct: photoSelected.small,
      id: uuidv4()
    })
    setQuantityProduct(0)
  }

  return (
    <>
      <NavbarComponent />
      <motion.section className='h-full flex flex-col sm:flex-row sm:h-5/6 p-4 box-border gap-6 w-full'>
        <section className='flex-1 items-center flex-col p-4 pt-8 box-border flex justify-center space-y-6'>
          <img src={photoSelected.large} alt="product" className='w-2/3 h-2/3 rounded-lg' />
          <section className='flex space-x-7'>
            {
              photos.map((photo, index) => {
                return (
                  <PhotoComponentSmall key={index} photo={photo} selected={photoSelected === photo} setSelect={setPhotoSelected} />
                )
              })
            }
          </section>
        </section>
        <section className='flex-1 flex flex-col justify-center items-start p-8'>
          <SubtitleComponent subtitle={state.productView.Provider} />
          <TitleComponent title={state.productView.title} />
          <p className='flex text-lg'>
            {state.productView.description}
          </p>
          <section>
            <section className='flex flex-col mt-4 items-start'>
              <section className='flex items-center'>
                <p className='font-bold text-xl mr-2'>{`${priceResult.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}`}</p>
                <p className='font-semibold text-lg bg-primary-500 p-1 rounded-full text-white'>{(state.productView.priceOff).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 0 })}</p>
              </section>
              <p className='opacity-50  line-through'>{(state.productView.priceSell.toLocaleString("es-AR", { style: "currency", currency: "ARS" }))} </p>
            </section>
          </section>
          <section className='w-full flex items-start space-x-2 mt-4'>
            <section className='bg-slate-50 rounded-lg p-2 w-1/3 flex items-center justify-around'>
              <button onClick={() => { handleQuantity(-1) }} className='text-primary-500 text-xl'>-</button>
              <span>{quantityProduct}</span>
              <button onClick={() => { handleQuantity(1) }} className='text-primary-500 text-xl'>+</button>
            </section>
            <section className='w-1/2'>
              <motion.button variants={varianstButton}
                whileHover="hover"
                whileTap="tap" className='text-white font-bold capitalize bg-primary-500 p-2 w-full rounded-lg text-lg' onClick={() => {
                  handleAdd()
                }}>add to card</motion.button>
            </section>
          </section>
        </section>
      </motion.section>
    </>
  )
}

export default HomePage

