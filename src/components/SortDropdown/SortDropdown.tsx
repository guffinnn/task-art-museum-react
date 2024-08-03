import {
  Label,
  Select,
  SortDropdownContainer,
} from '@components/SortDropdown/styled';
import { LABEL_TEXT } from '@constants/values';
import { getSortOptions } from '@helpers/sortDropdownHelpers';
import React, { JSX, memo, useCallback, useMemo } from 'react';

interface SortDropdownProps {
  sortCriteria: string;
  setSortCriteria: (sortCriteria: string) => void;
}

function SortDropdownComponent({
  sortCriteria,
  setSortCriteria,
}: SortDropdownProps): JSX.Element {
  const sortOptions = useMemo(() => getSortOptions(), []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSortCriteria(e.target.value);
    },
    [setSortCriteria],
  );

  return (
    <SortDropdownContainer>
      <Label htmlFor="sort">{LABEL_TEXT}</Label>
      <Select id="sort" value={sortCriteria} onChange={handleChange}>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </SortDropdownContainer>
  );
}

export const SortDropdown = memo(SortDropdownComponent);
