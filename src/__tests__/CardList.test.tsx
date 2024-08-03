import CardList from '@components/lists/CardList/CardList';
import { render, screen } from '@testing-library/react';

test('Should render CardList', () => {
  render(<CardList />);

  const loadingElement = screen.getByText('Loading...');
  expect(loadingElement).toBeDefined();
});
