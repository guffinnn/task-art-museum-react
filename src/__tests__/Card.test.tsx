import { Card } from '@components/cards/Card/Card';
import { PATH } from '@constants/paths';
import { FavoritesProvider } from '@context/FavoritesContext';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ARTWORK_EXAMPLE } from './index';

describe('Card should', () => {
  test('render correctly', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <Card item={ARTWORK_EXAMPLE} />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const element = screen.getByText(ARTWORK_EXAMPLE.title);
    expect(element).toBeDefined();
  });

  test('render with correct link', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <Card item={ARTWORK_EXAMPLE} />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const linkElement = screen.getAllByRole('link');
    expect(linkElement).toBeDefined();
    expect(linkElement[0].getAttribute('href')).toBe(
      `${PATH.FROM_CARD_TO_ART}/${ARTWORK_EXAMPLE.id}`,
    );
  });

  test('render SmallCard inside Card', () => {
    render(
      <FavoritesProvider>
        <MemoryRouter>
          <Card item={ARTWORK_EXAMPLE} />
        </MemoryRouter>
      </FavoritesProvider>,
    );

    const smallCardElement = screen.getByText(ARTWORK_EXAMPLE.title);
    expect(smallCardElement).toBeDefined();
  });
});
