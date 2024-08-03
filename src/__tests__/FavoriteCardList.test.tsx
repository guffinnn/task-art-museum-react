import { FavoritesProvider } from '@context/FavoritesContext';
import FavoriteCardList from '@pages/Favorites/FavoriteCardList/FavoriteCardList';
import { render, screen } from '@testing-library/react';

test('Should render FavoriteCardList', () => {
  render(
    <FavoritesProvider>
      <FavoriteCardList />
    </FavoritesProvider>,
  );

  const loadingElement = screen.getByText('No favorites yet.');
  expect(loadingElement).toBeDefined();
});
