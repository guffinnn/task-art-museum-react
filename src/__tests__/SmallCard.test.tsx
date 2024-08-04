import { SmallCard } from '@components/cards/SmallCard/SmallCard';
import { ARTWORK_EXAMPLE } from '@constants/testValues';
import { DEFAULT_TEXT } from '@constants/values';
import { useFavorites } from '@context/FavoritesContext';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('@context/FavoritesContext', () => ({
  useFavorites: jest.fn(),
}));

const mockToggleFavorite = jest.fn();
const mockFavorites = [{ ...ARTWORK_EXAMPLE }];

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
        <SmallCard item={ARTWORK_EXAMPLE} />
      </MemoryRouter>,
    );

    expect(screen.getByText(ARTWORK_EXAMPLE.title)).toBeDefined();
    expect(screen.getByText(ARTWORK_EXAMPLE.artistTitle)).toBeDefined();
    expect(screen.getByText(DEFAULT_TEXT.PUBLIC)).toBeDefined();
  });

  test('display favorite status correctly', () => {
    render(
      <MemoryRouter>
        <SmallCard item={ARTWORK_EXAMPLE} />
      </MemoryRouter>,
    );

    const favoriteButton = screen.getByTestId('fav-button');
    expect(favoriteButton.className).toMatch(/--favorite/i);
  });

  test('call toggleFavorite on button click', () => {
    render(
      <MemoryRouter>
        <SmallCard item={ARTWORK_EXAMPLE} />
      </MemoryRouter>,
    );

    const favoriteButton = screen.getByTestId('fav-button');
    fireEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalled();

    const lastCallArgs =
      mockToggleFavorite.mock.calls[mockToggleFavorite.mock.calls.length - 1];
    expect(lastCallArgs[0]).toEqual(ARTWORK_EXAMPLE);
  });
});
