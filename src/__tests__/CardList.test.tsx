import { render, screen } from '@testing-library/react';

import CardList from '@components/CardList/CardList';

test('Should render CardList', () => {
  render(<CardList />);

  const loadingElement = screen.getByText('Loading...');
  expect(loadingElement).toBeDefined();
});
