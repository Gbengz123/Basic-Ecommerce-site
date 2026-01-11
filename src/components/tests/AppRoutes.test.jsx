import { createMemoryRouter, Navigate, RouterProvider } from 'react-router';
import routes from '../../routes';
import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('App routes', () => {
  let router;
  let user;

  beforeEach(() => {
    router = createMemoryRouter(routes, {
      initialEntries: ['/'], // start at homepage
    });

    user = userEvent.setup();

    render(<RouterProvider router={router} />);
  });

  it('renders home page at /', () => {
    const heroHeading = screen.getByRole('heading', {
      name: /quality products/i,
    });
    expect(heroHeading).toBeInTheDocument();
  });

  it('navigates to /shop when Shop link is clicked', async () => {
    const shopLink = screen.getByRole('link', { name: 'Shop' });
    await user.click(shopLink);
    const shopHeading = screen.getByRole('heading', {
      name: /shop/i,
    });

    expect(shopHeading).toBeInTheDocument();
  });

  it('navigates to /cart when Cart link is clicked', async () => {
    const cartLink = screen.getByRole('link', { name: /cart/i });
    await user.click(cartLink);
    const cartHeading = screen.getByRole('heading', {
      name: /cart/i,
    });

    expect(cartHeading).toBeInTheDocument();
  });
});
