import { CardList } from '@components/lists/CardList/CardList';
import { MESSAGES } from '@constants/values';
import { render, screen } from '@testing-library/react';

test('Should render CardList', () => {
  render(<CardList />);

  const loadingElement = screen.getByText(MESSAGES.LOADING);
  expect(loadingElement).toBeDefined();
});
