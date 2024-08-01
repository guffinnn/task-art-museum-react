import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import SearchResultsList from '../components/SearchResultsList/SearchResultsList';
import { ArtInfo } from '../constants/api';
import { FavoritesProvider } from '../context/FavoritesContext';

const mockSearchResults: ArtInfo[] = [
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
  {
    id: 3,
    title: 'Art C',
    artist_title: 'Artist C',
    is_public_domain: true,
    date_start: 2018,
    date_end: 2021,
    place_of_origin: 'Place C',
    dimensions: '30x30',
    credit_line: 'Credit C',
    image_id: 'image3',
    theme_titles: [],
  },
];

describe('SearchResultsList should', () => {
  test('render loading state correctly', () => {
    render(
      <MemoryRouter>
        <SearchResultsList loading={true} searchResults={[]} />
      </MemoryRouter>,
    );
    expect(screen.getByText('Loading...')).toBeDefined();
  });

  test('render search results correctly', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <SearchResultsList
            loading={false}
            searchResults={mockSearchResults}
          />
        </MemoryRouter>
      </FavoritesProvider>,
    );
    expect(screen.getAllByRole('link')).toHaveLength(mockSearchResults.length);
  });

  test('sort search results correctly by date', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <SearchResultsList
            loading={false}
            searchResults={mockSearchResults}
          />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const sortDropdown = screen.getByRole('combobox');
    fireEvent.change(sortDropdown, { target: { value: 'date' } });

    const links = screen.getAllByRole('link');
    expect(links[0].getAttribute('href')).toBe('/task-art-museum-react/art/3');
    expect(links[1].getAttribute('href')).toBe('/task-art-museum-react/art/2');
    expect(links[2].getAttribute('href')).toBe('/task-art-museum-react/art/1');
  });

  test('sort search results correctly by date_reverse', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <SearchResultsList
            loading={false}
            searchResults={mockSearchResults}
          />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const sortDropdown = screen.getByRole('combobox');
    fireEvent.change(sortDropdown, { target: { value: 'date_reverse' } });

    const links = screen.getAllByRole('link');
    expect(links[0].getAttribute('href')).toBe('/task-art-museum-react/art/1');
    expect(links[1].getAttribute('href')).toBe('/task-art-museum-react/art/2');
    expect(links[2].getAttribute('href')).toBe('/task-art-museum-react/art/3');
  });

  test('sort search results correctly by alphabet', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <SearchResultsList
            loading={false}
            searchResults={mockSearchResults}
          />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const sortDropdown = screen.getByRole('combobox');
    fireEvent.change(sortDropdown, { target: { value: 'alphabet' } });

    const links = screen.getAllByRole('link');
    expect(links[0].getAttribute('href')).toBe('/task-art-museum-react/art/1');
    expect(links[1].getAttribute('href')).toBe('/task-art-museum-react/art/2');
    expect(links[2].getAttribute('href')).toBe('/task-art-museum-react/art/3');
  });

  test('sort search results correctly by alphabet_reverse', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <SearchResultsList
            loading={false}
            searchResults={mockSearchResults}
          />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const sortDropdown = screen.getByRole('combobox');
    fireEvent.change(sortDropdown, { target: { value: 'alphabet_reverse' } });

    const links = screen.getAllByRole('link');
    expect(links[0].getAttribute('href')).toBe('/task-art-museum-react/art/3');
    expect(links[1].getAttribute('href')).toBe('/task-art-museum-react/art/2');
    expect(links[2].getAttribute('href')).toBe('/task-art-museum-react/art/1');
  });
});
