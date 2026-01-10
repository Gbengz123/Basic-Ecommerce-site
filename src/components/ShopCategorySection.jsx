import React from 'react';
import ProductCard from './ProductCard';

function ShopCategorySection({
  name,
  products,
  showSkeleton,
  cartItems,
  handleItemAdd,
  setCartItems,
  handleRemoveItem,
}) {
  return (
    <>
      <section className="">
        <h2 className="mb-3 text-xl font-bold">{name}</h2>
        <div
          className={`grid grid-cols-[repeat(2,1fr)] gap-3 overflow-x-auto p-1 md:grid-cols-[repeat(4,minmax(200px,250px))] xl:grid-cols-[repeat(auto-fit,minmax(200px,250px))]`}
        >
          {!showSkeleton ? (
            <>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  cartItems={cartItems}
                  handleItemAdd={handleItemAdd}
                  setCartItems={setCartItems}
                  handleRemoveItem={handleRemoveItem}
                />
              ))}
            </>
          ) : (
            <>
              {Array.from({ length: 4 }, (_, i) => i).map((index) => {
                return (
                  <ProductCard
                    key={index}
                    showSkeleton={showSkeleton}
                    cartItems={cartItems}
                  />
                );
              })}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default ShopCategorySection;
