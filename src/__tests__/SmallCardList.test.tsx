import SmallCardList from '@components/SmallCardList/SmallCardList';
import { getJSON } from '@constants/api';
import { FavoritesProvider } from '@context/FavoritesContext';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ArtInfo } from '@custom-types/artInfo';

jest.mock('@constants/api', () => ({
  ...jest.requireActual('@constants/api'),
  getJSON: jest.fn(),
}));

const mockData: ArtInfo[] = [
  {
    id: 1,
    title: 'Art A',
    artist_title: 'Artist A',
    is_public_domain: true,
    date_start: 2020,
    date_end: 2023,
    place_of_origin: 'Place A',
    dimensions: '10x10',
    credit_line: 'Credit A',
    image_id: 'image1',
    theme_titles: [],
  },
  {
    id: 2,
    title: 'Art B',
    artist_title: 'Artist B',
    is_public_domain: true,
    date_start: 2019,
    date_end: 2022,
    place_of_origin: 'Place B',
    dimensions: '20x20',
    credit_line: 'Credit B',
    image_id: 'image2',
    theme_titles: [],
  },
];

describe('SmallCardList should', () => {
  beforeEach(() => {
    (getJSON as jest.Mock).mockResolvedValue({ data: mockData });
  });

  test('render loading state correctly', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <SmallCardList />
        </MemoryRouter>
      </FavoritesProvider>,
    );
    expect(screen.getByText('Loading...')).toBeDefined();
  });

  test('render data correctly', async () => {
    await act(async () => {
      render(
        <FavoritesProvider>
          <MemoryRouter>
            <SmallCardList />
          </MemoryRouter>
        </FavoritesProvider>,
      );
    });

    await waitFor(() => {
      expect(screen.getByText('Art A')).toBeDefined();
      expect(screen.getByText('Artist A')).toBeDefined();
      expect(screen.getByText('Art B')).toBeDefined();
      expect(screen.getByText('Artist B')).toBeDefined();
    });
  });

  test('handle errors with ErrorBoundary', async () => {
    (getJSON as jest.Mock).mockRejectedValue(new Error('Test error'));

    await act(async () => {
      render(
        <FavoritesProvider>
          <MemoryRouter>
            <SmallCardList />
          </MemoryRouter>
        </FavoritesProvider>,
      );
    });

    await waitFor(() => {
      expect(
        screen.queryByText('Something went wrong. Please refresh the page.'),
      ).toBeDefined();
    });
  });
});
