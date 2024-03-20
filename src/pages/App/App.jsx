import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from "../../context/Context";
import { Home } from '../Home/Home';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import { SignIn } from '../SignIn/SignIn';
import { Navbar } from "../../components/Navbar/Navbar";


import './App.css';
import { CheckoutSideMenu } from '../../components/CheckoutSideMenu/CheckoutSideMenu';

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/my-account',
      element: <MyAccount/>
    },
    {
      path: '/my-order',
      element: <MyOrder/>
    },
    {
      path: '/my-orders',
      element: <MyOrders/>
    },
    {
      path: '/sign-in',
      element: <SignIn/>
    },
    {
      path: '/checkout',
      element: <CheckoutSideMenu/>
    },
    {
      path: '/*',
      element: <NotFound/>
    },
  ])

  return routes;
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>

  )
}

export default App
