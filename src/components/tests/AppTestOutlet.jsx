import React from 'react';
import { useOutletContext } from 'react-router';

function AppTestOutlet() {
  const [error, loading, shopData] = useOutletContext();

  if (error) return <div data-testid="error">Error</div>;
  // load element (can be a skeleton)
  if (loading) return <div data-testid="loading">Loading...</div>;
  if (shopData.length > 1)
    return <div data-testid="shop-data">{shopData.length}</div>;
}

export default AppTestOutlet;
