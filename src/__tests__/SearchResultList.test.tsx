import { SearchResultsList } from '@components/lists/SearchResultsList/SearchResultsList';
import { PATH } from '@constants/paths';
import {
  DEFAULT_SORT_CRITERIA,
  MESSAGES,
  SORT_OPTIONS,
} from '@constants/values';
import { FavoritesProvider } from '@context/FavoritesContext';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ARTWORK_LIST_EXAMPLE } from './index';

describe('SearchResultsList should', () => {
  const setLoading = jest.fn();

  test('render loading state correctly', () => {
    render(
      <MemoryRouter>
        <SearchResultsList
          loading={true}
          searchResults={[]}
          setLoading={setLoading}
        />
      </MemoryRouter>,
    );
    expect(screen.getByText(MESSAGES.LOADING)).toBeDefined();
  });

  test('render search results correctly', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <SearchResultsList
            loading={false}
            searchResults={ARTWORK_LIST_EXAMPLE}
            setLoading={setLoading}
          />
        </MemoryRouter>
      </FavoritesProvider>,
    );
    expect(screen.getAllByRole('link')).toHaveLength(
      ARTWORK_LIST_EXAMPLE.length,
    );
  });

  test('sort search results correctly by date', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <SearchResultsList
            loading={false}
            searchResults={ARTWORK_LIST_EXAMPLE}
            setLoading={setLoading}
          />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const sortDropdown = screen.getByRole('combobox');
    fireEvent.change(sortDropdown, {
      target: { value: DEFAULT_SORT_CRITERIA },
    });

    const links = screen.getAllByRole('link');
    expect(links[0].getAttribute('href')).toBe(`${PATH.FROM_CARD_TO_ART}/3`);
    expect(links[1].getAttribute('href')).toBe(`${PATH.FROM_CARD_TO_ART}/2`);
    expect(links[2].getAttribute('href')).toBe(`${PATH.FROM_CARD_TO_ART}/1`);
  });

  test('sort search results correctly by date_reverse', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <SearchResultsList
            loading={false}
            searchResults={ARTWORK_LIST_EXAMPLE}
            setLoading={setLoading}
          />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const sortDropdown = screen.getByRole('combobox');
    fireEvent.change(sortDropdown, {
      target: { value: SORT_OPTIONS.DATE_REVERSE },
    });

    const links = screen.getAllByRole('link');
    expect(links[0].getAttribute('href')).toBe(`${PATH.FROM_CARD_TO_ART}/1`);
    expect(links[1].getAttribute('href')).toBe(`${PATH.FROM_CARD_TO_ART}/2`);
    expect(links[2].getAttribute('href')).toBe(`${PATH.FROM_CARD_TO_ART}/3`);
  });

  test('sort search results correctly by alphabet', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <SearchResultsList
            loading={false}
            searchResults={ARTWORK_LIST_EXAMPLE}
            setLoading={setLoading}
          />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const sortDropdown = screen.getByRole('combobox');
    fireEvent.change(sortDropdown, {
      target: { value: SORT_OPTIONS.ALPHABET },
    });

    const links = screen.getAllByRole('link');
    expect(links[0].getAttribute('href')).toBe(`${PATH.FROM_CARD_TO_ART}/1`);
    expect(links[1].getAttribute('href')).toBe(`${PATH.FROM_CARD_TO_ART}/2`);
    expect(links[2].getAttribute('href')).toBe(`${PATH.FROM_CARD_TO_ART}/3`);
  });

  test('sort search results correctly by alphabet_reverse', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <SearchResultsList
            loading={false}
            searchResults={ARTWORK_LIST_EXAMPLE}
            setLoading={setLoading}
          />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const sortDropdown = screen.getByRole('combobox');
    fireEvent.change(sortDropdown, {
      target: { value: SORT_OPTIONS.ALPHABET_REVERSE },
    });

    const links = screen.getAllByRole('link');
    expect(links[0].getAttribute('href')).toBe(`${PATH.FROM_CARD_TO_ART}/3`);
    expect(links[1].getAttribute('href')).toBe(`${PATH.FROM_CARD_TO_ART}/2`);
    expect(links[2].getAttribute('href')).toBe(`${PATH.FROM_CARD_TO_ART}/1`);
  });
});
