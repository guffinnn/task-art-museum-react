import defaultImage from '@assets/default.png';
import { ApiResponse } from '@custom-types/apiResponse';
import { ArtInfo } from '@custom-types/artInfo';
import { RequestParams } from '@custom-types/requestParams';
import { UrlData } from '@custom-types/urlData';
import { toCamelCase } from '@utils/camelCase';

export const urlGlobal = ({ currentPage, limit }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=${limit}`;
export const urlImage = ({ imageId }: Partial<UrlData>) => {
  if (imageId === null) {
    return `${defaultImage}`;
  }
  return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
};
export const urlSearch = ({ searchTerm }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&limit=9`;
export const urlArtwork = ({ artworkId }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks/${artworkId}`;

export const fetchData = async <T>({
  url,
  method = 'GET',
  body,
}: RequestParams): Promise<T> => {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(url, options);
  return await response.json();
};

export const getGlobalData = async (
  currentPage: number,
  limit: number,
): Promise<ApiResponse> => {
  const data = await fetchData<ApiResponse>({
    url: urlGlobal({ currentPage, limit }),
  });
  return toCamelCase(data);
};

export const getArtworkData = async (artworkId: string): Promise<ArtInfo> => {
  const response = await fetchData<ApiResponse>({
    url: urlArtwork({ artworkId }),
  });
  return toCamelCase(response.data);
};

export const searchArtworks = async (
  searchTerm: string,
): Promise<ApiResponse> => {
  const data = await fetchData<ApiResponse>({ url: urlSearch({ searchTerm }) });
  return toCamelCase(data);
};
