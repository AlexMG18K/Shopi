import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context/Index'
import Home from '../Home/Index'
import MyAccount from '../MyAccount/Index'
import MyOrders from '../MyOrderss/Index'
import MyOrdess from '../MyOrderss/Index'
import NotFound from '../NotFound/Index'
import SigIn from '../Sigin/Index'
import NavBar from '../../Components/Navbar'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
import './index.css'

const AppRoutes = () => {
  let routes = useRoutes ([
    {  path: '/',   element: <Home />},
    {  path: '/my-account',   element: <MyAccount />},
    {  path: '/my-orderss',   element: <MyOrdess />},
    {  path: '/my-orders',    element: <MyOrders />},
    {  path: '/my-orders/last',    element: <MyOrders />},
    {  path: '/not-found',     element: <NotFound />},
    {  path: '/sign-in',        element: <SigIn/>},
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
