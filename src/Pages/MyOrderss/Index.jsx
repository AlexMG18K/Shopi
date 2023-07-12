import { useContext } from "react";
import { Link } from "react-router-dom";
import LayOut from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context/Index";
import  OrderCards  from '../../Components/OrdersCard/Index'


function MyOrderss (){
    const context = useContext(ShoppingCartContext)


return (
    <LayOut>
        MyOrders
        {
            context.order.map((order, index) => {
                <Link key={index} to={`/my-orderss/${order.id}`}>
                <OrderCards
                totalPrice = {order.totalPrice} 
                totalProducts={order.totalProducts}/>      
                </Link>
            })
        }
    </LayOut>
)
}

export default MyOrderss