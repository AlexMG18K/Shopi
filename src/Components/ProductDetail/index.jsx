import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/Index'
import { useEffect } from 'react'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    useEffect(() => {
      document.body.style.overflow = context.isProductDetailOpen ? 'hidden' : ''
    }, [context.isProductDetailOpen])

    
    
return ( <div>
    {context.isProductDetailOpen && (
      <div className="fixed inset-0 bg-opacity-0 backdrop-filter backdrop-blur flex justify-center items-center">
    <aside 
    className={` ${context.isProductDetailOpen ? 'flex' : 'hidden' } product-detail flex flex-col fixed  border border-black rounded-lg bg-white `}>
        <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div/>
        <XMarkIcon 
        className='h-6 w-6 text-black cursor-pointer'
        onClick={() => context.closeProductDetail()}/>
        </div>
        <figure className='px-20'>
          <img className='w-full h-full rounded-lg '
          src={context.productToShow.image}
          alt={context.productToShow.title}/>
        </figure>
        <p className='flex flex-col p-1 max-h-30 overflow-auto '>
          <span className='font-medium text-2xl'>${context.productToShow.price}</span>
          <span className='font-medium text-md mb-2'>{context.productToShow.title}</span>
          <span className='font-medium text-xs'>{context.productToShow.description}</span>
        </p>
    </aside>
    </div>
      )}
    </div>
)
}

export default ProductDetail