import { MESSAGES } from '@constants/home';
import { Home } from '@pages/Home/Home';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

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

    const topicsSection = screen.getByText(MESSAGES.TOPICS_TITLE);
    const moreWorksSection = screen.getByText(MESSAGES.MORE_TITLE);

    expect(topicsSection).toBeDefined();
    expect(moreWorksSection).toBeDefined();
  });
});
