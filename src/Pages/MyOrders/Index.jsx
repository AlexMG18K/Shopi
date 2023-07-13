import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/Index";
import LayOut from "../../Components/Layout";
import OrderCards from '../../Components/OrdersCard/Index';

function MyOrderss() {
  const context = useContext(ShoppingCartContext);

  return (
    <LayOut>
      <div className="flex items-center w-80 justify-center py-5">
        <h1 className="font-medium">My Orders</h1>
      </div>
      {
        context.order.map((order, index) => {
          return (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrderCards
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          )})}
    </LayOut>
  );
}

export default MyOrderss;