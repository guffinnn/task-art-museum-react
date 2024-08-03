import { UrlData } from '@custom-types/urlData';

export const urlGlobal = ({ currentPage, limit }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=${limit}`;
export const urlSearch = ({ searchTerm }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&limit=9`;
export const urlArtwork = ({ artworkId }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks/${artworkId}`;
