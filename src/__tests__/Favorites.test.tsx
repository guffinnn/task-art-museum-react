import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { FavoritesProvider } from '@context/FavoritesContext';
import Favorites from '@pages/Favorites/Favorites';

describe('Favorites should', () => {
  test('render correctly', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <Favorites />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const headingElement = screen.getByText(/here are your/i);
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

    const topicsSection = screen.getByText('Your favorites list');
    const moreWorksSection = screen.getByText('Saved by you');

    expect(topicsSection).toBeDefined();
    expect(moreWorksSection).toBeDefined();
  });
});
