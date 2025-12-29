import { createBrowserRouter } from 'react-router';
import App from './App';
import Shop from './components/Shop';
import Home from './components/Home';
import Cart from './components/Cart';

const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

export default routes;
