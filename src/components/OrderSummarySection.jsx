import React from 'react';

function OrderSummarySection({ cartItems }) {
  const delivery = 29.99;
  const tax = 39.99;
  const total =
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0) +
    delivery +
    tax;

  return (
    <div className="min-w-60 flex-1 border border-zinc-200 p-3 sm:max-w-120 md:flex-initial">
      <h4 className="border-b border-b-zinc-200 pb-3 text-lg font-bold">
        Order Summary
      </h4>
      <div className="mt-5 flex flex-col gap-3 text-xs">
        <div className="flex">
          <h5 className="text-zinc-400">Discount</h5>
          <span className="ml-auto">$00.00</span>
        </div>
        <div className="flex">
          <h5 className="text-zinc-400">Delivery</h5>
          <span className="ml-auto">${delivery}</span>
        </div>
        <div className="flex">
          <h5 className="text-zinc-400">Tax</h5>
          <span className="ml-auto">${tax}</span>
        </div>
        <div className="flex items-center">
          <h5 className="text-zinc-400">Total</h5>
          <span className="ml-auto text-lg">
            ${Math.round(total * 100) / 100}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummarySection;
