import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';

function StepperInput() {
  const [value, setValue] = useState(1);

  function increase() {
    if (value === 999) return;
    setValue((value) => value + 1);
  }

  function decrease() {
    if (value === 0) return;
    setValue((value) => value - 1);
  }

  return (
    <div className="ml-auto flex h-6.75 items-center gap-0.5">
      <button
        onClick={increase}
        className="d-btn bg-neutral text-neutral-content h-full border-none p-1"
      >
        <PlusIcon height={15} width={20} />
      </button>
      <input
        type="number"
        value={value}
        className="px-auto no-spinner h-full w-8 rounded border border-zinc-200 text-center text-sm"
      />
      <button
        onClick={decrease}
        className="d-btn bg-neutral text-neutral-content h-full border-none p-1"
      >
        <MinusIcon height={15} width={20} />
      </button>
    </div>
  );
}

export default StepperInput;
