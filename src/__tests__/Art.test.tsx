import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { ArtInfo } from '@constants/api';
import { useFavorites } from '@context/FavoritesContext';
import Art from '@pages/Art/Art';

jest.mock('@context/FavoritesContext', () => ({
  useFavorites: jest.fn(),
}));

global.fetch = jest.fn();

const mockArtwork: ArtInfo = {
  id: 1,
  title: 'Art Title',
  artist_title: 'Artist Name',
  is_public_domain: true,
  date_start: 2020,
  date_end: 2023,
  place_of_origin: 'Place of Origin',
  dimensions: '10x10',
  credit_line: 'Credit Line',
  image_id: 'image1',
  theme_titles: ['Theme 1', 'Theme 2'],
};

describe('Art should', () => {
  beforeEach(() => {
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [mockArtwork],
      toggleFavorite: jest.fn(),
    });

    (fetch as jest.Mock).mockImplementation((url) => {
      if (url.includes('artwork')) {
        return Promise.resolve({
          json: () => Promise.resolve({ data: mockArtwork }),
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

    const loadingElement = screen.getByText('Loading...');
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
      const titleElement = screen.getByText('Art Title');
      expect(titleElement).toBeDefined();
    });

    const artistElement = screen.getByText('Artist Name');
    expect(artistElement).toBeDefined();

    const dateElement = screen.getByText('2020–2023');
    expect(dateElement).toBeDefined();

    const placeElement = screen.getByText('Place of Origin');
    expect(placeElement).toBeDefined();

    const dimensionsElement = screen.getByText('10x10');
    expect(dimensionsElement).toBeDefined();

    const creditLineElement = screen.getByText('Credit Line');
    expect(creditLineElement).toBeDefined();

    const repositoryElement = screen.getByText('Theme 1, Theme 2');
    expect(repositoryElement).toBeDefined();

    const publicElement = screen.getByText('Public');
    expect(publicElement).toBeDefined();
  });

  test('toggle favorite status on button click', async () => {
    const toggleFavoriteMock = jest.fn();
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [mockArtwork],
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
