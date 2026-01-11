import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import { createMemoryRouter, RouterProvider } from 'react-router';

describe('App', () => {
  beforeEach(() => {
    const router = createMemoryRouter(
      [
        {
          element: <App />,
          children: [{ path: '/', element: <div>Home page</div> }],
        },
      ],
      {
        initialEntries: ['/'],
      },
    );

    render(<RouterProvider router={router} />);
  });

  it('shows the navigation bar', () => {
    const navigationBar = screen.getByRole('navigation');
    expect(navigationBar).toBeInTheDocument();
  });

  it('renders Outlet content', () => {
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
});
