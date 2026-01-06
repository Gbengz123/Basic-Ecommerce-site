import './App.css';
import { Navigate, Outlet } from 'react-router';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';

function App() {
  const [shopData, setShopData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  console.log(shopData);
  return (
    <>
      <div className="flex min-h-screen min-w-screen flex-col">
        <NavBar />
        <main className="flex grow flex-col">
          <Outlet context={[error, loading, shopData]} />
        </main>
      </div>
    </>
  );
}

export default App;
