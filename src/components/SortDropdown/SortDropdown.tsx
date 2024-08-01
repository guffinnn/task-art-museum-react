import {
  Label,
  Select,
  SortDropdownContainer,
} from '@components/SortDropdown/styled';
import { JSX } from 'react';

interface SortDropdownProps {
  sortCriteria: string;
  setSortCriteria: (sortCriteria: string) => void;
}

function SortDropdown({
  sortCriteria,
  setSortCriteria,
}: SortDropdownProps): JSX.Element {
  return (
    <SortDropdownContainer>
      <Label htmlFor="sort">Sorting parameters:</Label>
      <Select
        id="sort"
        value={sortCriteria}
        onChange={(e) => setSortCriteria(e.target.value)}
      >
        <option value="date">Oldest first</option>
        <option value="date_reverse">Newest first</option>
        <option value="alphabet">A &gt; Z</option>
        <option value="alphabet_reverse">Z &gt; A</option>
      </Select>
    </SortDropdownContainer>
  );
}

export default SortDropdown;
