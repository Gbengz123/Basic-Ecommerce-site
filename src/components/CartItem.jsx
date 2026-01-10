import React from 'react';
import StepperInput from './StepperInput';
import { Trash2Icon } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import { Link } from 'react-router';

function CartItemSkeleton() {
  return <Skeleton className={'h-40 w-40'} />;
}

function CartItem({
  cartItem,
  handleItemAdd,
  setCartItems,
  handleRemoveItem,
  showSkeleton,
}) {
  return (
    <>
      {!showSkeleton ? (
        <div className="relative flex max-w-203.5 flex-col items-start gap-3 border border-zinc-200 p-4 sm:static sm:flex-row sm:items-center">
          <div className="flex w-[clamp(11.375rem,100%,33.75rem)] min-w-45.5 items-center gap-2">
            <Link to={`/product/${cartItem.id}`}>
              <img
                className="h-20 min-w-23"
                src={cartItem.image}
                alt={cartItem.title}
              />
            </Link>
            <h4 className="line-clamp-2">{cartItem.title}</h4>
          </div>
          <div className="flex gap-3">
            <StepperInput
              cartProduct={cartItem}
              handleItemAdd={handleItemAdd}
              setCartItems={setCartItems}
              handleRemoveItem={handleRemoveItem}
            />
            <p className="min-w-25 text-center text-lg font-bold">
              ${cartItem.price}
            </p>
          </div>
          <Trash2Icon
            className="absolute top-1 right-1 w-5.25 min-w-5 cursor-pointer text-zinc-600 transition hover:text-red-600 sm:static"
            onClick={() => handleRemoveItem(cartItem, true)}
          />
        </div>
      ) : (
        <CartItemSkeleton />
      )}
    </>
  );
}

export default CartItem;
