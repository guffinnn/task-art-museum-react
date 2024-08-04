import { Pagination } from '@components/Pagination/Pagination';
import {
  DEFAULT_TOTAL_PAGES,
  INITIAL_CURRENT_PAGE,
  PAGES_PER_SET,
} from '@constants/values';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Pagination should', () => {
  const onPageChange = jest.fn();

  test('render pagination buttons correctly', () => {
    render(
      <Pagination
        currentPage={INITIAL_CURRENT_PAGE}
        totalPages={DEFAULT_TOTAL_PAGES}
        onPageChange={onPageChange}
      />,
    );

    const pageButtons = screen.getAllByRole('button');
    expect(pageButtons).toHaveLength(PAGES_PER_SET);
    expect(pageButtons[0].textContent).toBe('1');
    expect(pageButtons[1].textContent).toBe('2');
    expect(pageButtons[2].textContent).toBe('3');
    expect(pageButtons[3].textContent).toBe('4');
  });

  test('call onPageChange with correct page number', () => {
    render(
      <Pagination
        currentPage={INITIAL_CURRENT_PAGE}
        totalPages={DEFAULT_TOTAL_PAGES}
        onPageChange={onPageChange}
      />,
    );

    const pageButton = screen.getByRole('button', { name: '2' });
    fireEvent.click(pageButton);

    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test('render next and previous arrow buttons correctly', () => {
    render(
      <Pagination
        currentPage={INITIAL_CURRENT_PAGE}
        totalPages={DEFAULT_TOTAL_PAGES}
        onPageChange={onPageChange}
      />,
    );

    const nextButton = screen.getByTestId('arrow-right');
    expect(nextButton).toBeDefined();

    const prevButton = screen.queryByTestId('arrow-left');
    expect(prevButton).toBeNull();
  });

  test('handle next and previous set of pages correctly', () => {
    render(
      <Pagination
        currentPage={INITIAL_CURRENT_PAGE}
        totalPages={DEFAULT_TOTAL_PAGES}
        onPageChange={onPageChange}
      />,
    );

    const nextButton = screen.getByTestId('arrow-right');
    fireEvent.click(nextButton);

    let pageButtons = screen.getAllByRole('button');
    expect(pageButtons[0].textContent).toBe('5');
    expect(pageButtons[1].textContent).toBe('6');
    expect(pageButtons[2].textContent).toBe('7');
    expect(pageButtons[3].textContent).toBe('8');

    fireEvent.click(screen.getByTestId('arrow-left'));

    pageButtons = screen.getAllByRole('button');
    expect(pageButtons[0].textContent).toBe('1');
    expect(pageButtons[1].textContent).toBe('2');
    expect(pageButtons[2].textContent).toBe('3');
    expect(pageButtons[3].textContent).toBe('4');
  });
});
