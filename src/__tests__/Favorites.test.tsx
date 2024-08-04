import { MESSAGES } from '@constants/favorites';
import { FavoritesProvider } from '@context/FavoritesContext';
import { Favorites } from '@pages/Favorites/Favorites';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Favorites should', () => {
  test('render correctly', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <Favorites />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const headingElement = screen.getByText(MESSAGES.TITLE);
    expect(headingElement).toBeDefined();
  });

  test('display FavoriteCardList section', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <Favorites />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const topicsSection = screen.getByText(MESSAGES.GALLERY_TITLE);
    const moreWorksSection = screen.getByText(MESSAGES.GALLERY_SUBTITLE);

    expect(topicsSection).toBeDefined();
    expect(moreWorksSection).toBeDefined();
  });
});
