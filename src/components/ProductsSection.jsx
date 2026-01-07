import React from 'react';
import ProductCard from './ProductCard';
import ProductsCarousel from './ProductsCourasel';

function ProductsSection({ showSkeleton, shopData }) {
  const products = shopData.filter((_, index) => index % 2 === 0).slice(0, 10);

  return (
    <section className="page-padding flex flex-col gap-2 sm:py-4">
      <h2 className="text-xl font-bold">Popular products</h2>
      {!showSkeleton ? (
        <ProductsCarousel products={products} />
      ) : (
        <div className="flex flex-wrap gap-5">
          {Array.from({ length: 4 }, (_, i) => i).map((index) => {
            return <ProductCard key={index} showSkeleton={showSkeleton} />;
          })}
        </div>
      )}
    </section>
  );
}

export default ProductsSection;
