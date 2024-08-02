import { UrlData } from '@custom-types/urlData';
import { ApiResponse } from '@custom-types/apiResponse';

export const URL_GLOBAL = ({ currentPage, limit }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=${limit}`;
export const URL_IMAGE = ({ imageId }: Partial<UrlData>) =>
  `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
export const URL_SEARCH = ({ searchTerm }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&limit=9`;
export const URL_ARTWORK = ({ artworkId }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks/${artworkId}`;

export const getJSON = async (
  currentPage: number,
  limit: number,
): Promise<ApiResponse> => {
  const response = await fetch(URL_GLOBAL({ currentPage, limit }));
  return response.json();
};
