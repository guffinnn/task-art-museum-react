import { Header } from '@components/Header/Header';
import { PATH } from '@constants/paths';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

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
    expect(favoriteLink.getAttribute('href')).toBe(PATH.TO_FAVORITES);
  });

  test('render for Favorites page', () => {
    render(
      <MemoryRouter>
        <Header isHomePage={false} />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeDefined();
    expect(homeLink.getAttribute('href')).toBe(PATH.TO_HOME);

    const favoriteLink = screen.getByRole('link', { name: 'Your favorites' });
    expect(favoriteLink).toBeDefined();
    expect(favoriteLink.getAttribute('href')).toBe(PATH.TO_HOME);
  });

  test('render for Art page', () => {
    render(
      <MemoryRouter>
        <Header isHomePage={false} isArt={true} />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeDefined();
    expect(homeLink.getAttribute('href')).toBe(PATH.TO_HOME);

    const favoriteLink = screen.getByRole('link', { name: 'Your favorites' });
    expect(favoriteLink).toBeDefined();
    expect(favoriteLink.getAttribute('href')).toBe(PATH.TO_FAVORITES);
  });
});
