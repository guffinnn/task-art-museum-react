import { fetchData } from '@api/fetchData';
import { urlArtwork, urlGlobal } from '@api/urls';
import { ApiResponse } from '@custom-types/apiResponse';
import { ArtInfo } from '@custom-types/artInfo';
import { toCamelCase } from '@utils/camelCase';

export const getGlobalData = async (
  currentPage: number,
  limit: number,
): Promise<ApiResponse> => {
  const data = await fetchData<ApiResponse>({
    url: urlGlobal({ currentPage, limit }),
  });
  return toCamelCase(data) as ApiResponse;
};

export const getArtworkData = async (artworkId: string): Promise<ArtInfo> => {
  const response = await fetchData<ApiResponse>({
    url: urlArtwork({ artworkId }),
  });
  return toCamelCase(response.data) as ArtInfo;
};
