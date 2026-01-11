import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';
import { MemoryRouter } from 'react-router';

let homeLink;
let shopLink;
let cartLink;
let cartItems = [{ quantity: 2 }, { quantity: 1 }];

describe('navbar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar cartItems={cartItems} />
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

  it('shows total items in indicator', () => {
    const indicator = screen.getByTestId('cart-indicator');
    expect(indicator.textContent).toBe('3');
  });
});
