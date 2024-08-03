import { SORT_LABELS, SORT_OPTIONS } from '@constants/values';

export const getSortOptions = () => {
  return [
    { value: SORT_OPTIONS.DATE, label: SORT_LABELS.DATE },
    { value: SORT_OPTIONS.DATE_REVERSE, label: SORT_LABELS.DATE_REVERSE },
    { value: SORT_OPTIONS.ALPHABET, label: SORT_LABELS.ALPHABET },
    {
      value: SORT_OPTIONS.ALPHABET_REVERSE,
      label: SORT_LABELS.ALPHABET_REVERSE,
    },
  ];
};
