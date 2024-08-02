import SmallCardList from '@components/SmallCardList/SmallCardList';
import { FavoritesProvider } from '@context/FavoritesContext';
import { ArtInfo } from '@custom-types/artInfo';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('', () => ({
  ...jest.requireActual(''),
  getJSON: jest.fn(),
}));

const mockData: ArtInfo[] = [
  {
    id: '1',
    title: 'Art A',
    artistTitle: 'Artist A',
    isPublicDomain: true,
    dateStart: 2020,
    dateEnd: 2023,
    placeOfOrigin: 'Place A',
    dimensions: '10x10',
    creditLine: 'Credit A',
    imageId: 'image1',
    themeTitles: [],
  },
  {
    id: '2',
    title: 'Art B',
    artistTitle: 'Artist B',
    isPublicDomain: true,
    dateStart: 2019,
    dateEnd: 2022,
    placeOfOrigin: 'Place B',
    dimensions: '20x20',
    creditLine: 'Credit B',
    imageId: 'image2',
    themeTitles: [],
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
