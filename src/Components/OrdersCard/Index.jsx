import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index"
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'


const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    const context = useContext(ShoppingCartContext);
    const currentDate = context.currentDate.toLocaleDateString();

  


    return (
      <div className="bg-white text-gray-600 py-2 px-4 rounded-lg shadow-lg hover:shadow-xl border mb-4 relative" style={{ width: '350px' }}>
        <div className="flex items-center justify-between">
          <span>
            <p className="text-xs">{currentDate}</p>
            <p className="text-base">{totalProducts} articles</p>
          </span>
          <p className="flex">
            <span className="text-xl font-semibold mr-1.5"> ${totalPrice}</span>
            <ChevronRightIcon className='flex h-6 w-6  text-black cursor-pointer' />
          </p>
        </div>
      </div>
    );    
    }    
    
    export default OrdersCard