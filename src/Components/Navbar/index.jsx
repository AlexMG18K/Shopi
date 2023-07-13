import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context/Index"
import { useContext } from "react"

const NavBar = () => {
    const context = useContext (ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    const handleOpenCheckout = () => { context.isCheckoutSideMenuOpen ? context.closeCheckoutSideMenu() : context.openCheckoutSideMenu()
        }
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                    to='/'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    onClick={() => context.setSearchByCategory()}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    onClick={() => context.setSearchByCategory('clothing')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                    onClick={() => context.setSearchByCategory('furnitures')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                    onClick={() => context.setSearchByCategory('toys')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                    onClick={() => context.setSearchByCategory('others')}
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60" >
                    <a href="https://github.com/AlexMG18K">
                        Alex@gmail.com
                    </a>
                </li>
                <li>
                    <NavLink to='/my-order'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/My-Account'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li className="flex " style={{ cursor: 'pointer' }} onClick={handleOpenCheckout}>
                    <ShoppingCartIcon className="w-5 h-5 mr-0.5 " />
                    {context.cartProducts.length}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar