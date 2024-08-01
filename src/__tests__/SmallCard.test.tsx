import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import SmallCard from '@components/SmallCard/SmallCard';
import { ArtInfo } from '@constants/api';
import { useFavorites } from '@context/FavoritesContext';

jest.mock('@context/FavoritesContext', () => ({
  useFavorites: jest.fn(),
}));

const mockItem: ArtInfo = {
  id: 1,
  title: 'Art A',
  artist_title: 'Artist A',
  is_public_domain: true,
  date_start: 2020,
  date_end: 2023,
  place_of_origin: 'Place A',
  dimensions: '10x10',
  credit_line: 'Credit A',
  image_id: 'image1',
  theme_titles: [],
};

const mockToggleFavorite = jest.fn();
const mockFavorites = [{ ...mockItem }];

describe('SmallCard should', () => {
  beforeEach(() => {
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: mockFavorites,
      toggleFavorite: mockToggleFavorite,
    });
  });

  test('render SmallCard with data', () => {
    render(
      <MemoryRouter>
        <SmallCard item={mockItem}>
          <></>
        </SmallCard>
      </MemoryRouter>,
    );

    expect(screen.getByText('Art A')).toBeDefined();
    expect(screen.getByText('Artist A')).toBeDefined();
    expect(screen.getByText('Public')).toBeDefined();
  });

  test('display favorite status correctly', () => {
    render(
      <MemoryRouter>
        <SmallCard item={mockItem}>
          <></>
        </SmallCard>
      </MemoryRouter>,
    );

    const favoriteButton = screen.getByTestId('fav-button');
    expect(favoriteButton.className).toMatch(/--favorite/i);
  });

  test('call toggleFavorite on button click', () => {
    render(
      <MemoryRouter>
        <SmallCard item={mockItem}>
          <></>
        </SmallCard>
      </MemoryRouter>,
    );

    const favoriteButton = screen.getByTestId('fav-button');
    fireEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalled();

    const lastCallArgs =
      mockToggleFavorite.mock.calls[mockToggleFavorite.mock.calls.length - 1];
    expect(lastCallArgs[0]).toEqual(mockItem);
  });
});
