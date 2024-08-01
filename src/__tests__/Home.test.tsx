import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from '../pages/Home/Home';

describe('Home should', () => {
  test('render correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const headingElement = screen.getByText(/let's find some/i);
    expect(headingElement).toBeDefined();
  });

  test('display CardList and SmallCardList sections', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const topicsSection = screen.getByText('Topics for you');
    const moreWorksSection = screen.getByText('Here some more');

    expect(topicsSection).toBeDefined();
    expect(moreWorksSection).toBeDefined();
  });
});
