interface UrlData {
  currentPage: number;
  limit: number;
  imageId: string;
  searchTerm: string;
  artworkId: number | string;
}

export const URL_GLOBAL = ({ currentPage, limit }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks?page=${currentPage}&limit=${limit}`;
export const URL_IMAGE = ({ imageId }: Partial<UrlData>) =>
  `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
export const URL_SEARCH = ({ searchTerm }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&limit=9`;
export const URL_ARTWORK = ({ artworkId }: Partial<UrlData>) =>
  `https://api.artic.edu/api/v1/artworks/${artworkId}`;

type UnionType = string | number | boolean | null;

export interface ArtInfo {
  id: number | string;
  title: string;
  artist_title: string;
  is_public_domain: boolean;
  date_start: number;
  date_end: number;
  place_of_origin: string;
  dimensions: string;
  credit_line: string;
  image_id: string;
  theme_titles: string | Record<string, UnionType>;
}

interface ApiResponse {
  data: ArtInfo[];
  total: number;
}

export const getJSON = async (
  currentPage: number,
  limit: number,
): Promise<ApiResponse> => {
  const response = await fetch(URL_GLOBAL({ currentPage, limit }));
  return response.json();
};
