import React from 'react';
import { Skeleton } from './ui/skeleton';
import StarRating from './StarRating';
import { ShoppingCartIcon } from 'lucide-react';

function ProductInfoSkeleton() {
  return (
    <div className="border-base-200 flex flex-col gap-2 border p-3">
      <Skeleton className="h-15 w-full" />
      <Skeleton className="h-8 w-90" />
      <Skeleton className="h-10 w-70" />
      <Skeleton className="h-8 w-30" />
    </div>
  );
}

function ProductInfo({ showSkeleton, product }) {
  return (
    <div className="">
      {!showSkeleton ? (
        <section className="flex flex-col gap-4 px-5">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="flex items-center gap-2">
            <span className="text-sm">{`${product.rating.count}+ sold`}</span>
            <StarRating rating={product.rating.rate} size={25} />
            <span className="text-sm">{`(${product.rating.rate})`}</span>
          </div>
          <p className="text-2xl font-bold">${product.price}</p>
          <section className="flex flex-col gap-1">
            <h2 className="text-lg font-bold">Description</h2>
            <p className="line-clamp-13">{product.description}</p>
          </section>
          <button
            aria-label="add to cart"
            className="d-btn bg-neutral text-neutral-content flex h-fit w-35 items-center gap-1 border-none px-2 py-2"
          >
            <span>Add to cart</span>
            <ShoppingCartIcon height={20} />
          </button>
        </section>
      ) : (
        <ProductInfoSkeleton />
      )}
    </div>
  );
}

export default ProductInfo;
