import { ArtInfo } from '@custom-types/artInfo';

export function sortResults(results: ArtInfo[], criteria: string): ArtInfo[] {
  return [...results].sort((a, b) => {
    switch (criteria) {
      case 'date':
        return new Date(a.dateEnd).getTime() - new Date(b.dateEnd).getTime();
      case 'date_reverse':
        return new Date(b.dateEnd).getTime() - new Date(a.dateEnd).getTime();
      case 'alphabet':
        return a.title.localeCompare(b.title);
      case 'alphabet_reverse':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
}
