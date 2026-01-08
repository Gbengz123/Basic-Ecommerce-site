import App from './App';
import Shop from './components/Shop';
import Home from './components/Home';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import Product from './components/Product';

const routes = [
  {
    element: <App />,
    children: [
      { path: '/', element: <Home />, errorElement: <ErrorPage /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
      { path: '/product/:id', element: <Product /> },
    ],
  },
];

export default routes;
