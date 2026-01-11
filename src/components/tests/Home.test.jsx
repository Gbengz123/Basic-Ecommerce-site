import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from '../Home';

describe('Home', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
  });

  it('shows hero section', () => {
    const heroHeading = screen.getByRole('heading', {
      name: /quality products/i,
    });
    expect(heroHeading).toBeInTheDocument();
  });

  it('shows popular products heading', () => {
    const popularProductsHeading = screen.getByRole('heading', {
      name: /popular products/i,
    });
    expect(popularProductsHeading).toBeInTheDocument();
  });

  it('shows carousel slides', () => {
    const couraselSlides = screen.getAllByRole('group');
    expect(couraselSlides.length).toBe(10);
  });

  it('shows categories heading', () => {
    const categoriesHeading = screen.getByRole('heading', {
      name: /categories/i,
    });
    expect(categoriesHeading).toBeInTheDocument();
  });

  describe('shows category links', () => {
    it('shows mens clothing link', () => {
      const mensClothingLink = screen.getByRole('link', {
        name: /mens clothing/i,
      });
      expect(mensClothingLink).toBeInTheDocument();
    });

    it('shows jewelry clothing link', () => {
      const jewelryLink = screen.getByRole('link', {
        name: /jewelry/i,
      });
      expect(jewelryLink).toBeInTheDocument();
    });

    it('shows electronics link', () => {
      const electronicsLink = screen.getByRole('link', {
        name: /electronics/i,
      });
      expect(electronicsLink).toBeInTheDocument();
    });

    it('shows womens clothing link', () => {
      const womensClothingLink = screen.getByRole('link', {
        name: /womens clothing/i,
      });
      expect(womensClothingLink).toBeInTheDocument();
    });
  });
});
