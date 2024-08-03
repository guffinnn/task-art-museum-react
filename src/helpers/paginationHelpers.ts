export const getPages = (
  pageOffset: number,
  pagesPerSet: number,
  totalPages: number,
): number[] => {
  return Array.from(
    { length: Math.min(pagesPerSet, totalPages - pageOffset) },
    (_, i) => i + 1 + pageOffset,
  );
};

export const handleNextSet = (
  pageOffset: number,
  pagesPerSet: number,
  setPageOffset: (offset: number) => void,
) => {
  setPageOffset(pageOffset + pagesPerSet);
};

export const handlePreviousSet = (
  pageOffset: number,
  pagesPerSet: number,
  setPageOffset: (offset: number) => void,
) => {
  setPageOffset(Math.max(pageOffset - pagesPerSet, 0));
};
