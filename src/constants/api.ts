import { UrlData } from '@custom-types/urlData';
import { ApiResponse } from '@custom-types/apiResponse';
import { toCamelCase } from '@utils/camelCase';

export const urlGlobal = ({ currentPage, limit }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=${limit}`;
export const urlImage = ({ imageId }: Partial<UrlData>) =>
  `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
export const urlSearch = ({ searchTerm }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&limit=9`;
export const urlArtwork = ({ artworkId }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks/${artworkId}`;

export const getJSON = async (
  currentPage: number,
  limit: number,
): Promise<ApiResponse> => {
  const response = await fetch(urlGlobal({ currentPage, limit }));
  const data = await response.json();
  return toCamelCase(data);
};
