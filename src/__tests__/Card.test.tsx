import { render, screen } from '@testing-library/react';
import { FavoritesProvider } from '../context/FavoritesContext';
import { MemoryRouter } from 'react-router-dom';
import { ArtInfo } from '../constants/api';
import Card from '../components/Card/Card';

test('Should render Card', () => {
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
