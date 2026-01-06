import React, { useState } from 'react';
import { ShoppingCartIcon } from 'lucide-react';
import StarRating from './StarRating';
import StepperInput from './StepperInput';

function ProductCard({ category, rating, name, imgSrc, price }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <article className="flex w-56 cursor-pointer flex-col border border-zinc-200 px-3 py-1.5 text-sm outline-blue-700 transition-transform duration-100 ease-linear hover:scale-[1.01] hover:shadow sm:text-base">
      <img src={imgSrc} alt="product image" className="h-45 w-full border" />
      <h4 className="text-xs text-zinc-600">{category}</h4>
      <StarRating rating={rating} />
      <h3 className="py-2 font-semibold">{name}</h3>
      <div className="flex items-center">
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
  );
}

export default ProductCard;
