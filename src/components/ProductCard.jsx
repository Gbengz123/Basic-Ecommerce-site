import React from 'react';
import { ShoppingCartIcon } from 'lucide-react';
import StarRating from './StarRating';
import StepperInput from './StepperInput';

function ProductCard() {
  return (
    <article className="flex w-56 cursor-pointer flex-col border border-zinc-200 px-3 py-1.5 transition-transform duration-100 ease-linear hover:scale-[1.01] hover:shadow">
      <img src="" alt="product image" className="h-45 w-full border" />
      <h4 className="text-[13px]">Category</h4>
      <StarRating rating={4.6} />
      <h3 className="py-2 font-semibold">Gaming mouse</h3>
      <div className="flex items-center">
        <p className="font-semibold">$100</p>
        <button
          aria-label="add to cart"
          className="d-btn bg-neutral text-neutral-content ml-auto flex h-fit items-center gap-1 border-none px-2 py-1"
        >
          <span>Add</span>
          <ShoppingCartIcon height={20} />
        </button>
        {/* <StepperInput /> */}
      </div>
    </article>
  );
}

export default ProductCard;
