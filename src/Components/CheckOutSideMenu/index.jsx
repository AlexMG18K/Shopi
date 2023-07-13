import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/Index'
import { totalPrice } from '../../Utils/Index'
import { Link } from 'react-router-dom'
import OrderCard from '../OrderCard/Index'
import './styles.css'


const CheckOutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const fileteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(fileteredProducts)
        context.setCount(context.count - 1)
    }

    const handleCheckout = () => {
    
        const orderToAdd = {
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
        context.closeCheckoutSideMenu();
    }



return (
    <aside 
    className={` ${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden' } checkout-side-menu flex-col fixed top-20 right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
        <XMarkIcon 
        className='h-6 w-6 text-black cursor-pointer'
        onClick={() => context.closeCheckoutSideMenu()}/>
        </div>
        </div>
        <div className='px-5 overflow-auto flex-1'>
        {
            context.cartProducts.map((product)=> (
                <OrderCard
                key = {product.id}
                id={product.id}
                title={product.title}
                imageURL={product.image}
                price={product.price}
                handleDelete={handleDelete}
                />
                ))
            }
            </div>
            <div className='px-6 mb-8'>
                <p className='flex justify-between items-center mb-3'> 
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-order/last'>
                <button
                className='bg-black w-full py-3 text-white rounded-lg' 
                onClick={()=> handleCheckout()}>Checkout</button>
                </Link>
            </div>
    </aside>  
      )
    }

export default CheckOutSideMenu