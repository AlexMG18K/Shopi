import { XMarkIcon } from '@heroicons/react/24/solid'


const OrdersCard = props => {
    const { totalPrice, totalProducts } = props


    return(
        <div className="flex justify-between items-center gap-2 border-black border">
            <p>
                <span>01.02.2023</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export default OrdersCard