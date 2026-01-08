import App from './App';
import Shop from './components/Shop';
import Home from './components/Home';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';

const routes = [
  {
    element: <App />,
    children: [
      { path: '/', element: <Home />, errorElement: <ErrorPage /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
      { path: '/product', element: <Product /> },
    ],
  },
];

export default routes;
