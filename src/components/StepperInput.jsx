import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';

function StepperInput({
  cartProduct,
  handleItemAdd,
  setCartItems,
  handleRemoveItem,
}) {
  function handleIncrease() {
    handleItemAdd(cartProduct);
  }

  function handleChange(e) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === cartProduct.id
          ? {
              ...item,
              quantity: Math.max(1, Number(e.target.value) || 1),
            }
          : item,
      ),
    );
  }

  function handleDecrease() {
    handleRemoveItem(cartProduct);
  }

  return (
    <div className="flex h-6.75 items-center gap-0.5">
      <button
        onClick={handleIncrease}
        className="d-btn bg-neutral text-neutral-content h-full border-none p-1"
      >
        <PlusIcon height={15} width={20} />
      </button>
      <input
        type="number"
        min={'1'}
        value={cartProduct.quantity}
        className="px-auto no-spinner h-full w-8 rounded border border-zinc-200 text-center text-sm"
        onChange={(e) => handleChange(e)}
      />
      <button
        onClick={handleDecrease}
        className="d-btn bg-neutral text-neutral-content h-full border-none p-1"
      >
        <MinusIcon height={15} width={20} />
      </button>
    </div>
  );
}

export default StepperInput;
