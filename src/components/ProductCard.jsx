import React, { useState } from 'react';
import { ShoppingCartIcon } from 'lucide-react';
import StarRating from './StarRating';
import StepperInput from './StepperInput';
import { Skeleton } from './ui/skeleton';

function ProductCardSkeleton() {
  return (
    <div className="border-base-200 flex flex-col gap-2 border px-3 py-1.5">
      <Skeleton className="h-45 w-full" />
      <Skeleton className="h-5 w-25" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-full" />
    </div>
  );
}

function ProductCard({
  category,
  rating,
  name,
  imgSrc,
  price,
  showSkeleton,
  ratingCount,
}) {
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      {!showSkeleton ? (
        <article className="xs:h-84.25 flex h-69.25 cursor-pointer flex-col border border-zinc-200 px-3 py-1.5 text-sm transition-transform duration-100 ease-linear hover:scale-[1.01] hover:shadow sm:text-base">
          <img
            src={imgSrc}
            alt="product image"
            className="xs:h-45 h-30 w-full"
          />
          <h4 className="mt-2 text-xs text-zinc-600">{category}</h4>
          <div className="flex items-center gap-1">
            <StarRating rating={rating} />
            <span className="text-xs">{`(${ratingCount})`}</span>
          </div>
          <h3 className="my-3 line-clamp-2">{name}</h3>
          <div className="mt-auto flex items-center">
            <p className="font-semibold">${price}</p>
            {quantity >= 1 ? (
              <StepperInput />
            ) : (
              <button
                aria-label="add to cart"
                className="d-btn bg-neutral text-neutral-content ml-auto flex h-fit items-center gap-1 border-none px-2 py-1"
                onClick={() => setQuantity((quantity) => quantity + 1)}
              >
                <span>Add</span>
                <ShoppingCartIcon height={20} />
              </button>
            )}
          </div>
        </article>
      ) : (
        <ProductCardSkeleton />
      )}
    </>
  );
}

export default ProductCard;
