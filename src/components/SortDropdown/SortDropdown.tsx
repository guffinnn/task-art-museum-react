import './SortDropdown.css';

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
    <div className="sort__dropdown">
      <label htmlFor="sort">Sorting parameters:</label>
      <select
        id="sort"
        value={sortCriteria}
        onChange={(e) => setSortCriteria(e.target.value)}
      >
        <option value="date">Oldest first</option>
        <option value="date_reverse">Newest first</option>
        <option value="alphabet">A &gt; Z</option>
        <option value="alphabet_reverse">Z &gt; A</option>
      </select>
    </div>
  );
}

export default SortDropdown;
