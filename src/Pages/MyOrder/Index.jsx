import {useContext} from 'react'
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from '../../Context/Index'
import OrderCard from '../../Components/OrderCard/Index'
import LayOut from "../../Components/Layout"


function MyOrders() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if(index === 'last') index = context.order?.length-1



    return (
        <LayOut>
        <div className="flex items-center w-80 relative justify-center">
        <Link to='/my-orders' className=" absolute left-0">
        <ChevronLeftIcon 
        className='h-6 w-6 text-black cursor-pointer'/>
        </Link>
            <h1>My Order</h1>
        </div>
      <div className='flex flex-col w-80 gap-5 p-3 mt-3'>
        {
            context.order[index]?.products.map((product)=> (
                <OrderCard
                key = {product.id}
                id={product.id}
                title={product.title}
                imageURL={product.image}
                price={product.price}
                />
                ))
            }
            </div>
        </LayOut>
    )
  }
  
  export default MyOrders