import spearateCategories from '../separateCategories';
import { expect, it } from 'vitest';

const shopData = [
  {
    category: "men's clothing",
    title: 'shirt',
  },
  {
    category: "men's clothing",
    title: 'shirt2',
  },
  {
    category: "women's clothing",
    title: 'woman shirt',
  },
  {
    category: "women's clothing",
    title: 'woman shirt2',
  },
  {
    category: 'electronics',
    title: 'monitor',
  },
];

it('spearate products into category lists', () => {
  const { mensClothing, womensClothing, electronics } =
    spearateCategories(shopData);

  expect(mensClothing).toEqual([
    {
      category: "men's clothing",
      title: 'shirt',
    },
    {
      category: "men's clothing",
      title: 'shirt2',
    },
  ]);

  expect(womensClothing).toEqual([
    {
      category: "women's clothing",
      title: 'woman shirt',
    },
    {
      category: "women's clothing",
      title: 'woman shirt2',
    },
  ]);

  expect(electronics).toEqual([
    {
      category: 'electronics',
      title: 'monitor',
    },
  ]);
});
