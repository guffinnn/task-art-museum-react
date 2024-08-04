import { fetchGlobalData } from '@api/fetchGlobalData';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { SmallCardList } from '@components/lists/SmallCardList/SmallCardList';
import { ARTWORK_LIST_EXAMPLE } from '@constants/testValues';
import { MESSAGES } from '@constants/values';
import { FavoritesProvider } from '@context/FavoritesContext';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('@api/fetchGlobalData', () => ({
  fetchGlobalData: jest.fn(),
}));

describe('SmallCardList should', () => {
  beforeEach(() => {
    (fetchGlobalData as jest.Mock).mockImplementation(
      ({ setLoading, setData }) => {
        setLoading(false);
        setData(ARTWORK_LIST_EXAMPLE);
      },
    );
  });

  test('render loading state correctly', () => {
    (fetchGlobalData as jest.Mock).mockImplementation(({ setLoading }) => {
      setLoading(true);
    });

    render(
      <FavoritesProvider>
        <MemoryRouter>
          <SmallCardList />
        </MemoryRouter>
      </FavoritesProvider>,
    );
    expect(screen.getByText(MESSAGES.LOADING)).toBeDefined();
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
      expect(screen.getByText(ARTWORK_LIST_EXAMPLE[0].title)).toBeDefined();
      expect(
        screen.getByText(ARTWORK_LIST_EXAMPLE[0].artistTitle),
      ).toBeDefined();
      expect(screen.getByText(ARTWORK_LIST_EXAMPLE[1].title)).toBeDefined();
      expect(
        screen.getByText(ARTWORK_LIST_EXAMPLE[1].artistTitle),
      ).toBeDefined();
    });
  });

  test('handle errors with ErrorBoundary', async () => {
    (fetchGlobalData as jest.Mock).mockImplementation(({ setLoading }) => {
      setLoading(false);
      throw new Error('Test error');
    });

    await act(async () => {
      render(
        <FavoritesProvider>
          <MemoryRouter>
            <ErrorBoundary>
              <SmallCardList />
            </ErrorBoundary>
          </MemoryRouter>
        </FavoritesProvider>,
      );
    });

    await waitFor(() => {
      expect(screen.queryByText(MESSAGES.ERROR_OCCURRED)).toBeDefined();
    });
  });
});
