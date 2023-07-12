import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context/Index"

const Card = (datos) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if(isInCart){
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full p-1">
                  <CheckIcon  className="text-white rounded-lg shadow-lg" />
                </div>
            )
        }else{
            return(<div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1"
            onClick={(event) => addProductsToCart(event, datos.alt) }> 
              <PlusIcon  className="text-black hover:bg-gray-300 rounded-lg shadow-lg" />
            </div>
            )
        }
        return (
            <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1"
            onClick={(event) => addProductsToCart(event, datos.alt) }> 
              <PlusIcon  className="text-black hover:bg-gray-300 rounded-lg shadow-lg" />
            </div>
        )
    }
    return (
    <div 
     className="bg-white cursor-pointer w-45 h-50 rounded-lg"
    onClick = {() => showProduct(datos.alt)}>
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/40 rounded-lg text-black text-xs m-2 px-3 py-0.5">{datos.alt.category}</span>
            <img className="w-50 h-full object-cover rounded-lg truncate mr-2" src={datos.alt.image} alt={datos.alt.title} />
            {renderIcon(datos.alt.id)}
        </figure>
        <p className="flex justify-between ">
            <span className="text-sm font-light ">{datos.alt.title}</span>
            <span className="text-sm font-medium">${datos.alt.price}</span>
        </p>
    </div>
)
}

export default Card