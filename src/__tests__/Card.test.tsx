import Card from '@components/cards/Card/Card';
import { FavoritesProvider } from '@context/FavoritesContext';
import { ArtInfo } from '@custom-types/artInfo';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const item: ArtInfo = {
  id: 1,
  title: 'Some Title',
  artist_title: 'Some Artist',
  is_public_domain: true,
  date_start: 2000,
  date_end: 2001,
  place_of_origin: 'NY',
  dimensions: '20x10',
  credit_line: 'Some info',
  image_id: '12937453672',
  theme_titles: 'Some theme title',
};

describe('Card should', () => {
  test('render correctly', () => {
    const item: ArtInfo = {
      id: 1,
      title: 'Some Title',
      artist_title: 'Some Artist',
      is_public_domain: true,
      date_start: 2000,
      date_end: 2001,
      place_of_origin: 'NY',
      dimensions: '20x10',
      credit_line: 'Some info',
      image_id: '12937453672',
      theme_titles: 'Some theme title',
    };

    render(
      <FavoritesProvider>
        <MemoryRouter>
          <Card item={item} />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const element = screen.getByText('Some Title');
    expect(element).toBeDefined();
  });

  test('render with correct link', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <Card item={item} />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const linkElement = screen.getAllByRole('link');
    expect(linkElement).toBeDefined();
    expect(linkElement[0].getAttribute('href')).toBe(
      `/task-art-museum-react/art/${item.id}`,
    );
  });

  test('render SmallCard inside Card', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <Card item={item} />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const smallCardElement = screen.getByText('Some Title');
    expect(smallCardElement).toBeDefined();
  });
});
