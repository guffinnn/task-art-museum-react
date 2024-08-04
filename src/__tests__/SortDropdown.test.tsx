import { SortDropdown } from '@components/SortDropdown/SortDropdown';
import {
  DEFAULT_SORT_CRITERIA,
  LABEL_TEXT,
  SORT_LABELS,
  SORT_OPTIONS,
} from '@constants/values';
import { fireEvent, render, screen } from '@testing-library/react';

describe('SortDropdown should', () => {
  const mockSetSortCriteria = jest.fn();

  beforeEach(() => {
    mockSetSortCriteria.mockClear();
  });

  test('render correctly with initial sort criteria', () => {
    render(
      <SortDropdown
        sortCriteria={DEFAULT_SORT_CRITERIA}
        setSortCriteria={mockSetSortCriteria}
      />,
    );
    expect(screen.getByLabelText(LABEL_TEXT)).toBeDefined();
    expect(screen.getByDisplayValue(SORT_LABELS.DATE)).toBeDefined();
  });

  test('call setSortCriteria with correct value on change', () => {
    render(
      <SortDropdown
        sortCriteria={DEFAULT_SORT_CRITERIA}
        setSortCriteria={mockSetSortCriteria}
      />,
    );
    fireEvent.change(screen.getByLabelText(LABEL_TEXT), {
      target: { value: SORT_OPTIONS.DATE_REVERSE },
    });
    expect(mockSetSortCriteria).toHaveBeenCalledWith(SORT_OPTIONS.DATE_REVERSE);
  });

  test('display correct option based on sortCriteria prop', () => {
    render(
      <SortDropdown
        sortCriteria={SORT_OPTIONS.ALPHABET}
        setSortCriteria={mockSetSortCriteria}
      />,
    );
    expect(screen.getByDisplayValue(SORT_LABELS.ALPHABET)).toBeDefined();
  });

  test('render all sorting options', () => {
    render(
      <SortDropdown
        sortCriteria={DEFAULT_SORT_CRITERIA}
        setSortCriteria={mockSetSortCriteria}
      />,
    );
    expect(screen.getByText(SORT_LABELS.DATE)).toBeDefined();
    expect(screen.getByText(SORT_LABELS.DATE_REVERSE)).toBeDefined();
    expect(screen.getByText(SORT_LABELS.ALPHABET)).toBeDefined();
    expect(screen.getByText(SORT_LABELS.ALPHABET_REVERSE)).toBeDefined();
  });
});
