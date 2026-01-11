import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';
import { MemoryRouter } from 'react-router';

let homeLink;
let shopLink;
let cartLink;

describe('navbar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );

    homeLink = screen.getByRole('link', { name: 'Home' });
    shopLink = screen.getByRole('link', { name: 'Shop' });
    cartLink = screen.getByRole('link', { name: /cart/i });
  });

  it('renders navigation links', () => {
    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(cartLink).toBeInTheDocument();
  });

  describe('links go to correct routes', () => {
    it('home link goes to /', () => {
      expect(homeLink).toHaveAttribute('href', '/');
    });

    it('shop link goes to /shop', () => {
      expect(shopLink).toHaveAttribute('href', '/shop');
    });

    it('cart link goes to /cart', () => {
      expect(cartLink).toHaveAttribute('href', '/cart');
    });
  });
});
