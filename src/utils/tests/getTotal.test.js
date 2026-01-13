import { describe, expect, it } from 'vitest';
import getTotal from '../getTotal';

const cartItems = [
  {
    id: 0,
    quantity: 2,
    price: 30,
  },
  {
    id: 1,
    quantity: 1,
    price: 40,
  },
  {
    id: 2,
    quantity: 3,
    price: 10,
  },
];

describe('sums total of specific object property from array of objects', () => {
  it('sums total price', () => {
    const totalPrice = getTotal(cartItems, 'price');
    expect(totalPrice).toBe(80);
  });

  it('sums total quntity', () => {
    const totalPrice = getTotal(cartItems, 'quantity');
    expect(totalPrice).toBe(6);
  });

  it('returns NaN on invalid property', () => {
    const totalPrice = getTotal(cartItems, 'quanti');
    expect(totalPrice).toBe(NaN);
  });
});
