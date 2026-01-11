import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getByTestId, render, screen } from '@testing-library/react';
import { MemoryRouter, Outlet } from 'react-router';
import * as router from 'react-router'; // import all exports
import Home from '../Home';

// Mock useOutletContext
vi.spyOn(router, 'useOutletContext').mockReturnValue([
  false, // error
  true, // loading
  [], // shopData
  [], // cartItems
]);

describe('Home', () => {
  it('show home page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    screen.debug();

    const home = screen.getByTestId('home');
    expect(home).toBeInTheDocument();
  });
});
