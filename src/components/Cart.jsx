import { useOutletContext } from 'react-router';
import CartItem from './CartItem';
import { Link } from 'react-router';
import OrderSummarySection from './OrderSummarySection';
import PaymentMethodSection from './PaymentMethodSection';

function Cart() {
  const [
    error,
    loading,
    _,
    cartItems,
    handleItemAdd,
    setCartItems,
    handleRemoveItem,
  ] = useOutletContext();

  const showSkeleton = loading || error;

  return (
    <div className="page-padding flex">
      <div className="w-full">
        <h2 className="mt-8 border-b border-zinc-200 pb-3 text-3xl font-bold">
          Cart
        </h2>
        {cartItems.length >= 1 ? (
          <div className="mt-5 flex flex-col gap-4 md:flex-row">
            <section className="flex max-h-[75vh] w-fit flex-col gap-5 overflow-y-scroll">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  cartItem={item}
                  handleItemAdd={handleItemAdd}
                  setCartItems={setCartItems}
                  handleRemoveItem={handleRemoveItem}
                  showSkeleton={showSkeleton}
                />
              ))}
            </section>
            <div className="flex grow flex-col gap-4">
              <OrderSummarySection cartItems={cartItems} />
              <PaymentMethodSection />
            </div>
          </div>
        ) : (
          <div className="mt-5 flex flex-col items-center gap-1 text-2xl">
            <p className="font-bold">No Items currently in cart</p>
            <p>Add some beautifull items from the shop </p>
            <Link
              to="/shop"
              className="d-btn bg-neutral text-neutral-content flex w-fit items-center gap-1 border-none px-5 py-2 text-lg"
            >
              Shop
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
