import { expect, it } from 'vitest';
import addTocart from '../addToCart';

const product1 = {
  category: "men's clothing",
  title: 'shirt',
};

const product2 = {
  category: "men's clothing",
  title: 'shirt',
};

it('adds item to cart state list', () => {
  addTocart(product1);

  expect
});
