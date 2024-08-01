import FavoriteCardList from '@components/FavoriteCardList/FavoriteCardList';
import { FavoritesProvider } from '@context/FavoritesContext';
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
