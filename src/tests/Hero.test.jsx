import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { beforeEach, describe, expect, it } from 'vitest';
import Hero from '../components/Hero';

describe('Hero', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    );
  });

  it('shows hero heading', () => {
    const heroHeading = screen.getByRole('heading', {
      name: /quality products/i,
    });

    expect(heroHeading).toBeInTheDocument();
  });

  it('shows hero supporting text', () => {
    const supportingHeroText = screen.getByText(/everything you need/i);
    expect(supportingHeroText).toBeInTheDocument();
  });

  it('shows shop now link', () => {
    const shopNowLink = screen.getByRole('link', { name: /shop now/i });
    expect(shopNowLink).toBeInTheDocument();
  });

  it('shop now link goes to /shop when clicked', () => {
    const shopNowLink = screen.getByRole('link', { name: /shop now/i });
    expect(shopNowLink).toHaveAttribute('href', '/shop');
  });

  it('shows card display', () => {
    const cardDisplay = screen.getByTestId('card display');
    expect(cardDisplay).toBeInTheDocument();
  });
});
