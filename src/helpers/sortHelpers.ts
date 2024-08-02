import { ArtInfo } from '@custom-types/artInfo';

export const sortResults = (
  results: ArtInfo[],
  criteria: string,
): ArtInfo[] => {
  return [...results].sort((a, b) => {
    switch (criteria) {
      case 'date':
        return new Date(a.date_end).getTime() - new Date(b.date_end).getTime();
      case 'date_reverse':
        return new Date(b.date_end).getTime() - new Date(a.date_end).getTime();
      case 'alphabet':
        return a.title.localeCompare(b.title);
      case 'alphabet_reverse':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
};
