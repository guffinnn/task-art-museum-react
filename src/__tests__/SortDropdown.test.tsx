import { SortDropdown } from '@components/SortDropdown/SortDropdown';
import { fireEvent, render, screen } from '@testing-library/react';

describe('SortDropdown should', () => {
  const mockSetSortCriteria = jest.fn();

  beforeEach(() => {
    mockSetSortCriteria.mockClear();
  });

  test('render correctly with initial sort criteria', () => {
    render(
      <SortDropdown
        sortCriteria="date"
        setSortCriteria={mockSetSortCriteria}
      />,
    );
    expect(screen.getByLabelText('Sorting parameters:')).toBeDefined();
    expect(screen.getByDisplayValue('Oldest first')).toBeDefined();
  });

  test('call setSortCriteria with correct value on change', () => {
    render(
      <SortDropdown
        sortCriteria="date"
        setSortCriteria={mockSetSortCriteria}
      />,
    );
    fireEvent.change(screen.getByLabelText('Sorting parameters:'), {
      target: { value: 'date_reverse' },
    });
    expect(mockSetSortCriteria).toHaveBeenCalledWith('date_reverse');
  });

  test('display correct option based on sortCriteria prop', () => {
    render(
      <SortDropdown
        sortCriteria="alphabet"
        setSortCriteria={mockSetSortCriteria}
      />,
    );
    expect(screen.getByDisplayValue('A > Z')).toBeDefined();
  });

  test('render all sorting options', () => {
    render(
      <SortDropdown
        sortCriteria="date"
        setSortCriteria={mockSetSortCriteria}
      />,
    );
    expect(screen.getByText('Oldest first')).toBeDefined();
    expect(screen.getByText('Newest first')).toBeDefined();
    expect(screen.getByText('A > Z')).toBeDefined();
    expect(screen.getByText('Z > A')).toBeDefined();
  });
});
