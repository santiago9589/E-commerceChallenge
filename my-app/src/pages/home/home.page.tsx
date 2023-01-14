import NavbarComponent from '../../components/NavbarComponent.components'
import SubtitleComponent from '../../components/SubtitleComponent'
import TitleComponent from '../../components/TitleComponent'
import PhotoComponentSmall from '../../components/PhotoComponentSmall'
import { usePhotos } from '../../hooks/hooksPhotos'


const HomePage = () => {

 
  const [photos,setPhotos,photoSelected,setPhotoSelected] = usePhotos()

  return (
    <>
      <NavbarComponent />
      <section className='flex h-5/6 p-4 box-border gap-6 w-full'>
        <section className='flex-1 items-center flex-col p-4 pt-8 box-border flex justify-center space-y-6'>
          <img src={photoSelected.large} alt="product" className='w-2/3 h-2/3 rounded-lg' />
          <section className='flex space-x-7'>

            {
              photos.map((photo) => {
                return (
                  <PhotoComponentSmall photo={photo} selected={photoSelected === photo} setSelect={setPhotoSelected} />
                )
              })
            }

          </section>
        </section>
        <section className='flex-1 flex flex-col justify-center items-start p-8'>
          <SubtitleComponent subtitle='Sneaker Company' />
          <TitleComponent title='Fall Limited Edition Sneakers' />
          <p className='flex text-lg'>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole
            ,they’ll withstand everything the weather can offer
          </p>
          <section>
            <section className='flex flex-col mt-4 items-start'>
              <section className='flex items-center'>
                <p className='font-bold text-xl mr-2'>$125.00</p>
                <p className='font-semibold text-lg bg-primary-500 p-2 rounded-full'>50%</p>
              </section>
              <p className='opacity-50  line-through'>$250.00 </p>
            </section>
          </section>
          <section className='w-full flex items-start space-x-2 mt-4'>
            <section className='bg-slate-50 rounded-lg p-2 w-1/3 flex items-center justify-around'>
              <button className='text-primary-500 text-xl'>-</button><span>0</span><button className='text-primary-500 text-xl'>+</button>
            </section>
            <section className='w-1/2'>
              <button className='bg-primary-500 p-2 w-full rounded-lg text-lg'>Add to Card</button>
            </section>
          </section>
        </section>
      </section>
    </>
  )
}

export default HomePage

