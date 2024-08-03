import { DEFAULT_TEXT, MESSAGES } from '@constants/values';
import { useFavorites } from '@context/FavoritesContext';
import { Art } from '@pages/Art/Art';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { ARTWORK_EXAMPLE } from './index';

jest.mock('@context/FavoritesContext', () => ({
  useFavorites: jest.fn(),
}));

global.fetch = jest.fn();

describe('Art should', () => {
  beforeEach(() => {
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [ARTWORK_EXAMPLE],
      toggleFavorite: jest.fn(),
    });

    (fetch as jest.Mock).mockImplementation((url) => {
      if (url.includes('artwork')) {
        return Promise.resolve({
          json: () => Promise.resolve({ data: ARTWORK_EXAMPLE }),
        });
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('render loading state initially', () => {
    render(
      <MemoryRouter initialEntries={['/art/1']}>
        <Routes>
          <Route path="/art/:id" element={<Art />}></Route>
        </Routes>
      </MemoryRouter>,
    );

    const loadingElement = screen.getByText(MESSAGES.LOADING);
    expect(loadingElement).toBeDefined();
  });

  test('render artwork details after loading', async () => {
    render(
      <MemoryRouter initialEntries={['/art/1']}>
        <Routes>
          <Route path="/art/:id" element={<Art />}></Route>
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      const titleElement = screen.getByText(ARTWORK_EXAMPLE.title);
      expect(titleElement).toBeDefined();
    });

    const artistElement = screen.getByText(ARTWORK_EXAMPLE.artistTitle);
    expect(artistElement).toBeDefined();

    const dateElement = screen.getByText(
      `${ARTWORK_EXAMPLE.dateStart}-${ARTWORK_EXAMPLE.dateEnd}`,
    );
    expect(dateElement).toBeDefined();

    const placeElement = screen.getByText(ARTWORK_EXAMPLE.placeOfOrigin);
    expect(placeElement).toBeDefined();

    const dimensionsElement = screen.getByText(ARTWORK_EXAMPLE.dimensions);
    expect(dimensionsElement).toBeDefined();

    const creditLineElement = screen.getByText(ARTWORK_EXAMPLE.creditLine);
    expect(creditLineElement).toBeDefined();

    const repositoryElement = screen.getByText('Theme 1, Theme 2');
    expect(repositoryElement).toBeDefined();

    const publicElement = screen.getByText(DEFAULT_TEXT.PUBLIC);
    expect(publicElement).toBeDefined();
  });

  test('toggle favorite status on button click', async () => {
    const toggleFavoriteMock = jest.fn();
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [ARTWORK_EXAMPLE],
      toggleFavorite: toggleFavoriteMock,
    });

    render(
      <MemoryRouter initialEntries={['/art/1']}>
        <Routes>
          <Route path="/art/:id" element={<Art />}></Route>
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      const favoriteButton = screen.getByTestId('fav-button');
      expect(favoriteButton.className).toBe('button --white --favorite');
    });
  });
});
