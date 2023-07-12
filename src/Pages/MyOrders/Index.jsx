import {useContext} from 'react'
import { ShoppingCartContext } from '../../Context/Index'
import OrderCard from '../../Components/OrderCard/Index'
import LayOut from "../../Components/Layout"


function MyOrders() {
    const context = useContext(ShoppingCartContext)
    

    return (
        <LayOut>
      My Orders
      <div className='flex flex-col w-80'>
        {
            context.order.slice(-1)[0].products.map((product)=> (
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