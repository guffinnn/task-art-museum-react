import { MESSAGES } from '@constants/values';
import { FavoritesProvider } from '@context/FavoritesContext';
import { FavoriteCardList } from '@pages/Favorites/FavoriteCardList/FavoriteCardList';
import { render, screen } from '@testing-library/react';

test('Should render FavoriteCardList', () => {
  render(
    <FavoritesProvider>
      <FavoriteCardList />
    </FavoritesProvider>,
  );

  const loadingElement = screen.getByText(MESSAGES.NO_FAVORITES);
  expect(loadingElement).toBeDefined();
});
