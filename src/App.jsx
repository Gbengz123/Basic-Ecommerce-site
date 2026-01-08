import './App.css';
import { Navigate, Outlet } from 'react-router';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';

function App() {
  const [shopData, setShopData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getShopData = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const products = await res.json();
        setShopData(products);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getShopData();
  }, []);

  function handleItemAdd(product) {
    setCartItems((prevcItems) => {
      // Check for cart Item
      const cartItem = prevcItems.find((item) => item.id === product.id);

      if (cartItem) {
        // Update cart Item quantity
        return prevcItems.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      // Add to product cart
      return [...prevcItems, { ...product, quantity: 1 }];
    });
  }

  function handleRemoveItem(cartProduct, remove = true) {
    setCartItems((prevcItems) => {
      //Removes item from cart
      if (cartProduct.quantity === 1 && remove) {
        return prevcItems.filter((item) => item.id !== cartProduct.id);
      }

      //Reduces quantity
      return prevcItems.map((item) =>
        cartProduct.id === item.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
    });
  }

  return (
    <>
      <div className="flex min-h-screen min-w-screen flex-col">
        <NavBar cartItems={cartItems} />
        <main className="flex grow flex-col">
          <Outlet
            context={[
              error,
              loading,
              shopData,
              cartItems,
              handleItemAdd,
              setCartItems,
              handleRemoveItem,
            ]}
          />
        </main>
      </div>
    </>
  );
}

export default App;
