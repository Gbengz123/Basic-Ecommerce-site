import React from 'react';
import { useParams, useOutletContext } from 'react-router';
import { Skeleton } from './ui/skeleton';
import ProductInfo from './ProductInfo';
import ShopCategorySection from './ShopCategorySection';
import ScrollToTop from './ScrollToTop';

function Product() {
  const [
    error,
    loading,
    shopData,
    cartItems,
    handleItemAdd,
    setCartItems,
    handleRemoveItem,
  ] = useOutletContext();
  const showSkeleton = loading || error;
  const { id } = useParams();

  const product = shopData.find((product) => product.id === Number(id));
  const productCategory = shopData.filter((p) => {
    if (p.title === product.title) return;
    return p.category === product.category;
  });
  return (
    <div className="page-padding flex flex-col gap-5 pt-4">
      <ScrollToTop />
      <div className="flex flex-col items-center gap-2 md:flex-row">
        {!showSkeleton ? (
          <img
            src={product.image}
            alt={product.title}
            className="border-base-200 xs:min-w-80 h-100 max-w-120 min-w-full border"
          />
        ) : (
          <Skeleton className="h-100 w-125" />
        )}
        <ProductInfo
          showSkeleton={showSkeleton}
          product={product}
          cartItems={cartItems}
          handleItemAdd={handleItemAdd}
          setCartItems={setCartItems}
          handleRemoveItem={handleRemoveItem}
        />
      </div>
      {product ? (
        <ShopCategorySection
          name={`More in ${product.category}`}
          products={productCategory}
        />
      ) : (
        <ShopCategorySection
          products={productCategory}
          showSkeleton={showSkeleton}
        />
      )}
    </div>
  );
}

export default Product;
