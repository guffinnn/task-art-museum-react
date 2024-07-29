import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

describe('Header should', () => {
  test('render for Home page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const homeLink = screen.queryByText('Home');
    expect(homeLink).toBeNull();

    const favoriteLink = screen.getByRole('link', { name: 'Your favorites' });
    expect(favoriteLink).toBeDefined();
    expect(favoriteLink.getAttribute('href')).toBe('/favorites');
  });

  test('render for Favorites page', () => {
    render(
      <MemoryRouter>
        <Header isHomePage={false} />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeDefined();
    expect(homeLink.getAttribute('href')).toBe('/task-art-museum-react');

    const favoriteLink = screen.getByRole('link', { name: 'Your favorites' });
    expect(favoriteLink).toBeDefined();
    expect(favoriteLink.getAttribute('href')).toBe('/');
  });

  test('render for Art page', () => {
    render(
      <MemoryRouter>
        <Header isHomePage={false} isArt={true} />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeDefined();
    expect(homeLink.getAttribute('href')).toBe('/task-art-museum-react');

    const favoriteLink = screen.getByRole('link', { name: 'Your favorites' });
    expect(favoriteLink).toBeDefined();
    expect(favoriteLink.getAttribute('href')).toBe(
      '/task-art-museum-react/favorites',
    );
  });
});