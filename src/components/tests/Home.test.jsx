import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from '../Home';
import { useOutletContext } from 'react-router';

/* ------------------ MOCK ROUTER CONTEXT ------------------ */
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

/* ------------------ MOCK CHILD COMPONENTS ------------------ */
vi.mock('../Hero', () => ({
  default: ({ showSkeleton }) => (
    <div data-testid="hero">{showSkeleton ? 'true' : 'false'}</div>
  ),
}));

vi.mock('../ProductsSection', () => ({
  default: ({ showSkeleton, shopData, cartItems }) => (
    <div data-testid="products">
      skeleton:{showSkeleton ? 'true' : 'false'} | products:{shopData.length} | cart:
      {cartItems.length}
    </div>
  ),
}));

vi.mock('../CategoriesSection', () => ({
  default: ({ showSkeleton }) => (
    <div data-testid="categories">{showSkeleton ? 'true' : 'false'}</div>
  ),
}));

/* ------------------ TESTS ------------------ */
describe('Home', () => {
  it('renders Home component', () => {
    useOutletContext.mockReturnValue([null, false, [], []]);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('home')).toBeInTheDocument();
  });

  it('passes showSkeleton=true when loading is true', () => {
    useOutletContext.mockReturnValue([null, true, [], []]);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('hero')).toHaveTextContent('true');
    expect(screen.getByTestId('products')).toHaveTextContent('skeleton:true');
    expect(screen.getByTestId('categories')).toHaveTextContent('true');
  });

  it('passes showSkeleton=true when error exists', () => {
    useOutletContext.mockReturnValue([{ message: 'error' }, false, [], []]);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('hero')).toHaveTextContent('true');
    expect(screen.getByTestId('categories')).toHaveTextContent('true');
  });

  it('passes showSkeleton=false when not loading and no error', () => {
    useOutletContext.mockReturnValue([
      null,
      false,
      [{ id: 1 }, { id: 2 }],
      [{ id: 'cart1' }],
    ]);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('hero')).toHaveTextContent('false');
    expect(screen.getByTestId('products')).toHaveTextContent('products:2');
    expect(screen.getByTestId('products')).toHaveTextContent('cart:1');
    expect(screen.getByTestId('categories')).toHaveTextContent('false');
  });
});
