import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import { MemoryRouter, Routes, Route } from 'react-router';
import AppTestOutlet from './AppTestOutlet';

vi.mock('../Notification', () => ({
  default: ({ message }) => (
    <div data-testid="notification">{message ? 'error' : 'ok'}</div>
  ),
}));

vi.mock('../NavBar', () => ({
  default: ({ cartItems }) => (
    <div data-testid="navbar">cart:{cartItems.length}</div>
  ),
}));

describe('App', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve([
            { id: 0, title: 'product1' },
            { id: 1, title: 'product2' },
          ]),
      }),
    );
  });
  // restores all mocks after each test (e.g fetch becomes a normal fetch again after each test)
  afterEach(() => {
    vi.resetAllMocks();
  });

  // This is testing the behaviour of getShopData inside our useEffect
  describe('shows load element and shop data element', () => {
    beforeEach(() => {
      // render app and testoutlet inside the outlet of app
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<AppTestOutlet />}></Route>
            </Route>
          </Routes>
        </MemoryRouter>,
      );
    });

    it('shows load element initially on screen', () => {
      expect(screen.getByTestId('loading')).toBeInTheDocument();
    });

    it('shows shop data elements', async () => {
      const shopData = await screen.findByTestId('shop-data');
      expect(shopData.textContent).toBe('2');
    });
  });

  it('shows error element', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
      }),
    );

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<AppTestOutlet />}></Route>
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const error = await screen.findByTestId('error');
    expect(error).toBeInTheDocument();
  });

  it('shows navbar component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<AppTestOutlet />}></Route>
          </Route>
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    // NavBar receives cartItems
    expect(screen.getByTestId('navbar')).toHaveTextContent('cart:0');
  });

  it('shows notification component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<AppTestOutlet />}></Route>
          </Route>
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByTestId('notification')).toBeInTheDocument();
    // Notification shows no error
    expect(screen.getByTestId('notification')).toHaveTextContent('ok');
  });
});
