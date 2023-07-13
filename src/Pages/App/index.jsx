import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context/Index'
import Home from '../Home/Index'
import MyAccount from '../MyAccount/Index'
import MyOrder from '../MyOrder/Index'
import MyOrders from '../MyOrders/Index'
import NotFound from '../NotFound/Index'
import NavBar from '../../Components/Navbar'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
import './index.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    {  path: '/',   element: <Home />},
    {  path: '/Clothes',   element: <Home />},
    {  path: '/Electronics',   element: <Home />},
    {  path: '/Furnitures',   element: <Home />},
    {  path: '/Toys',   element: <Home />},
    {  path: '/Others',   element: <Home />},
    {  path: '/my-account',   element: <MyAccount />},
    {  path: '/my-orders',   element: <MyOrders />},
    {  path: '/my-order',    element: <MyOrder />},
    {  path: '/my-order/last',    element: <MyOrder />},
    {  path: '/my-orders/:id',    element: <MyOrder />},
    {  path: '/not-found',     element: <NotFound />},
    ])

return routes
}

function App() {
  return (
    <>
    <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
      <CheckOutSideMenu/>
    </BrowserRouter>
    </ShoppingCartProvider>
    </>
  )
}

export default App
