import { ShoppingCartIcon } from 'lucide-react';
import StarRating from './StarRating';
import StepperInput from './StepperInput';
import { Skeleton } from './ui/skeleton';
import { Link } from 'react-router';

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
  product,
  showSkeleton,
  cartItems,
  handleItemAdd,
  setCartItems,
  handleRemoveItem,
  disabled,
}) {
  const cartProduct = cartItems.find((item) => item.id === product.id);

  return (
    <>
      {!showSkeleton ? (
        <Link
          to={`/product/${product.id}`}
          aria-label="product"
          className="xs:h-84.25 flex h-69.25 cursor-pointer flex-col border border-zinc-200 px-3 py-1.5 text-sm transition-transform duration-100 ease-linear hover:scale-[1.01] hover:shadow sm:text-base"
        >
          <img
            src={product.image}
            alt="product image"
            className="xs:h-45 h-30 w-full"
          />
          <h4 className="mt-2 text-xs text-zinc-600">{product.category}</h4>
          <div className="flex items-center gap-1">
            <StarRating rating={product.rating.rate} />
            <span className="text-xs">{`(${product.rating.count})`}</span>
          </div>
          <h3 className="my-3 line-clamp-2">{product.title}</h3>
          <div className="mt-auto flex items-center">
            <p className="font-semibold">${product.price}</p>
            {cartProduct && !disabled ? (
              <StepperInput
                cartProduct={cartProduct}
                handleItemAdd={handleItemAdd}
                setCartItems={setCartItems}
                handleRemoveItem={handleRemoveItem}
                className={'ml-auto'}
              />
            ) : (
              <button
                aria-label="add to cart"
                className="d-btn bg-neutral text-neutral-content ml-auto flex h-fit items-center gap-1 border-none px-2 py-1"
                disabled={disabled}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleItemAdd(product);
                }}
              >
                <span>Add</span>
                <ShoppingCartIcon height={20} />
              </button>
            )}
          </div>
        </Link>
      ) : (
        <ProductCardSkeleton />
      )}
    </>
  );
}

export default ProductCard;
