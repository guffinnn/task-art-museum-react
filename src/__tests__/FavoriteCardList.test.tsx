import { render, screen } from '@testing-library/react';
import { FavoritesProvider } from '../context/FavoritesContext';
import FavoriteCardList from '../components/FavoriteCardList/FavoriteCardList';

test('Should render FavoriteCardList', () => {
  render(
    <FavoritesProvider>
      <FavoriteCardList />
    </FavoritesProvider>,
  );

  const loadingElement = screen.getByText('No favorites yet.');
  expect(loadingElement).toBeDefined();
});
