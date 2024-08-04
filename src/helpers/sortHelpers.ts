import { DO_NOT_SORTING, SORT_OPTIONS } from '@constants/values';
import { ArtInfo } from '@custom-types/artInfo';

export function sortResults(results: ArtInfo[], criteria: string): ArtInfo[] {
  return [...results].sort((first, second) => {
    switch (criteria) {
      case SORT_OPTIONS.DATE:
        return (
          new Date(first.dateEnd).getTime() - new Date(second.dateEnd).getTime()
        );
      case SORT_OPTIONS.DATE_REVERSE:
        return (
          new Date(second.dateEnd).getTime() - new Date(first.dateEnd).getTime()
        );
      case SORT_OPTIONS.ALPHABET:
        return first.title.localeCompare(second.title);
      case SORT_OPTIONS.ALPHABET_REVERSE:
        return second.title.localeCompare(first.title);
      default:
        return DO_NOT_SORTING;
    }
  });
}
