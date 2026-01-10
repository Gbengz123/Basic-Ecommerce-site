import React, { useState } from 'react';
import bitcoin from '../assets/images/bitcoin.png';
import paypal from '../assets/images/paypal.png';
import stripe from '../assets/images/stripe.png';
import card from '../assets/images/card.png';

function PaymentMethodSection() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const paymentMethods = [
    { id: 'paypal', label: 'PayPal', icon: paypal },
    { id: 'stripe', label: 'Stripe', icon: stripe },
    { id: 'mastercard', label: 'Mastercard', icon: card },
    { id: 'bitcoin', label: 'Bitcoin', icon: bitcoin },
  ];

  return (
    <div className="min-w-60 flex-1 border border-zinc-200 p-3 sm:max-w-120 md:flex-initial">
      <fieldset>
        <legend className="w-full border-b border-b-zinc-200 pb-3 text-lg font-bold">
          Payment Method
        </legend>
        <div role="radiogroup" className="mt-5 grid grid-cols-4 gap-3">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className={`flex h-11 cursor-pointer items-center justify-center rounded-lg border transition ${
                paymentMethod === method.id
                  ? 'border-blue-600 ring-1 ring-blue-600'
                  : 'border-zinc-200 hover:border-zinc-300'
              } `}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={paymentMethod === method.id}
                onChange={() => setPaymentMethod(method.id)}
                className="sr-only"
              />
              <img src={method.icon} alt={method.label} className="h-7" />
            </label>
          ))}
        </div>
      </fieldset>
      <button className="bg-neutral text-neutral-content d-btn mt-4 w-full rounded-xl">
        Check Out
      </button>
    </div>
  );
}

export default PaymentMethodSection;
