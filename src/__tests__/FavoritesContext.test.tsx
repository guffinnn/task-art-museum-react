import { act, render, screen } from '@testing-library/react';
import React from 'react';

import { ArtInfo } from '../constants/api';
import { FavoritesProvider, useFavorites } from '../context/FavoritesContext';

const TestComponent = () => {
  const { favorites, toggleFavorite } = useFavorites();
  return (
    <div>
      <button
        onClick={() => toggleFavorite({ id: '1', title: 'Art 1' } as ArtInfo)}
      >
        Toggle Favorite
      </button>
      <div data-testid="favorites-count">{favorites.length}</div>
    </div>
  );
};

describe('FavoritesContext should', () => {
  test('provide favorites and toggleFavorite function', () => {
    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>,
    );

    const button = screen.getByText('Toggle Favorite');
    const favoritesCount = screen.getByTestId('favorites-count');

    expect(favoritesCount.textContent).toBe('0');

    act(() => {
      button.click();
    });
    expect(favoritesCount.textContent).toBe('1');

    act(() => {
      button.click();
    });
    expect(favoritesCount.textContent).toBe('0');
  });

  test('persist favorites in localStorage', () => {
    const { getByText, getByTestId } = render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>,
    );

    const button = getByText('Toggle Favorite');
    const favoritesCount = getByTestId('favorites-count');

    act(() => {
      button.click();
    });
    expect(favoritesCount.textContent).toBe('1');

    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>,
    );

    expect(favoritesCount.textContent).toBe('1');
  });
});
